import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

const Map = ({ center, zoom }) => {
  return (
    <MapContainer
      className="map"
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "900px", position: "relative" }}
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
  zoom: 10,
};

export default Map;
