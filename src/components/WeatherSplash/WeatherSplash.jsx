import React, { useState, useEffect } from 'react';
import "./WeatherSplash.css";
import Logo from "../../imgs/currentvue-high-resolution-logo-transparent.png"
import Lottie from 'react-lottie';
import Rain from "../../imgs/lottie/sunny_showers.json";
import Clear from "../../imgs/lottie/sun.json";
import Clouds from "../../imgs/lottie/cloudy.json";
import Snow from "../../imgs/lottie/snowy.json";
import Thunderstorm from "../../imgs/lottie/thunder_showers.json";
import WeatherAPI from "../WeatherAPI/WeatherAPI";
import NavBar from "../NavBar/NavBar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


export default function WeatherSplash(props) {
    const { weatherIcon } = props;
    const [city, setCity] = useState('Welcome');
    // const [weatherData, setWeatherData] = useState(null);
    // const [weatherIcon, setWeatherIcon] = useState(Rain);
    
    const handleSearch = (search) => {
        setCity(search);
    }

    let weatherPic = weatherIcon; 
    
    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: Rain,
        // rendererSettings: {
        //     preserveAspectRatio: 'xMidYmid slice',
        // },
    };
    console.log(weatherIcon);


  return (
    <section className="d-flex align-items-center py-3 weather-splash">
        <NavBar onSearch={handleSearch} />
        <div className="text-align-center offset-1 col col-xl-6 weather-at-a-glance">
            <h2 className="row col-12 justify-content-center">Outside Your Window</h2>
            <div className="col-11 d-flex align-items-center weather-box">
                {/* <img className="app-logo w-100" alt="logo" /> */}
                    <Lottie 
                        options={animationOptions} 
                        className="col-xl-5 weather-animation" 
                        alt="Weather Animation"
                    />
            </div>
        </div>
        <div className="d-flex flex-wrap flex-column align-items-center justify-content-center offset-1 col col-xl-3 summary-box">
            <WeatherAPI city={city} />
            <div className="d-flex flex-wrap justify-content-center">
                <button className=" btn offset-1 col-5">Prev Day</button>
                <button className=" btn col-5">Next Day</button>
                <button className="btn offset-1 col-10">Detailed Weather Report</button>
            </div>
        </div>
    </section>
  )
}
