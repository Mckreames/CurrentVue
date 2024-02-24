import logo from "./imgs/currentvue-favicon-color.png";
import NavBar from "./components/NavBar/NavBar";
import WeatherSplash from "./components/WeatherSplash/WeatherSplash";
import Divider from "./components/Divider/Divider";
import NewsSect from "./components/NewsSect/NewsSect";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <h1 className="d-flex justify-content-center home-head">
          Weather Today, Your Way!
        </h1>
        <p>(today's date)</p>
        <WeatherSplash />
        <Divider />
        <NewsSect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
