import React from "react";

export default function WeatherTemperature(props) {
  if (props.temperatureUnit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span> {props.temperature}</span>°
        <span className="current-temp-unit">C</span>
      </div>
    );
  } else if (props.temperatureUnit === "fahrenheit") {
    let fahrenheitTemperature = (props.temperature * 9) / 5 + 32;

    return (
      <div className="WeatherTemperature">
        <span> {Math.round(fahrenheitTemperature)}</span>°
        <span className="current-temp-unit">F</span>
      </div>
    );
  }
}
