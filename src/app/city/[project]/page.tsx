import MapView from "@/@components/MapContainer";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

// Define types for your API responses
interface Project {
  id: string;
  name: string;
  location: string;
  priceRange: string;
  builder: string;
}

type ProjectData = {
  projects: Project[];
};

interface GeocodeData {
  lat: number;
  lng: number;
}

interface MapViewProps {
    params: {
        project: string;
    }
  
  }

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { project: string };
}): Promise<Metadata> {
  const city = params.project.trim();
  return {
    title: `${city} Projects | YourSiteName`,
    description: `Real estate projects in ${city}`,
  };
}

// Dynamic import for MapContainer
const MapContainer = dynamic(() => import("@/@components/MapContainer"), {
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),

});

 const Page :React.FC<any> =  async (props:any) => {
  const city = props.params.project.trim();
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.56.1:3000";

  try {
    const [projectsRes, geocodeRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/scrap?city=${encodeURIComponent(city)}`, {
        cache: "no-store",
      }),
      fetch(`${API_BASE_URL}/api/geocode?location=${encodeURIComponent(city)}`, {
        cache: "no-store",
      }),
    ]);

    if (!projectsRes.ok) {
      throw new Error(`Failed to fetch projects: ${projectsRes.status}`);
    }

    let geocodeData: GeocodeData | null = null;
    if (geocodeRes.ok) {
      geocodeData = await geocodeRes.json();
    }

    const { projects }: ProjectData = await projectsRes.json();

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {geocodeData ? (
          <MapView projects={projects} cordData={geocodeData} />
        ) : (
          <div className="p-4 text-yellow-600">
            Map unavailable - location data could not be loaded
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <h3 className="text-red-800 font-medium">Error</h3>
        <p className="text-red-700">
          {error instanceof Error ? error.message : "Failed to load data"}
        </p>
      </div>
    );
  }
}

export default Page
