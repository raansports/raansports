"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

export default function FreeMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Prevent SSR issue
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-[300px]">
      <MapContainer
        key="unique-map-key"
        center={[23.8103, 90.4125]} // Dhaka
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[23.8103, 90.4125]}>
          <Popup>We are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
