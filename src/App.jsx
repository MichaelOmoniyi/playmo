import Player from "./component/Player";
import PlayMOLogo from "./assets/PlayMO.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <header>
          <a href="/">
            <img src={PlayMOLogo} alt="PlayMo Logo" />
          </a>
        </header>
      </div>
      <div className="music-dash">
        <Player />
      </div>
    </div>
  );
}
