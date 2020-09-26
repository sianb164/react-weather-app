import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview
          data={forecast.list[0]}
          temperatureUnit={props.temperatureUnit}
        />
        <WeatherForecastPreview
          data={forecast.list[1]}
          temperatureUnit={props.temperatureUnit}
        />
        <WeatherForecastPreview
          data={forecast.list[2]}
          temperatureUnit={props.temperatureUnit}
        />
        <WeatherForecastPreview
          data={forecast.list[3]}
          temperatureUnit={props.temperatureUnit}
        />
        <WeatherForecastPreview
          data={forecast.list[4]}
          temperatureUnit={props.temperatureUnit}
        />
        <WeatherForecastPreview
          data={forecast.list[5]}
          temperatureUnit={props.temperatureUnit}
        />
      </div>
    );
  } else {
    const apiKey = "6f6faa82ca60d3e65b0d7c9d697a7a6f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
