import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  return (
    <div className="WeatherForecastPreview col-2">
      <div className="forecast-time">{hours()}</div>
      <WeatherIcon icon={props.data.weather[0].icon} />
      <div className="weather-forecast-temperature">
        <strong>{Math.round(props.data.main.temp_max)}°</strong> /{" "}
        {Math.round(props.data.main.temp_min)}°
      </div>
    </div>
  );
}
