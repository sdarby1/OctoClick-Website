import { useRef, useState, useEffect } from 'react';
import PlayIcon from '../images/icons/play-icon.svg';
import PauseIcon from '../images/icons/pause-icon.svg'; 
import FullscreenIcon from '../images/icons/fullscreen.svg';
import ExitFullscreenIcon from '../images/icons/exit-fullscreen.svg';
import VolumeIcon from '../images/icons/volume-icon.svg';

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
  const [timer, setTimer] = useState(0); 
  const controlsTimeoutRef = useRef(null);
  const timerRef = useRef(null);
  const [showVolumeControl, setShowVolumeControl] = useState(false); 
  const [volume, setVolume] = useState(1);

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
      setControlsVisible(false);
    }
  };

  const handleChoice = (nextIndex) => {
    setIsLoading(true);
    setCurrentIndex(nextIndex);
    setShowChoices(false);
    setControlsVisible(true);
    cancelAnimationFrame(timerRef.current);
  };

  const updateTimer = (endTime) => {
    const now = Date.now();
    const timeLeft = Math.max(0, endTime - now);
    setTimer(Math.ceil(timeLeft / 1000));

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
        {showChoices && (
          <>
            {videoData[currentIndex].choices.map((choice, index) => (
              <button key={index} onClick={() => handleChoice(choice.nextIndex)}>
                {choice.text}
              </button>
            ))}
            <div className="timer">{timer}</div>
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
