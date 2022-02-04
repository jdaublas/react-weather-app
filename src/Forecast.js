import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "7cc4ba5a8fa8fdc11de61ff161ff458d";
  let lat = props.coords;
  let lon = props.coords;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          Thu
          <div>
            <WeatherIcon code="01d" size={24} />
          </div>
          <span className="Forecast-max">19°</span>
          <span className="Forecast-min">16°</span>
        </div>
      </div>
    </div>
  );
}
