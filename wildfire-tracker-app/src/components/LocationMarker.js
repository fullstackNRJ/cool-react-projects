import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import MarkerPopup from "./MarkerPopup";
import fireIcon from "./fire.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: fireIcon,
  shadowUrl: iconShadow,
  iconSize: [32, 32],
  shadowSize: [28, 28],
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMarker = ({ lat, lng, info }) => {
  return (
    <Marker position={[lat, lng]}>
      <MarkerPopup info={info} />
    </Marker>
  );
};

export default LocationMarker;
