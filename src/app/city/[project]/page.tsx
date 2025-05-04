import { CityPageProps } from "@/types/city";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// Define types for your API responses
type ProjectData = {
  projects: any[]; // Replace 'any' with proper project type
};

type GeocodeData = {
  // Define the structure of your geocode data
  lat: number;
  lng: number;
  // ... other properties
};

// Generate metadata (optional)
export async function generateMetadata({
    params,
  }: {
    params: { project: string };
  }): Promise<Metadata> {
    const city =  await params?.project.trim();
    return {
      title: `${city} Projects | YourSiteName`,
      description: `Real estate projects in ${city}`,
    };
  }
  

// Disable SSR for map components if they use window object
const MapContainer = dynamic(() => import("@/@components/MapContainer"), {
  loading: () => <p>Loading map...</p>,
//   ssr: false, // if the map component uses window object
});



export default async function Page({ params }: {params: { project: string }}) {
  const city = params.project.trim();
  const API_BASE_URL = process.env.API_BASE_URL || "http://192.168.56.1:3000";

  try {
    // Fetch data in parallel
    const [projectsRes, geocodeRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/scrap?city=${city}`, {
        cache: "no-store",
      }),
      fetch(`${API_BASE_URL}/api/geocode?location=${city}`, {
        cache: "no-store",
      }),
    ]);

    if (!projectsRes.ok ) {
        
      throw new Error("Failed to fetch data");
    }

    const { projects: Data }: ProjectData = await projectsRes.json();
    const CordDat: GeocodeData = await geocodeRes.json();

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {geocodeRes.ok?
        <MapContainer projects={Data} cordData={CordDat} />
        :'ull'}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="p-4 text-red-500">
        Failed to load data. Please try again later.
      </div>
    );
  }
}