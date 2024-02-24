import logo from "./imgs/currentvue-favicon-color.png";
import NavBar from "./components/NavBar/NavBar";
import WeatherSplash from "./components/WeatherSplash/WeatherSplash";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <WeatherSplash />
      </main>
    </div>
  );
}

export default App;
