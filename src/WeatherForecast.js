import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "2b32f63e3t5dbc4a0f214f150o0d2cf2";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div>
        <div className="forecast row">
          {forecast.map(function (daily, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col block" key={index}>
                  <WeatherForecastDay forecast={daily} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
