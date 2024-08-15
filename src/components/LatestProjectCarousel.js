import React from 'react';

const LatestProjectCarousel = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {[...Array(10)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="slide">
              <h3>Neustes Project: Hofgarten - Flora Power</h3>
            </div>
            <div className="slide">
              <img src="./images/hofgarten/florapower-logo.png" height="100" width="100" alt="Logo" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LatestProjectCarousel;
