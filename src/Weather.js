import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      maximum: Math.round(response.data.main.temp_max),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "672723bd53f0c644c902cc3d0f7bbe45";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="input-group mb-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Change city here..."
            autoComplete="off"
            onChange={handleCityChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary change-city-button button-icon"
              type="submit"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
        <div className="UnitSelector">
          <div className="unit-buttons">
            <button className="celsius-button active">Celsius</button>
            <button className="fahrenheit-button secondary">Fahrenheit</button>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
