import { useEffect, useState } from "react";
import useSound from "use-sound";
import winMusic from "../assets/all-i-do-is-win.mp3";
import musicImage from "../assets/music-player.jpg";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./Player.css";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(winMusic);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying, duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const [activeTab, setActiveTab] = useState("local");

  return (
    <div className="component">
      <a
        href="https://www.youtube.com/watch?v=C_m_9X3-WpQ"
        className="toUse"
      >How to use?</a>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "local" ? "active" : ""}`}
          onClick={() => setActiveTab("local")}
        >
          Local Player
        </button>
        <h2 style={{ color: "white" }}>Playing Now</h2>
        <button
          className={`tab ${activeTab === "spotify" ? "active" : ""}`}
          onClick={() => setActiveTab("spotify")}
        >
          Spotify Player
        </button>
      </div>
      <div>
        {activeTab === "local" && (
          <div className="local-player">
            <img className="musicCover" src={musicImage} alt="Music Cover" />
            <div className="titles">
              <h3 className="title">All I Do Is Win</h3>
              <div className="marquee-container">
                <div className="marquee">
                  <p className="subTitle">
                    Rick Ross ft. DJ Khaled, Ludacris, Snoop Dogg & T Pain
                  </p>
                </div>
              </div>
            </div>
            <div className="playerDisplay">
              <div className="time">
                <p>
                  {currTime.min}:{currTime.sec}
                </p>
                <p>
                  {time.min}:{time.sec}
                </p>
              </div>
              <input
                type="range"
                min="0"
                max={duration / 1000}
                defaultValue="0"
                value={seconds}
                className="timeline"
                onChange={(e) => {
                  sound.seek([e.target.value]);
                }}
              />
            </div>
            <div>
              <button className="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <BiSkipPrevious />
                </IconContext.Provider>
              </button>
              {!isPlaying ? (
                <button className="playButton" onClick={playingButton}>
                  <IconContext.Provider
                    value={{ size: "3em", color: "#27AE60" }}
                  >
                    <AiFillPlayCircle />
                  </IconContext.Provider>
                </button>
              ) : (
                <button className="playButton" onClick={playingButton}>
                  <IconContext.Provider
                    value={{ size: "3em", color: "#27AE60" }}
                  >
                    <AiFillPauseCircle />
                  </IconContext.Provider>
                </button>
              )}
              <button className="playButton">
                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                  <BiSkipNext />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        )}
        {activeTab === "spotify" && (
          <iframe
            className="spotify-frame"
            title="Spotify Embed: Recommendation Playlist"
            src={`https://open.spotify.com/embed/playlist/6hfwHFC3PLf1Doz23GSPWf?utm_source=generator&theme=0`}
            width="100%"
            height="360px"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
