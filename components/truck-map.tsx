"use client";

import { getMarkerColor } from "@/utils/helpers";
import { TruckData } from "@/utils/types";
import { useEffect, useRef } from "react";

interface TruckMapProps {
  truck: TruckData;
  height?: string;
}

function createCircleMarker(color: string, size = 20, L: any) {
  // Inline SVG string, dynamic fill color
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 32 32" 
         xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" fill="${color}" stroke="white" stroke-width="2"/>
    </svg>`;

  return L.divIcon({
    className: "", // remove default styles
    html: svg,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function TruckMap({ truck, height = "400px" }: TruckMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Dynamically import Leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      // Import  Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      if (mapRef.current && !mapInstanceRef.current) {
        // Initialize map
        mapInstanceRef.current = L.map(mapRef.current).setView(
          [truck.location.coordinates.lat, truck.location.coordinates.lng],
          13
        );

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstanceRef.current);

        // Create custom icon based on truck status
        // Create marker
        const customIcon = L.divIcon({
          html: `
            <div style="
              background-color: ${getMarkerColor(truck.status)};
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            "></div>
          `,
          className: "custom-truck-marker",
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        });

        markerRef.current = L.marker(
          [truck.location.coordinates.lat, truck.location.coordinates.lng],
          { icon: customIcon }
        ).addTo(mapInstanceRef.current);

        // Add popup
        markerRef.current
          .bindPopup(
            `
          <div style="text-align: center;">
            <strong>${truck.id}</strong><br/>
            Driver: ${truck.driverName}<br/>
            Status: ${truck.status}<br/>
            Location: ${truck.location.city}
          </div>
        `
          )
          .openPopup();
      }
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update marker position when truck location changes
  useEffect(() => {
    if (mapInstanceRef.current && markerRef.current) {
      const newLatLng = [
        truck.location.coordinates.lat,
        truck.location.coordinates.lng,
      ];
      markerRef.current.setLatLng(newLatLng);
      mapInstanceRef.current.setView(newLatLng, 13);
    }
  }, [truck.location.coordinates]);

  return (
    <div
      ref={mapRef}
      style={{ height, width: "100%" }}
      className="rounded-lg overflow-hidden border "
    />
  );
}
