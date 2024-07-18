import React from 'react';
import BtsImageGallery from '../components/BtsImageGallery';

const InteractiveFilm = () => {
  return (
    <div>
      <h2>Film</h2>
      <div className="iframe-container">
        <iframe
          title="Custom Video Player"
          src="https://octoclick.de/videoplayer"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Behind the scenes</h2>
      <BtsImageGallery />
    </div>
  );
};

export default InteractiveFilm;
