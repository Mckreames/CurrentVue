import logo from "./imgs/currentvue-favicon-color.png";
import NavBar from "./components/NavBar/NavBar";
import WeatherSplash from "./components/WeatherSplash/WeatherSplash";
import Divider from "./components/Divider/Divider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <h1>
          Weather Today, Your Way - Dive into CurrentVue's Visual Forecast!
        </h1>
        <WeatherSplash />
        <Divider />
      </main>
    </div>
  );
}

export default App;
