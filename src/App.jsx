import Player from "./component/Player";
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <header>
          <img src="/src/assets/PlayMO.png" alt="PlayMo Logo" />
        </header>
      </div>
      <div className="music-dash">
        <Player />
      </div>

    </div>
  );
}
