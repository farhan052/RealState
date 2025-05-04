'use client';

import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

// Fix for default marker icons (uncomment when needed)
// import L from 'leaflet';
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// Dynamically import Location component with loading state
const Location = dynamic(() => import('./Location'), {
  loading: () => <div className="invisible" />,
  ssr: false
});

// Type definitions
interface CoordinateData {
  latitude: number;
  longitude: number;
}

interface Project {
  id: string | number;
  name: string;
  location: string;
  priceRange: string;
  builder: string;
  latitude?: number;
  longitude?: number;
}

interface MapViewProps {
  projects: Project[];
  cordData: CoordinateData;
}

const DEFAULT_CENTER: [number, number] = [18.559, 79.012];
const DEFAULT_ZOOM = 13;

const MapView: React.FC<MapViewProps> = ({ projects, cordData }) => {
  // Safely get center coordinates with fallbacks
  const center: [number, number] = [
    cordData?.latitude ?? DEFAULT_CENTER[0],
    cordData?.longitude ?? DEFAULT_CENTER[1]
  ];

  // Filter projects with valid coordinates
  const projectsWithCoords = projects.filter(project => 
    project.latitude && project.longitude
  );

  return (
    <LeafletMap 
      center={center} 
      zoom={DEFAULT_ZOOM} 
      style={{ height: '100dvh', width: '100dvw' }}
      className="z-0" // Ensure map stays behind other elements
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      
      {projectsWithCoords.map((project) => (
        <Location 
          key={project.id} 
          project={project} 
          cordData={cordData} 
        />
      ))}
    </LeafletMap>
  );
};

export default MapView;