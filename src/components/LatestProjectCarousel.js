import React from 'react';
import { useTranslation } from 'react-i18next';


const LatestProjectCarousel = () => {
    const { t } = useTranslation();

  return (
    <div className="slider">
      <div className="slide-track">
        {[...Array(10)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="slide">
              <h3>{t('new-film-container.title')}</h3>
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
