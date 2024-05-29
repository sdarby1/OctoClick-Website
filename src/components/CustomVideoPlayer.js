import { useRef, useState, useEffect } from 'react';
import PlayIcon from '../images/icons/play-icon.svg';
import PauseIcon from '../images/icons/pause-icon.svg'; 
import FullscreenIcon from '../images/icons/fullscreen.svg';
import ExitFullscreenIcon from '../images/icons/exit-fullscreen.svg';

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
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const posterRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (isFullScreen) {
        adjustCanvasSize();
      } else {
        resetCanvasSize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isFullScreen]);

  useEffect(() => {
    if (currentIndex > 0 && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    const renderCanvas = () => {
      if (canvasRef.current && videoRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        requestAnimationFrame(renderCanvas);
      }
    };

    if (isPlaying) {
      requestAnimationFrame(renderCanvas);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying && posterRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const img = new Image();
      img.src = posterRef.current.src;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
      };
    }
  }, [currentIndex, isPlaying]);

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
  };

  const handleChoice = (nextIndex) => {
    setCurrentIndex(nextIndex);
    setShowChoices(false);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const timeLeft = videoRef.current.duration - videoRef.current.currentTime;
      setShowChoices(timeLeft <= 10);
      setProgress(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

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
      if (isFullScreenNow) {
        adjustCanvasSize();
      } else {
        resetCanvasSize();
      }
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

  const adjustCanvasSize = () => {
    if (canvasRef.current && videoRef.current) {
      const videoAspectRatio = videoRef.current.videoWidth / videoRef.current.videoHeight;
      const windowAspectRatio = window.innerWidth / window.innerHeight;

      if (windowAspectRatio > videoAspectRatio) {
        canvasRef.current.height = window.innerHeight;
        canvasRef.current.width = window.innerHeight * videoAspectRatio;
      } else {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerWidth / videoAspectRatio;
      }
      canvasRef.current.style.width = '100%';
      canvasRef.current.style.height = '100%';
    }
  };

  const resetCanvasSize = () => {
    if (canvasRef.current) {
      canvasRef.current.width = 640;
      canvasRef.current.height = 360;
      canvasRef.current.style.width = '';
      canvasRef.current.style.height = '';
    }
  };

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
      setIsFullScreen(true);
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) { // Safari
      document.webkitExitFullscreen();
    } else if (document.mozFullScreenElement) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.msFullscreenElement) { // IE/Edge
      document.msExitFullscreen();
    }
    setIsFullScreen(false);
  };

  const handleVolumeChange = (event) => {
    const volume = parseFloat(event.target.value);
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  };

  useEffect(() => {
    if (isFullScreen) {
      adjustCanvasSize();
    } else {
      resetCanvasSize();
    }
  }, [currentIndex]);

  return (
    <div ref={videoContainerRef} className={`video-container ${isFullScreen ? 'fullscreen' : ''}`}>
      <canvas ref={canvasRef} className="video-canvas" width="640" height="360"></canvas>
      <video 
        ref={videoRef} 
        src={videoData[currentIndex].src} 
        onEnded={handleVideoEnd} 
        onTimeUpdate={handleTimeUpdate} 
        style={{ display: 'none' }} 
        onLoadedMetadata={() => {
          setDuration(videoRef.current.duration);
          setProgress(videoRef.current.currentTime);
          if (isFullScreen) {
            adjustCanvasSize();
          } else {
            resetCanvasSize();
          }
        }}
      />
      <img 
        ref={posterRef} 
        src={videoData[currentIndex].poster} 
        alt="Video Poster" 
        style={{ display: 'none' }}
      />
      <div className="video-controls">
        <button onClick={togglePlayPause} className='play-btn'>
          {isPlaying ? <img src={PauseIcon} alt="Pause" /> : <img src={PlayIcon} alt="Play" />}
        </button>
        <input 
          className='volume-control'
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          onChange={handleVolumeChange}
          defaultValue="1"
        />
      </div>
      <div className={`video-choices ${showChoices ? 'show-choices' : ''}`}>
        {showChoices && videoData[currentIndex].choices.map((choice, index) => (
          <button key={index} onClick={() => handleChoice(choice.nextIndex)}>
            {choice.text}
          </button>
        ))}
      </div>
      <button className='fullscreen-btn' onClick={() => isFullScreen ? exitFullScreen() : enterFullScreen()}>
        {isFullScreen ? <img src={ExitFullscreenIcon} alt="Exit Fullscreen" /> : <img src={FullscreenIcon} alt="Go Fullscreen" />}
      </button>
      <div className="progress">
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
