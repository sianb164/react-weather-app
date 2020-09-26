import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:00`;
  }
  // {props.temperatureUnit === "celsius" ? "active" : "";}

  let maxTemp = Math.round(props.data.main.temp_max);
  let minTemp = Math.round(props.data.main.temp_min);

  if (props.temperatureUnit === "fahrenheit") {
    maxTemp = Math.round((props.data.main.temp_max * 9) / 5 + 32);
    minTemp = Math.round((props.data.main.temp_min * 9) / 5 + 32);
  }

  return (
    <div className="WeatherForecastPreview col-sm-2">
      <div className="forecast-time">{hours()}</div>
      <WeatherIcon icon={props.data.weather[0].icon} />
      <div className="weather-forecast-temperature">
        <strong>{maxTemp}°</strong> / {minTemp}°
      </div>
    </div>
  );
}
