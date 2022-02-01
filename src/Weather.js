import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly_sunny"
          />
          -17°C
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 63%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <h1>Edmonton, AB</h1>
          <ul>
            <li>Tuesday 2:00 p.m.</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
