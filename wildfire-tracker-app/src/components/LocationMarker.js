import React from "react";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import { Marker } from "react-leaflet";
import L from "leaflet";
import MarkerPopup from "./MarkerPopup";

export const FireIcon = new L.Icon({
  iconUrl: fireIcon,
  iconRetinaUrl: require("../components/FireIcon.svg"),
  iconAnchor: [32, 32],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [32, 32],
  className: "leaflet-fire-icon",
});

const LocationMarker = ({ lat, lng, info }) => {
  return (
    <Marker position={[lat, lng]}>
      <MarkerPopup info={info} />
    </Marker>
  );
};

export default LocationMarker;
