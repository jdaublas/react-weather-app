import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "7cc4ba5a8fa8fdc11de61ff161ff458d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <input
              type="Search"
              placeholder="Enter a city...."
              autoFocus="on"
              onChange={handleChange}
            />
            <button className="btn btn-primary">Search</button>
          </form>
          <WeatherInfo weather={weather} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading app......";
  }
}
