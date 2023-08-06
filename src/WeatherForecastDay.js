import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecast.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="date">{day()}</div>
      <WeatherIcon icon={props.forecast.condition.icon} />
      <div className="temp-list">
        <span className="high">
          {Math.round(props.forecast.temperature.maximum)}°
        </span>
        <span className="low">
          {" "}
          / {Math.round(props.forecast.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
