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
          <div className="gifts-grid" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            {/* Gift 1 */}
            <div className="gift-card" onClick={() => setView("songs")} style={{ cursor: 'pointer', border: '2px solid #ffb6c1', padding: '15px', borderRadius: '15px', width: '80%' }}>
              <img src={gift} alt="gift" style={{ width: '60px' }} />
              <p>Gift 1: Our Songs 🎵</p>
            </div>
            {/* Gift 2 */}
            <div className="gift-card" onClick={() => setView("letter")} style={{ cursor: 'pointer', border: '2px solid #ffb6c1', padding: '15px', borderRadius: '15px', width: '80%' }}>
              <img src={gift} alt="gift" style={{ width: '60px' }} />
              <p>Gift 2: My Letter 💌</p>
            </div>
            {/* Gift 3 */}
            <div className="gift-card" onClick={() => setView("memories")} style={{ cursor: 'pointer', border: '2px solid #ff4d6d', padding: '15px', borderRadius: '15px', width: '80%', backgroundColor: '#fff0f3' }}>
              <img src={gift} alt="gift" style={{ width: '60px' }} />
              <p style={{ fontWeight: 'bold', color: '#ff4d6d' }}>Gift 3: Our Memories 📸</p>
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
              <div key={i} style={{ display: 'flex', alignItems: 'center', margin: '15px 0', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <img src={song.cover} style={{ width: '50px', height: '50px', borderRadius: '5px', marginRight: '15px' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: 'bold' }}>{song.name}</p>
                  <audio controls style={{ height: '30px', width: '100%' }}>
                    <source src={song.file} type="audio/mpeg" />
                  </audio>
                </div>
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
          <p style={{ fontStyle: 'italic', lineHeight: '1.6', backgroundColor: '#fff5f7', padding: '15px', borderRadius: '10px' }}>
            "Papa, you are the most special person in my life. Every single memory we share is a treasure. I love you to the moon and back! ❤️"
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
          <div style={{ maxHeight: '450px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px' }}>
             <img src={Papa1} style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} alt="memory" />
             <img src={Papa2} style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} alt="memory" />
             <img src={Papa3} style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} alt="memory" />
             <img src={Papa4} style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} alt="memory" />
             <img src={Papa5} style={{ width: '100%', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} alt="memory" />
          </div>
          <button className="btn yes" style={{ marginTop: '20px' }} onClick={() => setView("gifts")}>Back</button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
