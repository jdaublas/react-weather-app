import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div>Thu</div>
            <div>
              <WeatherIcon code="01d" size={24} />
            </div>
            <span className="Forecast-max">19°</span>
            <span className="Forecast-min">16°</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "7cc4ba5a8fa8fdc11de61ff161ff458d";
    let lat = props.coords;
    let lon = props.coords;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
