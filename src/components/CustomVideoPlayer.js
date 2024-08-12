import { useRef, useState, useEffect } from 'react';
import PlayIcon from '../images/icons/play-icon.svg';
import PauseIcon from '../images/icons/pause-icon.svg'; 
import FullscreenIcon from '../images/icons/fullscreen.svg';
import ExitFullscreenIcon from '../images/icons/exit-fullscreen.svg';
import VolumeIcon from '../images/icons/volume-icon.svg';
import { useTranslation } from 'react-i18next';



const CustomVideoPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoContainerRef = useRef(null); 
  const [showChoices, setShowChoices] = useState(false);
  const [progress, setProgress] = useState(0); 
  const [duration, setDuration] = useState(0); 
  const [isLoading, setIsLoading] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [timer, setTimer] = useState(0); 
  const controlsTimeoutRef = useRef(null);
  const timerRef = useRef(null);
  const [showVolumeControl, setShowVolumeControl] = useState(false); 
  const [volume, setVolume] = useState(1);
  const [nextVideoIndex, setNextVideoIndex] = useState(null); // Neuer Zustand für die Speicherung der nächsten Videoauswahl
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);
  const { t } = useTranslation();



  const videoData = [
    { 
      src: "/videos/first.mp4", 
      poster: "/images/thumbnail/thumbnail.jpg", 
      choices: [{ text: t('choices.takeBike'), nextIndex: 1 }, { text: t('choices.followOnFoot'), nextIndex: 2 }]
    },
    { src: "/videos/bike-choice.mp4", choices: [{ text: "Wahl 1.1", nextIndex: 3 }, { text: "Wahl 1.2", nextIndex: 4 }] },
    { src: "/videos/foot-choice.mp4", choices: [{ text: "Wahl 2.1", nextIndex: 5 }, { text: "Wahl 2.2", nextIndex: 6 }] },
    { src: "/videos/third.mp4", choices: [] },
    { src: "/videos/choice1dot2.mp4", choices: [] },
    { src: "/videos/choice2dot1.mp4", choices: [] },
    { src: "/videos/choice2dot2.mp4", choices: [] },
  ];

  useEffect(() => {
    if (currentIndex > 0 && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [currentIndex]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    if (nextVideoIndex === null) {
        // Wenn keine Auswahl getroffen wurde, wähle zufällig eine der verfügbaren Optionen
        if (videoData[currentIndex].choices.length > 0) {
            const randomChoiceIndex = Math.floor(Math.random() * videoData[currentIndex].choices.length);
            setCurrentIndex(videoData[currentIndex].choices[randomChoiceIndex].nextIndex);
        }
        setShowChoices(false);
        setControlsVisible(true);
        setIsLoading(true);
    } else {
        // Wenn bereits eine Auswahl getroffen wurde, fahre wie gewohnt fort
        setCurrentIndex(nextVideoIndex);
        setShowChoices(false);
        setControlsVisible(true);
        setIsLoading(true);
        setNextVideoIndex(null);  // Setzt den nächsten Videoindex zurück
    }
};

  

  
  useEffect(() => {
    // Stellen Sie sicher, dass beim ersten Laden keine Wahl getroffen ist
    setSelectedChoiceIndex(null);
  }, []);
  

  const handleChoice = (nextIndex, choiceIndex) => {
    setSelectedChoiceIndex(choiceIndex); // Setzt die gewählte Option
    // Setzen Sie den nächsten Index erst nach Ende des aktuellen Videos
    videoRef.current.addEventListener('ended', () => {
      setCurrentIndex(nextIndex);
      setIsLoading(true);
      setNextVideoIndex(null); // Zurücksetzen nach dem Wechsel
      setShowChoices(false);
      setSelectedChoiceIndex(null); // Zurücksetzen der Auswahl nach dem Wechsel
    }, { once: true }); // EventListener nach einmaliger Ausführung entfernen
  };
  
  
  // In der Render-Funktion
  const renderChoiceButtons = () => {
    return videoData[currentIndex].choices.map((choice, index) => (
      <button
        key={index}
        className={`choice-button ${selectedChoiceIndex === index ? 'selected' : ''}`}
        onClick={() => handleChoice(choice.nextIndex, index)}
        disabled={selectedChoiceIndex !== null} // Buttons sind nur deaktiviert, wenn eine Wahl getroffen wurde
      >
        {choice.text}
      </button>
    ));
  };
  
  useEffect(() => {
    if (nextVideoIndex !== null) {
      // Optional: Hier könnten Vorbereitungen für das nächste Video getroffen werden
    }
  }, [nextVideoIndex]);

  const updateTimer = (endTime) => {
    const now = Date.now();
    const timeLeft = Math.max(0, endTime - now);
    setTimer(Math.ceil(timeLeft / 1000));

    if (timeLeft > 0) {
      timerRef.current = requestAnimationFrame(() => updateTimer(endTime));
    }
  };
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const videoDuration = videoRef.current.duration;
      const timeLeft = videoDuration - currentTime;
  
      const shouldShowChoices = timeLeft <= 8 && videoData[currentIndex].choices.length > 0;
      setShowChoices(shouldShowChoices);
      setIsTimerVisible(shouldShowChoices); // Steuert die Sichtbarkeit des Timers
  
      if (shouldShowChoices) {
        const endTime = Date.now() + timeLeft * 1000;
        updateTimer(endTime);
      } else {
        setTimer(0);
        cancelAnimationFrame(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        cancelAnimationFrame(timerRef.current);
      };
    }
  }, [currentIndex]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isFullScreenNow = Boolean(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );

      setIsFullScreen(isFullScreenNow);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('MSFullscreenChange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
    };
  }, []);

  const enterFullScreen = () => {
    const element = videoContainerRef.current;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen();
      setIsFullScreen(false);
    } else if (document.mozFullScreenElement) {
      document.mozCancelFullScreen();
      setIsFullScreen(false);
    } else if (document.msFullscreenElement) {
      document.msExitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleVolumeChange = (event) => {
    const volume = parseFloat(event.target.value);
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
    setVolume(volume);
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleWaiting = () => {
    cancelAnimationFrame(timerRef.current);
  };

  const handlePlaying = () => {
    if (showChoices) {
      const endTime = Date.now() + timer * 1000;
      updateTimer(endTime);
    }
  };

  const showControlsTemporarily = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setControlsVisible(true);
    controlsTimeoutRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, 4000);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateProgress = () => {
        setProgress(video.currentTime);
        setDuration(video.duration);
      };

      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('loadedmetadata', updateProgress);
      video.addEventListener('loadeddata', handleVideoLoaded);
      video.addEventListener('waiting', handleWaiting);
      video.addEventListener('playing', handlePlaying);
      return () => {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('loadedmetadata', updateProgress);
        video.removeEventListener('loadeddata', handleVideoLoaded);
        video.removeEventListener('waiting', handleWaiting);
        video.removeEventListener('playing', handlePlaying);
      };
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleMouseMove = () => {
      showControlsTemporarily();
    };

    const handleKeyDown = (event) => {
      if (event.code === 'Space' && !showChoices) {
        event.preventDefault();
        togglePlayPause();
      }
    };

    const videoContainer = videoContainerRef.current;
    if (videoContainer) {
      videoContainer.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        videoContainer.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [showChoices]);

  return (
    <div ref={videoContainerRef} className={`video-container ${isFullScreen ? 'fullscreen' : ''}`} style={{ height: '100%' }}>
      {isLoading && <div className="loading-placeholder"></div>}
      <video 
        className={`film ${isLoading ? 'hidden' : ''}`}
        ref={videoRef} 
        src={videoData[currentIndex].src} 
        poster={currentIndex === 0 ? videoData[currentIndex].poster : undefined}
        onEnded={handleVideoEnd} 
        onLoadedData={handleVideoLoaded}
        controls={false}
        playsInline
        webkit-playsinline="true"
      />

      <div className={`video-controls-up ${controlsVisible && !showChoices ? '' : 'hidden'}`}>
        <button className={`fullscreen-btn ${controlsVisible && !showChoices ? '' : 'hidden'}`} onClick={() => isFullScreen ? exitFullScreen() : enterFullScreen()}>
          {isFullScreen ? <img src={ExitFullscreenIcon} alt="Exit Fullscreen" /> : <img src={FullscreenIcon} alt="Go Fullscreen" />}
        </button>
        <div className="volume-section">
          <button className='volume-btn' onClick={() => setShowVolumeControl(!showVolumeControl)}>
            <img src={VolumeIcon} alt="Volume Control" />
          </button>
          {showVolumeControl && (
            <input 
              className='volume-control'
              type="range" 
              min="0" 
              max="1" 
              step="0.1" 
              onChange={handleVolumeChange}
              value={volume}
            />
          )}
        </div>
      </div>

      <div className={`video-controls-down ${controlsVisible && !showChoices ? '' : 'hidden'}`}>
        <button onClick={togglePlayPause} className='play-btn'>
          {isPlaying ? <img src={PauseIcon} alt="Pause" /> : <img src={PlayIcon} alt="Play" />}
        </button>
      </div>

      <div className={`video-choices ${showChoices ? 'show-choices' : ''}`}>
  {showChoices && videoData[currentIndex].choices.map((choice, index) => (
    <button
      key={index}
      className={`choice-button ${selectedChoiceIndex === index ? 'selected' : ''} ${selectedChoiceIndex !== null ? 'disabled' : ''}`}
      onClick={() => handleChoice(choice.nextIndex, index)}
      disabled={selectedChoiceIndex !== null} // Deaktiviere die Buttons nach der Auswahl
    >
      {choice.text}
    </button>
  ))}
   <div className={`${isTimerVisible ? 'timer-visible' : ''}`}>
      <div className="timer-container">
        <div className="timer">{timer}</div>
      </div>
    </div>
</div>


      <div className={`progress ${controlsVisible && !showChoices ? '' : 'hidden'}`}>
        {formatTime(progress)} / {formatTime(duration)}
        <input 
          type="range" 
          className="progress-bar"
          min="0" 
          max={duration} 
          value={progress} 
          onChange={(e) => {
            const time = parseFloat(e.target.value);
            if (videoRef.current) {
              videoRef.current.currentTime = time;
            }
            setProgress(time);
          }}
        />
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
