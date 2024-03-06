import React, { useState, useEffect } from 'react';
import "./WeatherSplash.css";
import Logo from "../../imgs/currentvue-high-resolution-logo-transparent.png"
// import Lottie from 'react-lottie';
import Rain from "../../imgs/clipart_inferiors/rain.png";
import Clear from "../../imgs/clipart_inferiors/sun.png";
import Clouds from "../../imgs/clipart_inferiors/cloudy.png";
import Snow from "../../imgs/clipart_inferiors/snow.png";
import Thunderstorm from "../../imgs/clipart_inferiors/thunder.png";
import Mist from "../../imgs/clipart_inferiors/mist.png";
import CurrentVue from "../../imgs/currentvue-high-resolution-logo-transparent.png";
// import Rain from "../../imgs/lottie/sunny_showers.json";
// import Clear from "../../imgs/lottie/sun.json";
// import Clouds from "../../imgs/lottie/cloudy.json";
// import Snow from "../../imgs/lottie/snowy.json";
// import Thunderstorm from "../../imgs/lottie/thunder_showers.json";
import WeatherAPI from "../WeatherAPI/WeatherAPI";
import NavBar from "../NavBar/NavBar";


export default function WeatherSplash({ weatherData, weatherIcon }) {
    const [shadowColor, setShadowColor] = useState("lightblue");
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState([]);

    

    const handleChangeColor = () => {
        if (weatherIcon === "Rain" || weatherIcon === "Drizzle") {
            setShadowColor("lightblue");
        } else if (weatherIcon === "Clear") {
            setShadowColor("goldenrod");
        } else if (weatherIcon === "Clouds") {
            setShadowColor("gray");
        } else if (weatherIcon === "Snow") {
            setShadowColor("rgb(132, 178, 247)");
        } else if (weatherIcon === "Thunderstorm") {
            setShadowColor("black");
        } else if (
            weatherIcon === "Mist" || 
            weatherIcon === "Smoke" ||
            weatherIcon === "Haze" ||
            weatherIcon === "Dust" ||
            weatherIcon === "Fog" ||
            weatherIcon === "sand" ||
            weatherIcon === "Ash" ||
            weatherIcon === "Squall" ||
            weatherIcon === "Tornado"
            ) {
                setShadowColor("rgb(156, 153, 121)");
        } else {
            setShadowColor("rgb(194, 205, 207)");
        }

    }

    useEffect(() => {
        handleChangeColor();
    }, [weatherIcon])

    const weatherOptions = {
        "Rain": Rain,
        "Drizzle": Rain,
        "Clear": Clear,
        "Clouds": Clouds,
        "Snow": Snow,
        "Thunderstorm": Thunderstorm,
        "Mist": Mist,
        "Smoke": Mist,
        "Haze": Mist,
        "Dust": Mist,
        "Fog": Mist,
        "Sand": Mist,
        "Ash": Mist,
        "Squall": Mist,
        "Tornado": Mist,
        "CurrentVue": CurrentVue,
    }

    let fahrenheit = () => {
        let kelvin = weatherData.main.temp;
        let celciusTemp = kelvin - 273.15;
        let fahrenheitTemp = ((celciusTemp * 9 / 5) + 32).toFixed(1);
        return fahrenheitTemp;
    }

    if (!weatherIcon) {
        weatherIcon = "CurrentVue";
        weatherData.name = "Welcome";
        weatherData.main.humidity = "Your Weather";
        // weatherData.weather[0]?.description = "Your Way";
    }

    let addFavorite = () => {
        setFavorites((favorites) => [
            ...favorites,
            [weatherData.name, weatherIcon]
        ])
    };

  return (
    <section className="d-flex align-items-center py-3 weather-splash">
        <NavBar shadowColor={shadowColor} favorites={favorites}/>
        <div className="text-align-center offset-1 col col-xl-6 weather-at-a-glance">
            <h2 className="row col-12 justify-content-center">Outside Your Window</h2>
            <div className="col-11 d-flex align-items-center weather-box" style={{ boxShadow: `5px 5px 8px ${shadowColor}` }}>
                <img
                    src={weatherOptions[weatherIcon]}
                    // src={Snow}
                    className="weather-img"
                    alt="Weather Icon"
                />
                {/* <img className="app-logo w-100" alt="logo" /> */}
                    {/* <Lottie 
                        options={animationOptions} 
                        className="col-xl-5 weather-animation" 
                        alt="Weather Animation"
                    /> */}
            </div>
        </div>
        <div className="d-flex flex-wrap flex-column align-items-center justify-content-center offset-1 col col-xl-3 summary-box" style={{ boxShadow: `0px 0px 15px ${shadowColor}` }}>
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
          </div>
        )
      )}
    </div>
            <div className="d-flex flex-wrap justify-content-center">
                {/* <button className=" btn offset-1 col-5">Prev Day</button>
                <button className=" btn col-5">Next Day</button> */}
                <button className="btn col" onClick={addFavorite}>Save to Favorites</button>
            </div>
        </div>
    </section>
  )
}
