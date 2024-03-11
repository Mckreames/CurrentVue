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

// Local State
function getInitialState() {
  let savedState = localStorage.getItem("items");
  if (typeof savedState === "string") {
    console.log(JSON.parse(savedState));
    return JSON.parse(savedState);
  }
  return [];
}

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [favorites, setFavorites] = useState(getInitialState());

  const updateFavorites = (newFavorite) => {
    setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
    localStorage.setItem("items", JSON.stringify([...favorites, newFavorite]));
  };

  // API Call
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
          setWeatherData(result);
        }
      } catch (error) {
        console.log(
          "Let's just act like the error message above doesn't exist... I won't say anything if you don't."
        );
      }
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    if (weatherData?.weather && weatherData.weather.length > 0) {
      setWeatherIcon(weatherData.weather[0].main);
    }
  }, [weatherData]);

  // Search is sent from NavBar through onSearch
  const handleSearch = (search) => {
    setCity(search);
  };

  return (
    <div className="App">
      <main>
        <Banner weatherIcon={weatherIcon} />
        <WeatherSplash
          weatherData={weatherData}
          weatherIcon={weatherIcon}
          onSearch={handleSearch}
          updateFavorites={updateFavorites}
          favorites={favorites}
          setFavorites={setFavorites}
        />
        <Divider />
        <NewsSect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
