import { useLocationContext } from '@/Providers/LocationContext';
import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';





const Location = ({ project, cordData }) => {
        

  
  return (
    <Marker 
      key={project.name} 
      position={[project?.latitude || cordData.latitude , project?.longitude|| cordData.longitude]}
    >
      <Popup>
        <strong>{ project.name}</strong><br />
        Price: {project.priceRange}<br />
        Builder: {project.builder}<br />
        Address: {project.location}
      </Popup>
    </Marker>
  );
};

export default Location;
