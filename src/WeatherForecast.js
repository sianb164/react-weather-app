import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-time">12:00</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            className="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-time">12:00</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            className="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-time">12:00</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            className="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-time">12:00</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            className="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-time">12:00</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            className="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-time">12:00</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            className="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
      </div>
    </div>
  );
}