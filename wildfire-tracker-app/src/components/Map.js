import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";

// define constants
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ center, zoom, eventData }) => {
  const markers = eventData.map((event, key) => {
    if (event.categories[0].id === NATURAL_EVENT_WILDFIRE) {
      const [lng, lat] = event.geometries[0].coordinates;
      return (
        <LocationMarker key={key} lng={lng} lat={lat} info={event.title} />
      );
    }
  });

  return (
    <MapContainer style={{ height: "100vh" }} center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  );
};

Map.defaultProps = {
  center: [42.3265, -122.8756],
  zoom: 6,
};

export default Map;
