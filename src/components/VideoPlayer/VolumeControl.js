import React from 'react';
import VolumeIcon from '../../images/icons/volume-icon.svg';

const VolumeControl = ({ volume, onVolumeChange }) => {
  return (
    <div className="volume-section">
      <button className='volume-btn'>
        <img src={VolumeIcon} alt="Volume Control" />
      </button>
      <input 
        type="range" 
        className='volume-control'
        min="0" 
        max="1" 
        step="0.1" 
        value={volume}
        onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default VolumeControl;
