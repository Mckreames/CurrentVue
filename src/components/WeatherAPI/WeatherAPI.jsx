// WeatherComponent.js
import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'e9afe9e234a1e13792df43eca9f930c4';
    const city = 'New York'; // You can change this to the desired city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Unauthorized API key');
        }

        const result = await response.json();
        setWeatherData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        weatherData && (
          <div>
            <h1>{weatherData.name}</h1>
            <p>Temperature: {weatherData.main.temp} &deg;C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            {/* Add more information based on the API response structure */}
          </div>
        )
      )}
    </div>
  );
};

export default WeatherComponent;
