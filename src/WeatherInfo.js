import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-width-230">
          <h1 className="main-temp">
            13<span className="unit">°C</span>
          </h1>
        </div>
        <div className="col-width-130">
          <ul>
            <li>
              <div className="temp-list">
                <span className="high">H: 20°</span>
                <span className="low">&nbsp;&nbsp;L: 10°</span>
              </div>
            </li>
            <li>
              Humidity: <span className="humidity">13</span>%
            </li>
            <li>
              Wind: <span className="wind-speed">10</span>km/h
            </li>
          </ul>
        </div>
        <div className="col-width-320">
          <h1 className="city">GUANGZHOU</h1>
          <div className="date">Wednesday 17:13</div>
          <div className="weather-description">Mostly Cloudy</div>
        </div>
      </div>
    </div>
  );
}
