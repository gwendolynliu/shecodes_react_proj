import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import clear_sky from "./img/clear_sky.jpg";
import cloudy from "./img/cloudy.jpg";
import drizzle from "./img/drizzle.jpg";
import foggy from "./img/foggy.jpg";
import snow from "./img/snow.jpg";
import thunder from "./img/thunder.jpg";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "2b32f63e3t5dbc4a0f214f150o0d2cf2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      alert("The city you typed is invalid. Please try another city!");
    } else {
      setWeatherData({
        ready: true,
        city: response.data.city,
        date: new Date(response.data.time * 1000),
        temp: response.data.temperature.current,
        feels_like: response.data.temperature.feels_like,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon,
        description: response.data.condition.description,
        lon: response.data.coordinates.longitude,
        lat: response.data.coordinates.latitude,
      });
    }
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  const imgMapping = {
    "clear-sky-day": clear_sky,
    "clear-sky-night": clear_sky,
    "few-clouds-day": cloudy,
    "few-clouds-night": cloudy,
    "scattered-clouds-day": cloudy,
    "scattered-clouds-night": cloudy,
    "broken-clouds-day": cloudy,
    "broken-clouds-night": cloudy,
    "shower-rain-day": drizzle,
    "shower-rain-night": drizzle,
    "rain-day": drizzle,
    "rain-night": drizzle,
    "thunderstorm-day": thunder,
    "thunderstorm-night": thunder,
    "snow-day": snow,
    "snow-night": snow,
    "mist-day": foggy,
    "mist-night": foggy,
  };

  if (WeatherData.ready) {
    return (
      <div
        className="Weather"
        style={{ backgroundImage: `url(${imgMapping[WeatherData.icon]})` }}
      >
        <WeatherInfo WeatherData={WeatherData} />
        <WeatherForecast city={WeatherData.city} />
        <br />
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-bar"
                autoFocus="on"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <section className="optional-link">
          <i className="curr_loc fa-solid fa-location-dot curr-icon"></i>
          <a href="/" className="f-icon">
            °F
          </a>
        </section>
      </div>
    );
  } else {
    search();
    return (
      <div className="search-loader">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#edf7fa"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
}
