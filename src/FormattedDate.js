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

  let strTime =
    day +
    " " +
    props.date.getHours() +
    ":" +
    props.date.getMinutes() +
    " " +
    ampm;

  return <div>{strTime}</div>;
}
