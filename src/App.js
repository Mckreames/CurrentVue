import logo from "./logo.svg";
import HeadElement from "./components/HeadElement/HeadElement";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeadElement />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
