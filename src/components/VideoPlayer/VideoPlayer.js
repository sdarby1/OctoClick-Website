import React, { useRef, useState, useEffect } from 'react';
import videoData from './VideoData';  // Angenommen, du hast die Videodaten in eine eigene Datei ausgelagert
import PlayPauseButton from './PlayPauseButton';
import FullScreenToggle from './FullScreenToggle';
import VolumeControl from './VolumeControl';
import ProgressBar from './ProgressBar';
import ChoiceButtons from './ChoiceButtons';
import LoadingComponent from './LoadingComponent';

const CustomVideoPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [progress, setProgress] = useState(0); 
  const [duration, setDuration] = useState(0); 
  const [volume, setVolume] = useState(1);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Alle Event-Listener und andere useEffects wie vorher definiert
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleVideoEnd = () => {
    const hasChoices = videoData[currentIndex].choices.length > 0;
    setShowChoices(hasChoices);  // Zeige Auswahloptionen, wenn welche vorhanden sind
    if (!hasChoices) {
      // Keine Auswahlmöglichkeiten, also vielleicht zum nächsten Video wechseln oder wiederholen
      const nextIndex = (currentIndex + 1) % videoData.length;
      setCurrentIndex(nextIndex);  // Gehe zum nächsten Video oder wiederhole von vorne
    } else {
      setControlsVisible(false);  // Verstecke Steuerelemente, wenn Auswahlmöglichkeiten gezeigt werden
    }
  };

  return (
    <div ref={videoContainerRef} className={`video-container ${isFullScreen ? 'fullscreen' : ''}`}>
      <LoadingComponent isLoading={isLoading} />
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
      <div className={`video-controls ${controlsVisible ? '' : 'hidden'}`}>
        <PlayPauseButton isPlaying={isPlaying} togglePlayPause={() => {
          if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }} />
        <FullScreenToggle isFullScreen={isFullScreen} handleFullScreen={() => {
          if (!document.fullscreenElement) {
            videoContainerRef.current.requestFullscreen();
            setIsFullScreen(true);
          } else {
            document.exitFullscreen();
            setIsFullScreen(false);
          }
        }} />
        <VolumeControl volume={volume} onVolumeChange={(newVolume) => {
          videoRef.current.volume = newVolume;
          setVolume(newVolume);
        }} />
        <ProgressBar progress={progress} duration={duration} onSeek={(time) => {
          videoRef.current.currentTime = time;
          setProgress(time);
        }} />
      </div>
      {showChoices && <ChoiceButtons choices={videoData[currentIndex].choices} onChoose={(index) => setCurrentIndex(index)} />}
    </div>
  );
};

export default CustomVideoPlayer;
