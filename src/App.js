import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Joveth Daublas - {""}
          <a href="https://github.com/jdaublas/react-weather-app">
            Open-sourced: github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
