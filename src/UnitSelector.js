import React from "react";
import "./UnitSelector.css";

export default function UnitSelector(props) {
  function handleClickCelsius() {
    if (props.unit === "celsius") {
      return;
    }
    props.onTemperatureUnitChange("celsius");
  }
  function handleClickFahrenheit() {
    if (props.unit === "fahrenheit") {
      return;
    }
    props.onTemperatureUnitChange("fahrenheit");
  }
  return (
    <div className="UnitSelector">
      <div className="unit-buttons">
        <button
          className={`unit-button ${props.unit === "celsius" ? "active" : ""}`}
          onClick={handleClickCelsius}
        >
          Celsius
        </button>
        <button
          className={`unit-button ${
            props.unit === "fahrenheit" ? "active" : ""
          }`}
          onClick={handleClickFahrenheit}
        >
          Fahrenheit
        </button>
      </div>
    </div>
  );
}
