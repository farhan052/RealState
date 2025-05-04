import { NextResponse } from 'next/server';
import axios from 'axios';
import { kv } from '@vercel/kv'; // For Redis caching

// Type definitions
interface PositionStackResponse {
  data: Array<{
    latitude: number;
    longitude: number;
    label?: string;
    name?: string;
  }>;
}

interface ErrorResponse {
  error: string;
  message?: string;
  retryAfter?: number;
}

// Rate limiting setup
const RATE_LIMIT = {
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 30, // Max requests per window
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  if (!location) {
    return NextResponse.json<ErrorResponse>(
      { error: 'Missing location parameter' },
      { status: 400 }
    );
  }

  const apiKey = process.env.POSITIONSTACK_API_KEY;
  if (!apiKey) {
    return NextResponse.json<ErrorResponse>(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  // Check cache first
  const cacheKey = `geocode:${location}`;
  try {
    const cached = await kv.get(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }
  } catch (cacheError) {
    console.error('Cache error:', cacheError);
  }

  // Rate limiting check
  const rateLimitKey = `rate:${apiKey}`;
  try {
    const currentCount = await kv.incr(rateLimitKey);
    if (currentCount === 1) {
      await kv.expire(rateLimitKey, RATE_LIMIT.windowMs / 1000);
    }
    if (currentCount > RATE_LIMIT.maxRequests) {
      return NextResponse.json<ErrorResponse>(
        {
          error: 'Rate limit exceeded',
          message: 'Too many requests',
          retryAfter: RATE_LIMIT.windowMs / 1000,
        },
        { status: 429 }
      );
    }
  } catch (rateError) {
    console.error('Rate limiting error:', rateError);
  }

  try {
    const params = {
      access_key: apiKey,
      query: location,
      limit: 1,
      output: 'json',
    };

    const response = await axios.get<PositionStackResponse>(
      'https://api.positionstack.com/v1/forward',
      {
        params,
        timeout: 5000,
        headers: {
          'Accept-Encoding': 'application/json',
        },
      }
    );

    if (!response.data.data || response.data.data.length === 0) {
      return NextResponse.json<ErrorResponse>(
        { error: 'Location not found' },
        { status: 404 }
      );
    }

    const result = response.data.data[0];
    const responseData = {
      latitude: result.latitude,
      longitude: result.longitude,
      label: result.label || location,
    };

    // Cache successful responses for 24 hours
    try {
      await kv.set(cacheKey, responseData, { ex: 86400 });
    } catch (cacheError) {
      console.error('Cache set error:', cacheError);
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Geocoding error:', error);

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        const retryAfter = error.response.headers['retry-after'] || 60;
        return NextResponse.json<ErrorResponse>(
          {
            error: 'API rate limit exceeded',
            message: 'PositionStack API limit reached',
            retryAfter: parseInt(retryAfter.toString(), 10),
          },
          { status: 429 }
        );
      }

      return NextResponse.json<ErrorResponse>(
        {
          error: 'Geocoding service error',
          message: error.message,
        },
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json<ErrorResponse>(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}