
const MapView = dynamic(()=>import( "@/@components/MapContainer"),{
loading:()=> <></>
});
import dynamic from "next/dynamic";
import React from "react";

// Define types for your API responses





// Dynamic import for MapContainer
const MapContainer = dynamic(() => import("@/@components/MapContainer"), {
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),

});

 const Page =  async (props) => {
  const city = await props.params.project.trim();
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.56.1:3000";

  try {
    const projectsRes = await fetch(`${API_BASE_URL}/api/scrap?city=${encodeURIComponent(city)}`, {
        cache: "no-store",
      });
    const geocodeRes = await fetch(`${API_BASE_URL}/api/geocode?location=${encodeURIComponent(city)}`, {
        cache: "no-store",
      });
   

    if (!projectsRes.ok) {
      throw new Error(`Failed to fetch projects: ${projectsRes.status}`);
    }

    let geocodeData = null;
    if (geocodeRes.ok) {
      geocodeData = await geocodeRes.json();
    }

    const { projects } = await projectsRes.json();

    return (<>
      <div className="grid grid-cols-1  gap-4">
        {geocodeData ? (
          <MapView projects={projects} cordData={geocodeData} />
        ) : (
            <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (<>
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <h3 className="text-red-800 font-medium">Error  API_BASE_URL: {API_BASE_URL}</h3>
        <p className="text-red-700">
          {error ? error.message : "Failed to load data"}
        </p>
      </div>
   </>
    );
  }
}

export default Page
