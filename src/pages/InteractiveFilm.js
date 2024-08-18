import React from 'react';
import BtsImageGallery from '../components/BtsImageGallery';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const InteractiveFilm = () => {
  const { t } = useTranslation();
  
  return (
    <div className="margin-container">
          <div className="boxed-container">
        <div>
          <h2 className='page-headline'>{t('film-page.headline')}<span className='headline-end'>.</span></h2>
          <div className="iframe-container">
            <iframe
              title="Custom Video Player"
              src="https://octoclick.de/videoplayer"
              allowFullScreen
            ></iframe>
          </div>
          {/* <div className='hofgarten-links'>
            <Link to="https://hofgarten.com">Hofgarten Hompage</Link> <span>-</span> <Link to="https://shop.hofgarten.com/">Hofgarten Online Shop</Link>
          </div> */}
          <h2 className='content-headline'>Behind the scenes<span className='headline-end'>.</span></h2>
          <BtsImageGallery />
        </div>
        </div>
    </div>
  );
};

export default InteractiveFilm;
