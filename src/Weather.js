import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnitSelector from "./UnitSelector";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  let [temperatureUnit, setTemperatureUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date((response.data.dt + response.data.timezone) * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      maximum: Math.round(response.data.main.temp_max),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
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
    const apiKey = "6f6faa82ca60d3e65b0d7c9d697a7a6f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form className="input-group mb-3 col-sm" onSubmit={handleSubmit}>
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
        </div>
        <UnitSelector
          unit={temperatureUnit}
          onTemperatureUnitChange={setTemperatureUnit}
        />
        <hr />
        <WeatherInfo data={weatherData} temperatureUnit={temperatureUnit} />
        <hr />
        <WeatherForecast
          city={weatherData.city}
          temperatureUnit={temperatureUnit}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
