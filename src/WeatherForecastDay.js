import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecast.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  let max = Math.round(props.forecast.temperature.maximum);
  let min = Math.round(props.forecast.temperature.minimum);

  if (props.units === "°C") {
    max = Math.round(props.forecast.temperature.maximum * (9 / 5) + 32);
    min = Math.round(props.forecast.temperature.minimum * (9 / 5) + 32);
  }
  return (
    <div>
      <div className="days">{day()}</div>
      <WeatherIcon icon={props.forecast.condition.icon} />
      <div className="temp-list">
        <span className="high">{max}°</span>
        <span className="low"> / {min}°</span>
      </div>
    </div>
  );
}
