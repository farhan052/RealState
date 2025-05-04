import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import axios from 'axios';

interface Project {
  name: string;
  priceRange: string;
  builder: string;
  location: string;
  latitude?: number;
  longitude?: number;
}

interface CordData {
  latitude: number;
  longitude: number;
}

interface LocationProps {
  project: Project;
  cordData: CordData;
}

const Location: React.FC<LocationProps> = ({ project, cordData }) => {
  const [projectData, setProjectData] = useState<Project>({ ...project });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeocode = async () => {
      // Skip if already has coordinates or is loading
      if (projectData.latitude || loading) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${process.env.API_BASE_URL}/api/geocode?location=${project.location.trim().toString()}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch geocode data');
        }
        const date = new Date()
        console.log(date);

        const data = await response.json();

        if (!data.latitude || !data.longitude) {
          throw new Error('Invalid geocode data received');
        }

        setProjectData(prev => ({
          ...prev,
          latitude: data.latitude,
          longitude: data.longitude
        }));
      } catch (err) {
        console.error('Geocoding error:', err);
        setError(err instanceof Error ? err.message : 'Geocoding failed');
        // Fallback to cordData if available
        // if (cordData?.latitude && cordData?.longitude) {
        //   setProjectData(prev => ({
        //     ...prev,
        //     latitude: cordData.latitude,
        //     longitude: cordData.longitude
        //   }));
        // }
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we don't have coordinates
    if (!projectData.latitude && project.location) {
        
      fetchGeocode();
    }
  }, [project.location, cordData]);

  // Don't render if no coordinates available
  if (!projectData.latitude || !projectData.longitude) {
    if (error) {
      console.warn(`Skipping marker for ${project.name}: ${error}`);
    }
    return null;
  }

  return (
    <Marker 
      key={projectData.name} 
      position={[projectData.latitude, projectData.longitude]}
    >
      <Popup>
        <strong>{projectData.name}</strong><br />
        Price: {projectData.priceRange}<br />
        Builder: {projectData.builder}<br />
        Address: {projectData.location}
      </Popup>
    </Marker>
  );
};

export default Location;