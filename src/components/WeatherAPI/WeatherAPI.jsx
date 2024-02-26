import React, { useState, useEffect } from 'react';
import WeatherSplash from '../WeatherSplash/WeatherSplash';

const WeatherAPI = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'e9afe9e234a1e13792df43eca9f930c4';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw ('Search for a valid location');
        }

        const result = await response.json();
        setWeatherData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [city]);

  let fahrenheit = () => {
    let kelvin = weatherData.main.temp;
    let celciusTemp = kelvin - 273.15;
    let fahrenheitTemp = ((celciusTemp * 9 / 5) + 32).toFixed(1);
    return fahrenheitTemp;
  }

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        weatherData && (
          <div>
            <h1>{weatherData.name}</h1>
            <p>Temperature: {fahrenheit()} &deg;F</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0]?.description}</p>
            {/* {weatherData.weather && (
              <WeatherSplash weatherIcon={weatherData.weather[0].main} />
            )} */}
            <div className="d-none"><WeatherSplash weatherIcon={weatherData.weather[0].main} /></div>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherAPI;
