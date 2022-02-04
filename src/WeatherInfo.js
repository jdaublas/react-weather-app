import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Units from "./Units";

export default function WetherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="main-image">
          <WeatherIcon code={props.weather.icon} size={38} />
        </div>
        <Units celcius={props.weather.temperature} />
      </div>
      <div className="col-6">
        <div className="City">
          <h1>{props.weather.city}</h1>
        </div>
        <div className="City">
          <ul className="Date">
            <li>
              <FormattedDate date={props.weather.date} />
            </li>
            <li className="text-capitalize">{props.weather.description}</li>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {Math.round(props.weather.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
