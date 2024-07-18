import React from 'react';

const ProgressBar = ({ progress, duration, onSeek }) => {
  return (
    <div className="progress">
      <input 
        type="range" 
        className="progress-bar"
        min="0" 
        max={duration} 
        value={progress} 
        onChange={(e) => onSeek(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default ProgressBar;
