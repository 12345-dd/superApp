import { useEffect, useState } from "react";
import "./Weather.css";
import { getWeather } from "../../utils/weatherApi";
import {WiThunderstorm, WiStrongWind, WiHumidity} from "react-icons/wi";

import { FaTemperatureHigh } from "react-icons/fa";


const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather("Surat");
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, []);

  const currentDate = new Date();

  const date = currentDate.toLocaleDateString("en-US").replace(/\//g, "-");;
  const time = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (!weather) {
    return (
      <div className="weather-widget">
        Loading...
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <span>{date}</span>
        <span>{time}</span>
      </div>

      <div className="weather-body">

        <div className="weather-section">
          <WiThunderstorm className="main-icon" />

          <p className="weather-condition">
            {weather.weather[0].main}
          </p>
        </div>

        <div className="divider"></div>

        <div className="weather-section">
          <h2>
            {Math.round(weather.main.temp)}°C
          </h2>

          <div className="info-row">
            <FaTemperatureHigh />

            <div>
              <p>{weather.main.pressure} mbar</p>
              <span>Pressure</span>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="weather-section">

          <div className="info-row">
            <WiStrongWind />

            <div>
              <p>{weather.wind.speed} km/h</p>
              <span>Wind</span>
            </div>
          </div>

          <div className="info-row">
            <WiHumidity />

            <div>
              <p>{weather.main.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Weather;