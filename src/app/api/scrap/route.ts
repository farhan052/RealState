import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City is required' }, { status: 400 });
  }

  try {
    // https://www.magicbricks.com/new-projects-Hyderabad
    // https://www.magicbricks.com/new-projects-Hydrabad
    const url = `https://www.magicbricks.com/new-projects-${city}`;
    const response = await axios.get(url);
    // return NextResponse.json({ data:response.data });
    const $ = cheerio.load(response.data);

    const projects: any[] = [];

    $('.projdis__prjcard').map((i, el) => {
      const name = $(el).find('.mghome__prjblk__prjname')?.text().trim();
      const location = $(el).find('.mghome__prjblk__locname')?.text().trim();
      const price = $(el).find('.mghome__prjblk__price')?.text().trim();
      const builder = $(el).find('.mghome__prjblk__buildername')?.text().trim();
      // const image = $(el).find('.mghome__prjblk__imgsec__img') || null;
      const image = $(el).find('img').attr('data-src')?.trim() ? $(el).find('img').attr('data-src')?.trim() : $(el).find('img').attr('src')?.trim();
      // Coordinates may be stored as data attributes or embedded JSON
      const latitude = $(el).attr('data-lat') || null;
      const longitude = $(el).attr('data-lng') || null;

      
        

      if (name) {
        projects.push({ name, location, priceRange: price, builder, image: image });
      }
    });

  

    let sliced = projects.slice(0, 20);
    //  sliced = sliced.map(async (item:any) => {
    //     const {latitude , longitude} = await fetch(`http://192.168.56.1:3000/api/geocode?location=${item.location.toString()}`)
    //     .then((response: any) => {
    //       return  response.json();
    //     }).catch((error: any) => {
    //       console.log(error);
    //     });
    //     item.latitude = Number(latitude);
    //     item.longitude = Number(longitude);
    // })
      
    return NextResponse.json({ projects: sliced });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to scrape', details: error.message },
      { status: 500 }
    );
  }
}
