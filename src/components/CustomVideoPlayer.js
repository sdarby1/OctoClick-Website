import { useRef, useState, useEffect } from 'react';
import PlayIcon from '../images/icons/play-icon.svg';
import PauseIcon from '../images/icons/pause-icon.svg'; 

const videoData = [
  { 
    src: "/videos/start.mp4", 
    poster: "/images/thumbnail/thumbnail.png", 
    choices: [{ text: "Wahl 1", nextIndex: 1 }, { text: "Wahl 2", nextIndex: 2 }]
  },
  { src: "/videos/choice1.mp4", choices: [{ text: "Wahl 1.1", nextIndex: 3 }, { text: "Wahl 1.2", nextIndex: 4 }] },
  { src: "/videos/choice2.mp4", choices: [{ text: "Wahl 2.1", nextIndex: 5 }, { text: "Wahl 2.2", nextIndex: 6 }] },
  { src: "/videos/choice1dot1.mp4", choices: [] },
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
  };

  const handleChoice = (nextIndex) => {
    setCurrentIndex(nextIndex);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const timeLeft = videoRef.current.duration - videoRef.current.currentTime;
      setShowChoices(timeLeft <= 100);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
      return () => {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('loadedmetadata', updateProgress);
      };
    }
  }, []);

  return (
    <div ref={videoContainerRef} className={`video-container ${isFullScreen ? 'fullscreen' : ''}`}>
      <video 
        className="film"
        ref={videoRef} 
        src={videoData[currentIndex].src} 
        poster={currentIndex === 0 ? videoData[currentIndex].poster : undefined}
        onEnded={handleVideoEnd} 
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
        {isFullScreen ? 'Exit Full Screen' : 'Go Full Screen'}
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
