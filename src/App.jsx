import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Fix: Changed /src/assets/ to ./assets/ for all imports
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

import FormPage from "./FormPage.jsx";
import "./FormPage.css";

function App() {
  const [noLabel, setNoLabel] = useState("NO 💔");
  const [showHoverPopup, setShowHoverPopup] = useState(false);
  const [showSlidesPopup, setShowSlidesPopup] = useState(false);
  const [showProsConsPopup, setShowProsConsPopup] = useState(false);
  const [hoveredOnce, setHoveredOnce] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [view, setView] = useState("form");
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [giftsOpened, setGiftsOpened] = useState(new Set());

  const [formData, setFormData] = useState({
    receiverName: "",
    senderName: "",
    nickname: "",
    letterPart1: "",
    letterPart2: "",
    letterPart3: "",
  });

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const receiver = urlParams.get("receiver");
    const sender = urlParams.get("sender");
    const nickname = urlParams.get("nickname");
    const letter1 = urlParams.get("letter1");
    const letter2 = urlParams.get("letter2");
    const letter3 = urlParams.get("letter3");

    if (receiver && sender && nickname && letter1 && letter2 && letter3) {
      setFormData({
        receiverName: receiver,
        senderName: sender,
        nickname: nickname,
        letterPart1: letter1,
        letterPart2: letter2,
        letterPart3: letter3,
      });
      setView("home");
    }
  }, []);

  const songs = useMemo(
    () => [
      {
        id: 1,
        title: "Visiri",
        duration: "5:29",
        album: "Ennai nokki paayum thotta",
        cover: VisiriCover,
        audio: Visiri,
      },
      {
        id: 2,
        title: "Neram",
        duration: "4:52",
        album: "Neram",
        cover: NeramCover,
        audio: Neram,
      },
      {
        id: 3,
        title: "Hridayam",
        duration: "02:58",
        album: "Hridayam",
        cover: HridayamCover,
        audio: Hridayam,
      },
      {
        id: 4,
        title: "Adada Adada",
        duration: "3:47",
        album: "Santhosh Subramaniam",
        cover: AdadaAdadaCover,
        audio: AdadaAdada,
      },
      {
        id: 5,
        title: "Saayndhu Saayndhu",
        duration: "4:08",
        album: "Neethane en ponvasantham",
        cover: SaayndhuSaayndhuCover,
        audio: SaayndhuSaayndhu,
      },
    ],
    [VisiriCover, NeramCover, HridayamCover, AdadaAdadaCover, SaayndhuSaayndhuCover, Visiri, Neram, Hridayam, AdadaAdada, SaayndhuSaayndhu]
  );

  const slides = useMemo(
    () => [
      { gif: cookBear, text: "I’ll cook your fav food like it’s my love language 🍳" },
      { gif: comfortBear, text: "Unlimited comfort and care" },
      { gif: listenBear, text: "I listen… like actually listen" },
      { gif: kissBear, text: "Unlimited hugs & kisses\n(non-negotiable 😏)" },
      { gif: photoBear, text: "Your personal photographer for all the cute moments 📸" },
      { gif: musicBear, text: "Live singing performances… just for you 🎶😉" },
    ],
    [cookBear, comfortBear, listenBear, kissBear, photoBear, musicBear]
  );

  const handleNoEnter = useCallback(() => {
    if (!hoveredOnce) {
      setShowHoverPopup(true);
      setHoveredOnce(true);
    } else {
      setNoLabel("YESSS ❤️");
    }
  }, [hoveredOnce]);

  const handleNoLeave = useCallback(() => {
    if (hoveredOnce) {
      setNoLabel("NO 💔");
    }
  }, [hoveredOnce]);

  const closeHoverPopup = useCallback(() => {
    setShowHoverPopup(false);
    setNoLabel("NO 💔");
  }, []);

  const openProsConsPopup = useCallback(() => {
    setShowHoverPopup(false);
    setShowProsConsPopup(true);
  }, []);

  const closeProsConsPopup = useCallback(() => {
    setShowProsConsPopup(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleGiftClick = useCallback((giftType) => {
    setGiftsOpened((prev) => {
      const newSet = new Set(prev);
      newSet.add(giftType);
      return newSet;
    });
  }, []);

  const allGiftsOpened = useMemo(() => giftsOpened.size >= 2, [giftsOpened]);

  const handleGift1Click = useCallback(() => {
    handleGiftClick("songs");
    setView("songs");
  }, [handleGiftClick]);

  const handleGift2Click = useCallback(() => {
    handleGiftClick("letter");
    setView("letter");
  }, [handleGiftClick]);

  const currentSong = useMemo(
    () => songs[currentSongIndex],
    [songs, currentSongIndex]
  );

  const formatTime = useCallback((time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }, []);

  const handlePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleNext = useCallback(() => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  }, [songs.length]);

  const handlePrevious = useCallback(() => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  }, [songs.length]);

  const handleSongSelect = useCallback((index) => {
    setCurrentSongIndex(index);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, []);

  const handleEnded = useCallback(() => {
    handleNext();
  }, [handleNext]);

  const handleProgressClick = useCallback(
    (e) => {
      if (audioRef.current) {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.nativeEvent.offsetX;
        const width = rect.width;
        const progress = clickX / width;
        audioRef.current.currentTime = progress * duration;
        setCurrentTime(progress * duration);
      }
    },
    [duration]
  );

  const handleVolumeChange = useCallback((e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  if (view === "success") {
    return (
      <div className="valentine-root success">
        <div className="card success-card">
          <h1 className="yay">💖 YAYYYYY!!! 💖</h1>
          <p className="subtitle small">
            That's the best decision you've ever made ❤️😘
          </p>
          <div className="image-card">
            <img src={bearKissGif} alt="cute gif" loading="lazy" />
          </div>
          <motion.div
            className="love-text-container"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 200 }}
          >
            <motion.h2
              className="love-text"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ scale: { duration: 2, repeat: Infinity }, rotate: { duration: 4, repeat: Infinity } }}
            >
              I LOVE YOU❤️
            </motion.h2>
          </motion.div>
          <div style={{ height: 12 }} />
          <motion.button
            className="btn romantic-gift-btn"
            onClick={() => setView("gifts")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Click here for the Valentine gifts, {formData.nickname || "Rohee"}
          </motion.button>
        </div>
      </div>
    );
  }

  if (view === "gifts") {
    return (
      <div className="valentine-root gifts">
        <div className="card gifts-card">
          <h1 className="yay">💝 Your Valentine Gifts 💝</h1>
          <div className="gifts-container">
            <div className="gift-card" onClick={handleGift1Click}>
              <h3 className="gift-title">Gift 1</h3>
              <div className="gift-image"><img src={gift} alt="gift 1" loading="lazy" /></div>
            </div>
            <div className="gift-card" onClick={handleGift2Click}>
              <h3 className="gift-title">Gift 2</h3>
              <div className="gift-image"><img src={gift} alt="gift 2" loading="lazy" /></div>
            </div>
          </div>
          {allGiftsOpened && (
            <div className="all-gifts-opened">
              <div className="love-you-bear-container"><img src={loveYouBear} alt="love you bear" loading="lazy" /></div>
              <p className="all-gifts-text">LOVE YOU SO MUCH {formData.nickname || "PATOOTIEE"}!❤️</p>
            </div>
          )}
          <button className="btn yes" onClick={() => setView("success")}>Back</button>
        </div>
      </div>
    );
  }

  if (view === "songs") {
    return (
      <div className="valentine-root songs">
        <div className="card songs-card">
          <h1 className="yay">Our Love Sounds Like This!🎵</h1>
          <div className="media-player-container">
            <div className="album-art-section">
              <img src={currentSong.cover} className="album-image" alt="cover" />
            </div>
            <div className="media-controls">
              <h3>{currentSong.title}</h3>
              <div className="progress-bar-container" onClick={handleProgressClick}>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                </div>
              </div>
              <div className="control-buttons">
                <button onClick={handlePrevious}>⏪</button>
                <button onClick={handlePlayPause}>{isPlaying ? "⏸️" : "▶️"}</button>
                <button onClick={handleNext}>⏩</button>
              </div>
            </div>
          </div>
          <audio ref={audioRef} src={currentSong.audio} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={handleEnded} />
          <button className="btn yes" onClick={() => setView("gifts")}>Back to Gifts</button>
        </div>
      </div>
    );
  }

  if (view === "letter") {
    return (
      <div className="valentine-root letter">
        <div className="card letter-card">
          <h1>To {formData.receiverName || "the Girl I Love"}!❤️</h1>
          <div className="envelope" onClick={() => setEnvelopeOpen(!envelopeOpen)}>
            {envelopeOpen ? "💌 Open" : "✉️ Click to Open"}
          </div>
          {envelopeOpen && (
            <div className="letter-paper">
              <p>{formData.letterPart1}</p>
              <p>{formData.letterPart2}</p>
              <p>{formData.letterPart3}</p>
              <p>Forever, {formData.senderName}</p>
            </div>
          )}
          <button className="btn yes" onClick={() => setView("gifts")}>Back</button>
        </div>
      </div>
    );
  }

  if (view === "form") {
    return (
      <FormPage onSubmit={(data) => { setFormData(data); setView("home"); }} />
    );
  }

  return (
    <AnimatePresence mode="wait">
      <div className="valentine-root">
        <motion.div className="card">
          <img src={cuteBeaRoses} alt="cute bear" className="card-image" />
          <h1 className="title">
            <span className="name">{formData.receiverName || "PATOOTIEE"}</span>
            <span className="ask"> Will you be my Valentine?😩❤️</span>
          </h1>
          <div className="choices">
            <button className="btn yes" onClick={() => setView("success")}>YES ❤️</button>
            <button className="btn no" onMouseEnter={handleNoEnter} onMouseLeave={handleNoLeave}>{noLabel}</button>
          </div>
        </motion.div>

        {showHoverPopup && (
          <div className="overlay">
            <div className="popup">
              <p>Wait! Let me tell you why you should say yes... 😉</p>
              <button className="btn okay-btn" onClick={openProsConsPopup}>Okay</button>
            </div>
          </div>
        )}

        {showProsConsPopup && (
          <div className="overlay">
            <div className="pros-cons-popup">
               <h2>Why Choose Me? ❤️</h2>
               <div className="pro-item">
                  <img src={slides[currentSlide].gif} className="pro-gif" alt="pro" />
                  <p>{slides[currentSlide].text}</p>
               </div>
               <div className="pros-nav">
                  <button onClick={prevSlide}>PREV</button>
                  <button onClick={nextSlide}>NEXT</button>
               </div>
               <button className="btn yes" onClick={closeProsConsPopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}

export default App;
