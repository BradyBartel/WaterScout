"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";

const developmentStyle = "https://demotiles.maplibre.org/style.json";

export function MapPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    void import("maplibre-gl").then((maplibregl) => {
      if (cancelled || !containerRef.current) return;

      const map = new maplibregl.Map({
        container: containerRef.current,
        style: process.env.NEXT_PUBLIC_MAP_STYLE_URL ?? developmentStyle,
        center: [-98.5795, 39.8283],
        zoom: 3.3,
      });

      map.addControl(new maplibregl.NavigationControl(), "top-right");
      map.on("error", () => setError(true));
      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="map-preview">
      <div className="map-canvas" ref={containerRef} aria-label="Map preview" />
      {error ? (
        <div className="map-error" role="status">
          Map style unavailable. No fishing-location data is loaded.
        </div>
      ) : null}
      <div className="map-watermark">DEVELOPMENT MAP · NOT FOR NAVIGATION</div>
    </div>
  );
}
