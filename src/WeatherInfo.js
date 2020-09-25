import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <h1 className="current-city">{props.data.city}</h1>
          <small>Last updated:</small>
          <h2>
            <span className="current-date">
              <FormattedDate date={props.data.date} />
            </span>
          </h2>
          <p className="current-weather">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Sunny"
            />
            <span> {props.data.temperature}</span>°
            <span className="current-temp-unit">C</span>
          </p>
          <p className="current-description">{props.data.description}</p>
        </div>
        <div className="col-4 hum-wind-max">
          <h3 className="humidity">
            <strong>Humidity:</strong> <span>{props.data.humidity}</span>%
          </h3>
          <h3 className="wind">
            <strong>Wind:</strong> <span>{props.data.wind}</span>
            <span>mph</span>
          </h3>
          <h3 className="maximum">
            <strong>Maximum: </strong>
            <span>{props.data.maximum}</span>°
            <span className="current-temp-unit">C</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
