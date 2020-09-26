import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Oxford" />
        <hr />
        <Footer />
      </div>
    </div>
  );
}
