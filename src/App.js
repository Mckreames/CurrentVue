import React, { useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import WeatherSplash from "./components/WeatherSplash/WeatherSplash";
import Divider from "./components/Divider/Divider";
import NewsSect from "./components/NewsSect/NewsSect";
import Footer from "./components/Footer/Footer";
import "./App.css";

// Local State
function getInitialState() {
  let savedState = localStorage.getItem("items");
  if (typeof savedState === "string" && savedState !== "") {
    return JSON.parse(savedState);
  }
  return [];
}

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    weather: [],
  });
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

    let i = 0;

    const fetchData = async () => {
      try {
        if (city.trim() === "" && i === 0) {
          i++;
          return;
        } else {
          alert("Search for a valid location!");
          return;
        }
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Search for a valid location");
        } else {
          const result = await response.json();
          setWeatherData(result);
        }
      } catch (error) {
        console.error;
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
