import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
// import { geoCentroid } from "d3-geo";
// import * as d3 from "d3";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { name: "New Delhi", coordinates: [77.1025, 28.7041] }, // Example: India
  { name: "New York", coordinates: [-74.006, 40.7128] }, // Example: USA
  { name: "London", coordinates: [-0.1276, 51.5074] }, // Example: UK
];

const WorldMap = () => {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  return (
    <div className="w-full h-screen">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            onMouseEnter={() => setHoveredMarker(name)}
            onMouseLeave={() => setHoveredMarker(null)}
            onClick={() => alert(`Clicked on ${name}`)}
          >
            <circle
              r={10}
              fill={hoveredMarker === name ? "#FF5722" : "#0f9de8"}
              stroke="#FFF"
              strokeWidth={hoveredMarker === name ? 2 : 0}
            />
            <text
              textAnchor="middle"
              y={15}
              style={{
                fontFamily: "system-ui",
                fill: "#5D5A6D",
                display: hoveredMarker === name ? "block" : "none",
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
