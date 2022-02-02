import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="El Salvador" />
        <footer>
          Coded by Joveth Daublas - {""}
          <a
            href="https://github.com/jdaublas/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced: GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
