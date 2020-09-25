import React from "react";
import "./App.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Oxford" />
      <hr />
      <WeatherForecast />
      <hr />
      <Footer />
    </div>
  );
}
