import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form>
            <input type="Search" placeholder="Enter a city...." />
            <button className="btn btn-primary">Search</button>
          </form>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt="mostly_sunny" className="main-image" />
            <div className="Temp">{Math.round(weather.temperature)}</div>
            <div className="Degrees">°C|F</div>
            <div className="Description">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="City">
              <h1>{weather.city}</h1>
            </div>
            <div className="City">
              <ul>
                <li>
                  <FormattedDate date={weather.date} />
                </li>
                <li className="text-capitalize">{weather.description}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "7cc4ba5a8fa8fdc11de61ff161ff458d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return "Loading app......";
}
