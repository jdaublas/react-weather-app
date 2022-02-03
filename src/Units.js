import React, { useState } from "react";

export default function Units(props) {
  const [units, setUnits] = useState("celcius");

  function convertToFahrenhiet(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnits("celcius");
  }

  if (units === "celcius") {
    return (
      <div>
        <div className="Temp">{Math.round(props.celcius)}</div>
        <div className="Degrees">
          °C |{" "}
          <a href="/" onClick={convertToFahrenhiet}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div>
        <div className="Temp">{Math.round(fahrenheit)}</div>
        <div className="Degrees">
          {" "}
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>{" "}
          |°F
        </div>
      </div>
    );
  }
}
