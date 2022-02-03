import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Units from "./Units";

export default function WetherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="main-image">
          <WeatherIcon code={props.weather.icon} />
        </div>
        <Units celcius={props.weather.temperature} />
        <div className="Description">
          <ul>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {Math.round(props.weather.wind)} km/h</li>
          </ul>
        </div>
      </div>
      <div className="col-6">
        <div className="City">
          <h1>{props.weather.city}</h1>
        </div>
        <div className="City">
          <ul>
            <li>
              <FormattedDate date={props.weather.date} />
            </li>
            <li className="text-capitalize">{props.weather.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
