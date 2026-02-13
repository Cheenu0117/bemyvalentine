import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Existing Imports
import listenBear from "./assets/cute-bear.gif";
import musicBear from "./assets/music-bear.gif";
import gift from "./assets/gift/gift.jpg";
import comfortBear from "./assets/comfort-bear.gif";
import kissBear from "./assets/kiss-bears.gif";
import cookBear from "./assets/cook-bear.gif";
import bearKissGif from "./assets/kiss-bear.gif";
import photoBear from "./assets/photo-bear.gif";
import cuteBeaRoses from "./assets/rose-bear.gif";
import childGif from "./assets/child.gif";
import leftButtonImg from "./assets/left-button.png";
import rightButtonImg from "./assets/right-button.png";
import loveYouBear from "./assets/love-you-bear.gif";

// Song Covers and Files
import VisiriCover from "./assets/Visiri.jpg";
import NeramCover from "./assets/Neram.jpg";
import HridayamCover from "./assets/Hridayam.jpg";
import AdadaAdadaCover from "./assets/AdadaAdada.jpg";
import SaayndhuSaayndhuCover from "./assets/SaayndhuSaayndhu.jpg";
import Visiri from "./assets/Visiri.mp3";
import Neram from "./assets/Neram.mp3";
import Hridayam from "./assets/Hridayam.mp3";
import AdadaAdada from "./assets/AdadaAdada.mp3";
import SaayndhuSaayndhu from "./assets/SaayndhuSaayndhu.mp3";

// Your Personal Memories (Nee upload panna photos)
import Papa1 from "./assets/Papa1.jpg";
import Papa2 from "./assets/Papa2.jpg";
import Papa3 from "./assets/Papa3.jpg";
import Papa4 from "./assets/Papa4.jpg";
import Papa5 from "./assets/Papa5.jpg";

import FormPage from "./FormPage.jsx";
import "./FormPage.css";

function App() {
  const [noLabel, setNoLabel] = useState("NO 💔");
  const [showHoverPopup, setShowHoverPopup] = useState(false);
  const [showSlidesPopup, setShowSlidesPopup] = useState(false);
  const [view, setView] = useState("initial");
  const [currentSong, setCurrentSong] = useState(null);
  const [giftsOpened, setGiftsOpened] = useState(new Set());

  const handleNoHover = () => {
    const labels = ["Are you sure?", "Really sure?", "Think again!", "Last chance!", "Surely not!", "You might regret it!", "Give it another thought!", "Are you absolutely sure?", "This could be a mistake!", "Have a heart!", "Don't be so cold!", "Change of heart?"];
    setNoLabel(labels[Math.floor(Math.random() * labels.length)]);
    setShowHoverPopup(true);
    setTimeout(() => setShowHoverPopup(false), 2000);
  };

  const handleGiftClick = (giftId) => {
    setGiftsOpened(prev => new Set(prev).add(giftId));
  };

  const allGiftsOpened = giftsOpened.size === 3;

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
          <h1 className="yay">Choose a Gift 🎁</h1>
          <div className="gifts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '15px' }}>
            <div className="gift-card" onClick={() => { handleGiftClick(1); setView("songs"); }}>
              <img src={gift} alt="gift" />
              <p>Gift 1: Songs</p>
            </div>
            <div className="gift-card" onClick={() => { handleGiftClick(2); setView("letter"); }}>
              <img src={gift} alt="gift" />
              <p>Gift 2: Letter</p>
            </div>
            {/* Gift 3 for Memories */}
            <div className="gift-card" onClick={() => { handleGiftClick(3); setView("memories"); }}>
              <img src={gift} alt="gift" />
              <p>Gift 3: Memories</p>
            </div>
          </div>
          {allGiftsOpened && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: '20px' }}>
               <h3 className="yay">You've opened all your gifts! ❤️</h3>
            </motion.div>
          )}
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
          <div className="song-list" style={{ textAlign: 'left' }}>
            {songs.map((song, i) => (
              <div key={i} className="song-item" onClick={() => setCurrentSong(song.file)} style={{ cursor: 'pointer', margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                <img src={song.cover} style={{ width: '40px', borderRadius: '5px', marginRight: '10px' }} />
                <span>{song.name}</span>
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
          <h2 className="yay">To My Dearest Sushmitha... 💌</h2>
          <p className="letter-text">
            "Hey Papa ❤️, I've been waiting for the right moment to tell you this... (Your full letter here)"
          </p>
          <button className="btn yes" onClick={() => setView("gifts")}>Back</button>
        </div>
      </div>
    );
  }

  // New Memories View Section
  if (view === "memories") {
    return (
      <div className="valentine-root">
        <div className="card" style={{ maxWidth: '400px' }}>
          <h2 className="yay">Our Special Moments! 📸</h2>
          <div className="memories-scroll" style={{ maxHeight: '400px', overflowY: 'auto', display: 'grid', gridTemplateColumns: '1fr', gap: '15px', padding: '10px' }}>
             {[Papa1, Papa2, Papa3, Papa4, Papa5].map((pic, index) => (
               <img key={index} src={pic} style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="memory" />
             ))}
          </div>
          <button className="btn yes" style={{ marginTop: '20px' }} onClick={() => setView("gifts")}>Back to Gifts</button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
