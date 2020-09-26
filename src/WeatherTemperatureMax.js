import React from "react";

export default function WeatherTemperatureMax(props) {
  if (props.temperatureUnit === "celsius") {
    return (
      <span className="WeatherTemperatureMax">
        <span> {props.temperature}</span>°
        <span className="current-temp-unit">C</span>
      </span>
    );
  } else if (props.temperatureUnit === "fahrenheit") {
    let fahrenheitTemperature = (props.temperature * 9) / 5 + 32;

    return (
      <span className="WeatherTemperature">
        <span> {Math.round(fahrenheitTemperature)}</span>°
        <span className="current-temp-unit">F</span>
      </span>
    );
  }
}
