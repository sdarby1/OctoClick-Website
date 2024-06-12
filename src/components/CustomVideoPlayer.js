import { useRef, useState, useEffect } from 'react';
import PlayIcon from '../images/icons/play-icon.svg';
import PauseIcon from '../images/icons/pause-icon.svg'; 
import FullscreenIcon from '../images/icons/fullscreen.svg';
import ExitFullscreenIcon from '../images/icons/exit-fullscreen.svg';
import VolumeIcon from '../images/icons/volume-icon.svg'; // assuming you have a volume icon

const videoData = [
  { 
    src: "/videos/first.mp4", 
    poster: "/images/thumbnail/thumbnail.png", 
    choices: [{ text: "Wahl 1", nextIndex: 1 }, { text: "Wahl 2", nextIndex: 2 }]
  },
  { src: "/videos/second.mp4", choices: [{ text: "Wahl 1.1", nextIndex: 3 }, { text: "Wahl 1.2", nextIndex: 4 }] },
  { src: "/videos/choice2.mp4", choices: [{ text: "Wahl 2.1", nextIndex: 5 }, { text: "Wahl 2.2", nextIndex: 6 }] },
  { src: "/videos/third.mp4", choices: [] },
  { src: "/videos/choice1dot2.mp4", choices: [] },
  { src: "/videos/choice2dot1.mp4", choices: [] },
  { src: "/videos/choice2dot2.mp4", choices: [] },
];

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
  const [timer, setTimer] = useState(0); // Timer state
  const controlsTimeoutRef = useRef(null);
  const timerRef = useRef(null);
  const [showVolumeControl, setShowVolumeControl] = useState(false); // new state for volume control visibility
  const [volume, setVolume] = useState(1); // new state for volume value

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
    const hasChoices = videoData[currentIndex].choices.length > 0;
    setShowChoices(hasChoices);
    if (hasChoices) {
      setControlsVisible(false); // Hide controls when choices are shown
    }
  };

  const handleChoice = (nextIndex) => {
    setIsLoading(true);
    setCurrentIndex(nextIndex);
    setShowChoices(false); // Hide choices when a new video starts
    setControlsVisible(true); // Show controls when a new video starts
    cancelAnimationFrame(timerRef.current); // Clear the timer when a choice is made
  };

  const updateTimer = (endTime) => {
    const now = Date.now();
    const timeLeft = Math.max(0, endTime - now);
    setTimer(Math.ceil(timeLeft / 1000)); // Convert milliseconds to seconds

    if (timeLeft > 0) {
      timerRef.current = requestAnimationFrame(() => updateTimer(endTime));
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const videoDuration = videoRef.current.duration;
      const timeLeft = videoDuration - currentTime;

      const shouldShowChoices = timeLeft <= 7 && videoData[currentIndex].choices.length > 0;
      setShowChoices(shouldShowChoices);

      if (shouldShowChoices) {
        const endTime = Date.now() + timeLeft * 1000;
        updateTimer(endTime);
      } else {
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
        document.webkitFullscreenElement || // Safari
        document.mozFullScreenElement || // Firefox
        document.msFullscreenElement // IE/Edge
      );
  
      setIsFullScreen(isFullScreenNow);
    };
  
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange); // Safari
    document.addEventListener('mozfullscreenchange', handleFullScreenChange); // Firefox
    document.addEventListener('MSFullscreenChange', handleFullScreenChange); // IE/Edge
  
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
    };
  }, []);

  const enterFullScreen = () => {
    const element = videoContainerRef.current;
    if (element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { // Safari
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
        setIsFullScreen(true); // Aktualisiere den Zustand, um anzuzeigen, dass du jetzt im Vollbildmodus bist
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullScreen(false); // Aktualisiere den Zustand, nachdem der Vollbildmodus beendet wurde
    } else if (document.webkitFullscreenElement) { // Safari
        document.webkitExitFullscreen();
        setIsFullScreen(false);
    } else if (document.mozFullScreenElement) { // Firefox
        document.mozCancelFullScreen();
        setIsFullScreen(false);
    } else if (document.msFullscreenElement) { // IE/Edge
        document.msExitFullscreen();
        setIsFullScreen(false);
    }
  };

  const handleVolumeChange = (event) => {
    const volume = parseFloat(event.target.value);
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
    setVolume(volume); // update the volume state
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const showControlsTemporarily = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setControlsVisible(true);
    controlsTimeoutRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, 2500); // 5000 ms = 5 seconds
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
      return () => {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('loadedmetadata', updateProgress);
        video.removeEventListener('loadeddata', handleVideoLoaded);
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
    <div ref={videoContainerRef} className={`video-container ${isFullScreen ? 'fullscreen' : ''}`}>
      {isLoading && <div className="loading-placeholder"></div>}
      <video 
        className={`film ${isLoading ? 'hidden' : ''}`}
        ref={videoRef} 
        src={videoData[currentIndex].src} 
        poster={currentIndex === 0 ? videoData[currentIndex].poster : undefined}
        onEnded={handleVideoEnd} 
        onLoadedData={handleVideoLoaded}
        controls={false} // Standard-Steuerungen deaktivieren
        playsInline // Verhindert Vollbild-Abspielen auf iOS
        webkit-playsinline="true" // Ältere iOS-Versionen
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
              value={volume} // use the volume state
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
        {showChoices && (
          <>
            <div className="timer">{timer}</div>
            {videoData[currentIndex].choices.map((choice, index) => (
              <button key={index} onClick={() => handleChoice(choice.nextIndex)}>
                {choice.text}
              </button>
            ))}
          </>
        )}
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
