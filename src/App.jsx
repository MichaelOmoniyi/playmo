import Player from "./component/Player";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <header>
          <a href="/">
            <img src="/src/assets/PlayMO.png" alt="PlayMo Logo" />
          </a>
        </header>
      </div>
      <div className="music-dash">
        <Player />
      </div>
    </div>
  );
}
