import React from 'react';
import "./WeatherSplash.css";
import Lottie from 'react-lottie';
import SunnyShowers from "../../imgs/lottie/sunny_showers.json"

export default function WeatherSplash() {

    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: SunnyShowers,
        rendererSettings: {
            preserveAspectRatio: 'xMidYmid slice',
        },
    };

  return (
    <section className="d-flex py-3 weather-splash">
        <div className="text-align-center offset-1 col col-xl-6 weather-at-a-glance">
            <h2 className="row col-12 justify-content-center">Outside Your Window</h2>
            <div className="col-11 weather-box">
                <Lottie options={animationOptions} class="col-xl-5 weather-animation" alt="Sunny with showers" />
            </div>
        </div>
        <div className="d-flex flex-wrap align-items-center offset-1 col col-xl-3 summary-box">
            <h2>Today's Weather Report</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis aliquam enim tenetur? Tenetur nisi blanditiis laudantium rerum? Esse ducimus deserunt temporibus, aspernatur quisquam ex, earum dolore incidunt at similique in minima adipisci tempora repellendus impedit labore molestiae veritatis, facere asperiores tempore ratione iure modi reiciendis. Illo nostrum iste nihil voluptas!
            </p>
            <button className=" btn col-5">Prev Day</button>
            <button className=" btn offset-2 col-5">Next Day</button>
            <button className="btn offset-1 col-10">Detailed Weather Report</button>
        </div>
    </section>
  )
}
