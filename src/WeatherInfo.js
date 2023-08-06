import React from "react";
import FormatDate from "./FormatDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-width-230">
          <h1 className="main-temp">
            {Math.round(props.WeatherData.temp)}
            <span className="unit">°C</span>
          </h1>
        </div>
        <div className="col-width-130">
          <ul>
            <li>
              <div className="feels-like">
                Feels like: {Math.round(props.WeatherData.feels_like)}°C
              </div>
            </li>
            <li>
              Humidity:{" "}
              <span className="humidity">{props.WeatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span className="wind-speed">{props.WeatherData.wind}</span>
              km/h
            </li>
          </ul>
        </div>
        <div className="col-width-320">
          <h1 className="city">{props.WeatherData.city}</h1>
          <div className="date">
            <FormatDate date={props.WeatherData.date} />
          </div>
          <div className="weather-description">
            {props.WeatherData.description}
          </div>
        </div>
      </div>
    </div>
  );
}
