import React from "react";
import "./Weather.css";

export default function Weather() {
  let currentWeatherData = {
    city: "Oxford",
    date: "Saturday 12 September 12:00",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 21,
    humidity: 5,
    wind: 11,
    maximum: 25,
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-8">
          <h1 className="current-city">{currentWeatherData.city}</h1>
          <small>Last updated:</small>
          <h2>
            <span className="current-date">{currentWeatherData.date}</span>
          </h2>
          <p className="current-weather">
            <img
              src={currentWeatherData.imgUrl}
              alt={currentWeatherData.description}
            />
            <span> {currentWeatherData.temperature}</span>°
            <span className="current-temp-unit">C</span>
          </p>
          <p className="current-description">
            {currentWeatherData.description}
          </p>
        </div>
        <div className="col-4 hum-wind-max">
          <h3 className="humidity">
            <strong>Humidity:</strong>{" "}
            <span>{currentWeatherData.humidity}</span>%
          </h3>
          <h3 className="wind">
            <strong>Wind:</strong> <span>{currentWeatherData.wind}</span>
            <span>mph</span>
          </h3>
          <h3 className="maximum">
            <strong>Maximum: </strong>
            <span>{currentWeatherData.maximum}</span>°
            <span className="current-temp-unit">C</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
