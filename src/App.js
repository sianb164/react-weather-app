import React from "react";
import "./App.css";

import Search from "./Search";
import UnitSelector from "./UnitSelector";
import Weather from "./Weather";
import FiveDayForecast from "./FiveDayForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <UnitSelector />
      <hr />
      <Weather />
      <hr />
      <FiveDayForecast />
      <hr />
      <Footer />
    </div>
  );
}
