import React from 'react';
import "./WeatherSplash.css";

export default function WeatherSplash() {
  return (
    <section className="d-flex py-3 weather-splash">
        <div className="offset-1 col col-xl-6 weather-box"></div>
        <div className="offset-1 col col-xl-3 feature-box"></div>
    </section>
  )
}
