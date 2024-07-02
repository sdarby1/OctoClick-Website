import React, { useState, useEffect } from 'react';

const ImageSlider = ({ isVisible, images, direction = 'left' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Bildwechsel alle 2 Sekunden
    }
    return () => clearInterval(interval);
  }, [isVisible, images.length]);

  return (
    <div className={`perspective-container ${isVisible ? 'transformed' : ''} ${direction}`}>
      <img src={images[currentImageIndex]} alt="3D image" />
    </div>
  );
};

export default ImageSlider;
