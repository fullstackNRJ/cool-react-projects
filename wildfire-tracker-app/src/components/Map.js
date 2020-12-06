import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";


const Map = ({ center, zoom }) => {
  return (
    <MapContainer
    style={{ height: "100vh" }} 
      center={center}
      zoom={zoom}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

Map.defaultProps = {
  center: [42.3265, -122.8756],
  zoom: 6,
};

export default Map;
