import React from 'react';
import FullscreenIcon from '../../images/icons/fullscreen.svg';
import ExitFullscreenIcon from '../../images/icons/exit-fullscreen.svg';

const FullScreenToggle = ({ isFullScreen, handleFullScreen }) => {
  return (
    <button onClick={handleFullScreen}>
      <img src={isFullScreen ? ExitFullscreenIcon : FullscreenIcon} alt={isFullScreen ? 'Exit Fullscreen' : 'Go Fullscreen'} />
    </button>
  );
};

export default FullScreenToggle;
