import React from "react";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherTemperatureMax from "./WeatherTemperatureMax";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-8">
          <h1 className="current-city">{props.data.city}</h1>
          <small>Last updated:</small>
          <span className="current-date">
            <FormattedDate date={props.data.date} />
          </span>
          <div className="current-weather">
            <WeatherIcon icon={props.data.icon} />
            <div className="current-temp">
              <WeatherTemperature
                temperature={props.data.temperature}
                temperatureUnit={props.temperatureUnit}
              />
            </div>
          </div>
          <p className="current-description">{props.data.description}</p>
        </div>
        <div className="col-sm-4 hum-wind-max">
          <h3 className="humidity">
            <strong>Humidity:</strong> <span>{props.data.humidity}</span>%
          </h3>
          <h3 className="wind">
            <strong>Wind:</strong> <span>{props.data.wind}</span>
            <span>mph</span>
          </h3>
          <h3 className="maximum">
            <strong>Maximum: </strong>
            <span>
              <WeatherTemperatureMax
                temperature={props.data.temp_max}
                temperatureUnit={props.temperatureUnit}
              />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
