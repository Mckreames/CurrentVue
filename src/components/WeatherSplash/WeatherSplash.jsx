import React, { useState, useEffect } from 'react';
import "./WeatherSplash.css";
import Lottie from 'react-lottie';
import Rain from "../../imgs/lottie/sunny_showers.json";
import Clear from "../../imgs/lottie/sun.json";
import Clouds from "../../imgs/lottie/cloudy.json";
import Snow from "../../imgs/lottie/snowy.json";
import Thunderstorm from "../../imgs/lottie/thunder_showers.json";
import WeatherAPI from "../WeatherAPI/WeatherAPI";
import NavBar from "../NavBar/NavBar";


export default function WeatherSplash() {
    const [city, setCity] = useState('Knoxville');
    const [weatherData, setWeatherData] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(Rain);
    const [error, setError] = useState(null);

    const handleSearch = (search) => {
        setCity(search);
    }

    // useEffect(() => {
    //     const apiKey = 'e9afe9e234a1e13792df43eca9f930c4';
    //     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(apiUrl);
    
    //         if (!response.ok) {
    //           throw ('Search for a valid location');
    //         }
    
    //         const result = await response.json();
    //         setWeatherData(result);
    //         console.log(result);
    //       } catch (error) {
    //         setError(error.message);
    //       }
    //     };

    //     const currWeatherIcon = () => {
    //         setWeatherIcon(result.data.weather.main);
    //     }
        
    //     fetchData();
    // }, [city]);

    // const weatherAnimationMapping = {
    //     'Rain': Rain,
    //     'Clear': Clear,
    //     'Clouds': Clouds,
    //     'Snow': Snow,
    //     'Thunderstorm': Thunderstorm,
    //   };      

    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: Clouds,
        // animationData: currWeatherIcon,
        // animationData: weatherAnimationMapping[weatherData.weather[0].main] || Rain
        rendererSettings: {
            preserveAspectRatio: 'xMidYmid slice',
        },
    };


  return (
    <section className="d-flex align-items-center py-3 weather-splash">
        <NavBar onSearch={handleSearch} />
        <div className="text-align-center offset-1 col col-xl-6 weather-at-a-glance">
            <h2 className="row col-12 justify-content-center">Outside Your Window</h2>
            <div className="col-11 weather-box">
            <Lottie options={animationOptions} className="col-xl-5 weather-animation" alt="Weather Animation"
            />
            </div>
        </div>
        <div className="d-flex flex-wrap flex-column align-items-center justify-content-center offset-1 col col-xl-3 summary-box">
            <WeatherAPI city={city} setWeatherData={setWeatherData} />
            <div className="d-flex flex-wrap justify-content-center">
                <button className=" btn offset-1 col-5">Prev Day</button>
                <button className=" btn col-5">Next Day</button>
                <button className="btn offset-1 col-10">Detailed Weather Report</button>
            </div>
        </div>
    </section>
  )
}
