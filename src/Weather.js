import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Search">
        <form>
          <input type="Search" placeholder="Search for a city" />
          <input type="Submit" value="Search" className="btn btn-primary" />
        </form>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly_sunny"
          />
          <div className="Temp">-17</div>
          <div className="Degrees">°C|F</div>
          <div className="Description">
            <ul>
              <li>Precipitation: 2%</li>
              <li>Humidity: 63%</li>
              <li>Wind: 8 km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="City">
            <h1>Edmonton, AB</h1>
          </div>
          <div className="City">
            <ul>
              <li>Tuesday 2:00 p.m.</li>
              <li>Mostly Cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
