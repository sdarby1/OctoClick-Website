import React, { useState, useEffect } from 'react';

const images = [
  './images/slider/static.jpg',
  './images/slider/slide1.jpg',
  './images/slider/slide2.jpg',
  './images/slider/slide3.jpg',
  // Weitere Bilder hier hinzufügen
];

function App() {
  const [isTransformed, setIsTransformed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isTransformed) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Bildwechsel alle 2 Sekunden
    }
    return () => clearInterval(interval);
  }, [isTransformed]);

  const handleButtonClick = () => {
    setIsTransformed(!isTransformed);
  };

  return (
    <div className="app-container">
      <div className={`perspective-container ${isTransformed ? 'transformed' : ''}`}>
        <img src={images[currentImageIndex]} alt="3D image" />
      </div>
      <button onClick={handleButtonClick}>
        {isTransformed ? 'Stop Slider' : 'Start Slider'}
      </button>
    </div>
  );
}

export default App;
