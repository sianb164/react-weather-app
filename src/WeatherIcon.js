import React from "react";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WeatherIcon.css";

const weatherIconMap = {
  "01d": "CLEAR",
  "01n": "CLEAR_NIGHT",
  "02d": "SUN_CLOUD",
  "02n": "MOON_CLOUD",
  "03d": "CLOUDS",
  "03n": "CLOUDS",
  "04d": "CLOUDS",
  "04n": "CLOUDS",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "THUNDER",
  "11n": "THUNDER",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};

export default function WeatherIcon(props) {
  function renderSunCloud() {
    return (
      <div className="icon sun-shower">
        <div className="cloud"></div>
        <div className="sun">
          <div className="rays"></div>
        </div>
      </div>
    );
  }

  function renderThunderStorm() {
    return (
      <div className="icon thunder-storm">
        <div className="cloud"></div>
        <div className="lightning">
          <div className="bolt"></div>
          <div className="bolt"></div>
        </div>
      </div>
    );
  }

  function renderCloudy() {
    return (
      <div className="icon cloudy">
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>
    );
  }

  function renderFlurries() {
    return (
      <div className="icon flurries">
        <div className="cloud"></div>
        <div className="snow">
          <div className="flake"></div>
          <div className="flake"></div>
        </div>
      </div>
    );
  }

  function renderSunny() {
    return (
      <div className="icon sunny">
        <div className="sun">
          <div className="rays"></div>
        </div>
      </div>
    );
  }

  function renderRainy() {
    return (
      <div className="icon rainy">
        <div className="cloud"></div>
        <div className="rain"></div>
      </div>
    );
  }
  const icon = weatherIconMap[props.icon];

  if (icon === "CLEAR") {
    return renderSunny();
  } else if (icon === "CLOUDS") {
    return renderCloudy();
  } else if (icon === "RAIN") {
    return renderRainy();
  } else if (icon === "THUNDER") {
    return renderThunderStorm();
  } else if (icon === "SNOW") {
    return renderFlurries();
  } else if (icon === "SUN_CLOUD") {
    return renderSunCloud();
  } else if (icon === "CLEAR_NIGHT") {
    return <FontAwesomeIcon icon={faMoon} className="fontAwesomeIcon" />;
  } else if (icon === "MOON_CLOUD") {
    return <FontAwesomeIcon icon={faCloudMoon} className="fontAwesomeIcon" />;
  } else if (icon === "FOG") {
    return <FontAwesomeIcon icon={faSmog} className="fontAwesomeIcon" />;
  }
}
