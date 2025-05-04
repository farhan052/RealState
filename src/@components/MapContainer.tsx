'use client';

import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import type { LatLngExpression } from 'leaflet';

// Fix for default marker icons
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

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

const DEFAULT_CENTER: LatLngExpression = [18.559, 79.012];
const DEFAULT_ZOOM = 13;

const Location = dynamic(() => import('./Location'), {
  loading: () => <div className="invisible" />,
  ssr: false
});

const MapView = ({ projects, cordData }: MapViewProps) => {
  // Safely get center coordinates with fallbacks
  const center: LatLngExpression = [
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
      className="z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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