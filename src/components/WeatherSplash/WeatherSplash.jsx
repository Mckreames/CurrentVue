import React, { useState, useEffect } from 'react';
import "./WeatherSplash.css";
import Logo from "../../imgs/currentvue-high-resolution-logo-transparent.png"
// import Lottie from 'react-lottie';
import Rain from "../../imgs/clipart_inferiors/rain.png";
import Clear from "../../imgs/clipart_inferiors/sun.png";
import Clouds from "../../imgs/clipart_inferiors/cloudy.png";
import Snow from "../../imgs/clipart_inferiors/snow.png";
import Thunderstorm from "../../imgs/clipart_inferiors/thunder.png";
// import Rain from "../../imgs/lottie/sunny_showers.json";
// import Clear from "../../imgs/lottie/sun.json";
// import Clouds from "../../imgs/lottie/cloudy.json";
// import Snow from "../../imgs/lottie/snowy.json";
// import Thunderstorm from "../../imgs/lottie/thunder_showers.json";
import WeatherAPI from "../WeatherAPI/WeatherAPI";
import NavBar from "../NavBar/NavBar";


export default function WeatherSplash({ weatherData, weatherIcon }) {
    // const [weatherIcon, setWeatherIcon] = useState(Rain);
    const [error, setError] = useState(null);
    console.log("Weather Data", weatherData);
    console.log("Weather Icon", weatherIcon);

    // useEffect(() => {
    // let stupidWorkAround = () => {
    //     for (let x = 0; x <= 2; x++) {
    //         setTimeout(() => {
    //             setWeatherIcon(weatherData.weather[0].main);
    //         }, 500);
    //         if(weatherIcon === null) {
    //             weatherIcon = Rain;
    //             return weatherIcon;
    //         } else {
    //             return weatherIcon;
    //         }
    //     }
    // };

    // const animationOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData:  Rain,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYmid slice',
    //     },
    // };
    // }, [weatherIcon, ]);
    const weatherOptions = {
        "Rain": Rain,
        "Clear": Clear,
        "Cloud": Clouds,
        "Snow": Snow,
        "Thunderstorm": Thunderstorm,
    }

    let fahrenheit = () => {
        let kelvin = weatherData.main.temp;
        let celciusTemp = kelvin - 273.15;
        let fahrenheitTemp = ((celciusTemp * 9 / 5) + 32).toFixed(1);
        return fahrenheitTemp;
      }

  return (
    <section className="d-flex align-items-center py-3 weather-splash">
        <NavBar />
        <div className="text-align-center offset-1 col col-xl-6 weather-at-a-glance">
            <h2 className="row col-12 justify-content-center">Outside Your Window</h2>
            <div className="col-11 d-flex align-items-center weather-box">
                <img
                    // src={weatherOptions[weatherIcon]}
                    src={Clear}
                    className="weather-img"
                    alt="Weather Image"
                />
                {/* <img className="app-logo w-100" alt="logo" /> */}
                    {/* <Lottie 
                        options={animationOptions} 
                        className="col-xl-5 weather-animation" 
                        alt="Weather Animation"
                    /> */}
            </div>
        </div>
        <div className="d-flex flex-wrap flex-column align-items-center justify-content-center offset-1 col col-xl-3 summary-box">
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
                <button className=" btn offset-1 col-5">Prev Day</button>
                <button className=" btn col-5">Next Day</button>
                <button className="btn offset-1 col-10">Detailed Weather Report</button>
            </div>
        </div>
    </section>
  )
}
