import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = ({ info }) => {
  return (
    <Popup>
      <div className="poup-text">{info}</div>
    </Popup>
  );
};
export default MarkerPopup;
