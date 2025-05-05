'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';


// Fix for default marker icons
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { LocationContext, useLocationContext } from '@/Providers/LocationContext';




const DEFAULT_CENTER = [18.559, 79.012];
const DEFAULT_ZOOM = 16;

const Location = dynamic(() => import('./Location'), {
  loading: () => <div className="invisible" />,
  ssr: false
});

const MapView = ({ projects, cordData }) => {
  const [i, setI] = useState(0)
  const [Projects, setProjects] = useState([]);
  // Safely get center coordinates with fallbacks
  const center = [
    cordData?.latitude ?? DEFAULT_CENTER[0],
    cordData?.longitude ?? DEFAULT_CENTER[1]
  ];


 
 const getCordData = async (project) => {
             console.log(project.location);
             const response = await fetch(
               `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/geocode?location=${project.location.toString()}`
             );
             const data = await response.json();
             console.log(data);
                setProjects(prev => [...prev, { ...project, ...data }]);
               //  console.log(data);
             return data;
           };

   useEffect(() => {
     if(i >= projects.length){
      return;
     }

   
  
    Promise.resolve(getCordData(projects[i])).then(()=>
      setI(i + 1)
    );
  
  }, [i]);
  

  

  return (

    <LocationContext.Provider value={{ Projects, setProjects }}>
      <div className='grid grid-cols-1 '>
      {/* {JSON.stringify(useLocationContext(), projects)} */}
    <LeafletMap 
      center={center}
      zoom={DEFAULT_ZOOM}
      style={{ height: '100dvh', width: '100dvw' }}
      className="z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      
      {Projects.map((project) => project.latitude&&
        <Location 
          key={project.id} 
          project={project} 
          cordData={cordData} 
        />
      )}
    </LeafletMap>
        </div>
    </LocationContext.Provider>
  );
};

export default MapView;
