import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons
import "./Player.css";

export default function Player() {
  const [fileContent, setFileContent] = useState(null);
  const [file, setFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause, duration, sound }] = useSound(fileContent);

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [time, setTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

  const FileSelector = (event) => {
    const file = event.target.files[0];
    console.log("File: ", file);
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
        console.log("File content: ", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const time = {
      min: min,
      sec: secRemain,
    };
    setTime(time);
  }, [duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
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
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  return (
    <div className="component">
      <label htmlFor="selectFolder" className="selectFolder">
        Select folder...
      </label>
      <input
        type="file"
        className="selectFolderInput"
        id="selectFolder"
        name="selectFolder"
        onChange={FileSelector}
        accept="audio/*"
      />
      <h2>Playing Now</h2>
      <img
        className="musicCover"
        src="https://picsum.photos/200/200"
        alt=""
      ></img>
      <div className="musicInfo">
        <h3 className="title">
          {file ? `${file["name"]}` : "No Audio selected"}
        </h3>
        <p className="subTitle">
          {file ? `${file["lastModifiedDate"]}` : "N/A"}
        </p>
      </div>
      <div>
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec.toString().padStart(2, "0")}
          </p>
          <p>
            {time.min}:{time.sec.toString().padStart(2, "0")}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration ? duration / 1000 : 0}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            if (sound) sound.seek(e.target.value);
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
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
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
  );
}
