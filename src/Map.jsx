import React from "react";
import map from "./assets/map.png";

const Map = () => {
  return (
    <div className="world-map relative flex justify-center items-center">
      <img
        src={map}
        className="w-full max-w-[80vw]  mx-auto object-contain"
        alt="World Map"
      />
      <div className="pin usa">
        <span>United States</span>
      </div>
      <div className="pin france">
        <span>France</span>
      </div>
      <div className="pin sweden">
        <span>Sweden</span>
      </div>
      <div className="pin south-africa">
        <span>South Africa</span>
      </div>
      <div className="pin brazil">
        <span>Brazil</span>
      </div>
      <div className="pin china">
        <span>China</span>
      </div>
      <div className="pin india">
        <span>India</span>
      </div>
    </div>
  );
};

export default Map;
