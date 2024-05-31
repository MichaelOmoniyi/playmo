import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="container">
      <header>
        <h1>
          {" "}
          <img
            src="./src/assets/icon.png"
            alt="Playmo icon"
            width="25px"
          />{" "}
          Playmo Music Player
        </h1>
        <p>Experience seamless music playback with our versatile player.</p>
      </header>

      <section className="overview">
        <h2>Overview</h2>
        <p>
          Playmo is a feature-rich music player that allows users to enjoy their
          favorite songs from local files as well as from Spotify. The player
          includes intuitive controls, a visually appealing interface, and a
          smooth user experience.
        </p>
      </section>

      <br />
      <br />

      <section className="value">
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Versatile Playback:</strong> Switch between local audio
            files and Spotify playlists effortlessly.
          </li>
          <li>
            <strong>Intuitive Controls:</strong> Easy-to-use controls for play,
            pause, skip, and seek functionalities.
          </li>
          <li>
            <strong>Engaging Interface:</strong> Visually appealing design with
            album art and track details.
          </li>
          <li>
            <strong>Responsive Design:</strong> Seamlessly adapts to different
            screen sizes and devices.
          </li>
        </ul>
      </section>

      <br />
      <br />

      <section className="instructions">
        <h2>How to Operate</h2>
        <ol>
          <li>
            <strong>Select a Player:</strong> Use the tabs to switch between the
            local music player and the Spotify player.
          </li>
          <li>
            <strong>Play/Pause:</strong> Click the play/pause button to start or
            stop the music.
          </li>
          <li>
            <strong>Skip Tracks:</strong> Use the skip buttons to move to the
            previous or next track.
          </li>
          <li>
            <strong>Seek:</strong> Drag the timeline slider to seek to a
            specific part of the track.
          </li>
        </ol>
      </section>

      <br />
      <br />

      <footer>
        <p>&copy; 2024 Music Player Project. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
