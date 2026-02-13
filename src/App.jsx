import { useState } from "react";

// Existing Bear Gifs & Assets
import listenBear from "./assets/cute-bear.gif";
import loveYouBear from "./assets/love-you-bear.gif";
import gift from "./assets/gift/gift.jpg";

// Song Covers
import VisiriCover from "./assets/Visiri.jpg";
import NeramCover from "./assets/Neram.jpg";
import HridayamCover from "./assets/Hridayam.jpg";
import AdadaAdadaCover from "./assets/AdadaAdada.jpg";
import SaayndhuSaayndhuCover from "./assets/SaayndhuSaayndhu.jpg";

// Song Files
import Visiri from "./assets/Visiri.mp3";
import Neram from "./assets/Neram.mp3";
import Hridayam from "./assets/Hridayam.mp3";
import AdadaAdada from "./assets/AdadaAdada.mp3";
import SaayndhuSaayndhu from "./assets/SaayndhuSaayndhu.mp3";

// Your Personal Memories (Papa Photos)
import Papa1 from "./assets/Papa1.jpg";
import Papa2 from "./assets/Papa2.jpg";
import Papa3 from "./assets/Papa3.jpg";
import Papa4 from "./assets/Papa4.jpg";
import Papa5 from "./assets/Papa5.jpg";

function App() {
  const [view, setView] = useState("initial");
  const [noLabel, setNoLabel] = useState("NO 💔");

  const handleNoHover = () => {
    const labels = ["Are you sure?", "Really sure?", "Think again!", "Last chance!", "Surely not!"];
    setNoLabel(labels[Math.floor(Math.random() * labels.length)]);
  };

  if (view === "initial") {
    return (
      <div className="valentine-root">
        <div className="card">
          <img src={listenBear} alt="bear" className="bear-img" />
          <h1 className="title">Sushmitha ❤️</h1>
          <p className="subtitle">Will you be my Valentine? 🥺❤️</p>
          <div className="btn-group">
            <button className="btn yes" onClick={() => setView("yes")}>YES ❤️</button>
            <button className="btn no" onMouseEnter={handleNoHover} onClick={handleNoHover}>{noLabel}</button>
          </div>
        </div>
      </div>
    );
  }

  if (view === "yes") {
    return (
      <div className="valentine-root">
        <div className="card">
          <img src={loveYouBear} alt="bear" className="bear-img" />
          <h1 className="yay">Yay! I love you so much! ❤️</h1>
          <button className="btn yes" onClick={() => setView("gifts")}>Open Your Gifts 🎁</button>
        </div>
      </div>
    );
  }

  if (view === "gifts") {
    return (
      <div className="valentine-root">
        <div className="card full-width">
          <h1 className="yay">Your Valentine Gifts 🎁</h1>
          <div className="gifts-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
            <div className="gift-card" onClick={() => setView("songs")}>
              <img src={gift} alt="gift" />
              <p>Gift 1: Our Songs 🎵</p>
            </div>
            <div className="gift-card" onClick={() => setView("letter")}>
              <img src={gift} alt="gift" />
              <p>Gift 2: My Letter 💌</p>
            </div>
            {/* GIFT 3 ADDED HERE */}
            <div className="gift-card" onClick={() => setView("memories")} style={{ border: '2px solid #ff4d6d' }}>
              <img src={gift} alt="gift" />
              <p>Gift 3: Our Memories 📸</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === "songs") {
    const songs = [
      { name: "Visiri", cover: VisiriCover, file: Visiri },
      { name: "Neram", cover: NeramCover, file: Neram },
      { name: "Hridayam", cover: HridayamCover, file: Hridayam },
      { name: "Adada Adada", cover: AdadaAdadaCover, file: AdadaAdada },
      { name: "Saayndhu Saayndhu", cover: SaayndhuSaayndhuCover, file: SaayndhuSaayndhu }
    ];
    return (
      <div className="valentine-root">
        <div className="card">
          <h2 className="yay">Our Playlist 🎵</h2>
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            {songs.map((song, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                <img src={song.cover} style={{ width: '40px', borderRadius: '5px', marginRight: '10px' }} />
                <span>{song.name}</span>
                <audio controls style={{ height: '30px', marginLeft: '10px' }}>
                   <source src={song.file} type="audio/mpeg" />
                </audio>
              </div>
            ))}
          </div>
          <button className="btn yes" onClick={() => setView("gifts")}>Back</button>
        </div>
      </div>
    );
  }

  if (view === "letter") {
    return (
      <div className="valentine-root">
        <div className="card">
          <h2 className="yay">To My Dearest... 💌</h2>
          <p style={{ fontStyle: 'italic', lineHeight: '1.6' }}>
            "Papa, you are the best thing that ever happened to me. Every moment with you is special. I love you! ❤️"
          </p>
          <button className="btn yes" onClick={() => setView("gifts")}>Back</button>
        </div>
      </div>
    );
  }

  if (view === "memories") {
    return (
      <div className="valentine-root">
        <div className="card">
          <h2 className="yay">Our Moments ❤️</h2>
          <div style={{ maxHeight: '450px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', padding: '10px' }}>
             <img src={Papa1} style={{ width: '100%', borderRadius: '15px' }} />
             <img src={Papa2} style={{ width: '100%', borderRadius: '15px' }} />
             <img src={Papa3} style={{ width: '100%', borderRadius: '15px' }} />
             <img src={Papa4} style={{ width: '100%', borderRadius: '15px' }} />
             <img src={Papa5} style={{ width: '100%', borderRadius: '15px' }} />
          </div>
          <button className="btn yes" style={{ marginTop: '20px' }} onClick={() => setView("gifts")}>Back</button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
