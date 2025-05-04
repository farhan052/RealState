'use client'

import React, { useEffect } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
import dynamic from 'next/dynamic';
const Location = dynamic(() => import("./Location"), {
    loading: () => <></>
 });

// Fix marker icon issue with Leaflet in React
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

type Project = {
  name: string;
  location: string;
  priceRange: string;
  builder: string;
  latitude: number;
  longitude: number;
};

interface MapViewProps {
  projects: Project[];
  cordData: any;
}

const MapView: React.FC<MapViewProps> = ({ projects , cordData }) => {
  // const defaultPosition: [number, number] = [projects?[0]?.latitude || 18.559, projects[0]?.longitude || 79.012];
  

  return (
    <LeafletMap center={[cordData.latitude,  cordData.longitude]} zoom={2} style={{ height: '100dvh', width: '100dvw' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {projects.map((project, idx) => (
       <Location project={project} cordData={cordData} key={idx}/>
      ))}
    </LeafletMap>
  );
};

export default MapView;
