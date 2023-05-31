import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Map = ({ latitude, longitude }) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={15} style={{ height: '600px', width: '1800px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} />
    </MapContainer>
  );
};

export default Map;
