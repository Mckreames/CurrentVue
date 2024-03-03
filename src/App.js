import React, { useState, useEffect } from "react";
import logo from "./imgs/currentvue-favicon-color.png";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import WeatherSplash from "./components/WeatherSplash/WeatherSplash";
import Logo from "./imgs/currentvue-high-resolution-logo-transparent.png";
import Divider from "./components/Divider/Divider";
import NewsSect from "./components/NewsSect/NewsSect";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("CurrentVue");

  useEffect(() => {
    const apiKey = "e9afe9e234a1e13792df43eca9f930c4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw "Search for a valid location";
        } else {
          const result = await response.json();
          // console.log(result);
          setWeatherData(result);
        }
      } catch (error) {
        console.log("This don't look right, Chief...");
      }
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    if (weatherData?.weather && weatherData.weather.length > 0) {
      setWeatherIcon(weatherData.weather[0].main);
    }
  }, [weatherData]);

  const handleSearch = (search) => {
    setCity(search);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar onSearch={handleSearch} />
      </header>
      <main>
        <Banner />
        <WeatherSplash weatherData={weatherData} weatherIcon={weatherIcon} />
        <Divider />
        <NewsSect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
