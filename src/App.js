import React, { useState, useEffect } from "react";
import logo from "./imgs/currentvue-favicon-color.png";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import WeatherSplash from "./components/WeatherSplash/WeatherSplash";
import Divider from "./components/Divider/Divider";
import NewsSect from "./components/NewsSect/NewsSect";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [city, setCity] = useState("Knoxville");
  const [weatherData, setWeatherData] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("Rain");

  useEffect(() => {
    const apiKey = "e9afe9e234a1e13792df43eca9f930c4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw "Search for a valid location";
        }
        const result = await response.json();
        setWeatherData(result);
      } catch (error) {
        console.log("This don't look right, chief...");
      }
    };

    fetchData();
  }, [city]);

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
        <WeatherSplash weatherData={weatherData} />
        <Divider />
        <NewsSect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
