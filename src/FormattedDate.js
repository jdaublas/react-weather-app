import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = ((hours + 11) % 12) + 1;
  let minutes = props.date.getMinutes();
  let strTime = day + " " + hours + ":" + minutes + " " + ampm;

  return <div>{strTime}</div>;
}
