import logo from "./imgs/currentvue-favicon-color.png";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import WeatherSplash from "./components/WeatherSplash/WeatherSplash";
import Divider from "./components/Divider/Divider";
import NewsSect from "./components/NewsSect/NewsSect";
import WeatherAPI from "./components/WeatherAPI/WeatherAPI";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Banner />
        <WeatherSplash />
        <Divider />
        <NewsSect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
