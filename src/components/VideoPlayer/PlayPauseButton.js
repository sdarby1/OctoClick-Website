import React from 'react';
import PlayIcon from '../../images/icons/play-icon.svg';
import PauseIcon from '../../images/icons/pause-icon.svg';

const PlayPauseButton = ({ isPlaying, togglePlayPause }) => {
  return (
    <button onClick={togglePlayPause} className='play-btn'>
      <img src={isPlaying ? PauseIcon : PlayIcon} alt={isPlaying ? 'Pause' : 'Play'} />
    </button>
  );
};

export default PlayPauseButton;
