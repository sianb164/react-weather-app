import React from "react";
import "./UnitSelector.css";

export default function UnitSelector() {
  return (
    <div className="UnitSelector">
      <div className="unit-buttons">
        <button className="celsius-button active">Celsius</button>
        <button className="fahrenheit-button secondary">Fahrenheit</button>
      </div>
    </div>
  );
}
