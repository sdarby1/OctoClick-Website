import React from 'react';
import BtsImageGallery from '../components/BtsImageGallery';
import { useTranslation } from 'react-i18next';

const InteractiveFilm = () => {
  const { t } = useTranslation();
  
  return (
    <div className="margin-container">
          <div className="boxed-container">
        <div>
          <h2 className='page-headline'>{t('film-page.headline')}</h2>
          <div className="iframe-container">
            <iframe
              title="Custom Video Player"
              src="http://localhost:3000/videoplayer"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className='content-headline'>Behind the scenes</h2>
          <BtsImageGallery />
        </div>
        </div>
    </div>
  );
};

export default InteractiveFilm;
