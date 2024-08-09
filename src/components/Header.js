import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import HeaderNavigation from './HeaderNavigation';
import ScrollToContentButton from './ScrollDownBtn';
import { useTranslation } from 'react-i18next';
import LightMode from './LightMode';
import LanguageSwitch from './LanguageSwitch';
import HeroDescription from './HeroDescription';


const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/'; // Prüft, ob die aktuelle Seite die Startseite ist

  return (
    <header className={isHome ? 'hero-header' : 'standard-header'}>
      {isHome ? (
        <div className="hero-background">
        <div className='margin-container'>
         <div className="boxed-container">
         <div className="hero-container">
          <div className="header-container home-header">
            <div className="website-functions-container">
              <LightMode />
              <LanguageSwitch />
            </div>
            <HeaderNavigation />
            <div className="social-media-icon-container">
            <Link to="https://www.instagram.com/octoclick.prod/" target="_blank" rel="noopener noreferrer">
              <svg className="social-icons" id="instagram-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.51 31.5">
                <defs>
                  <style>
                  </style>
                </defs>
                <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" className="social-icon-path" d="M15.76,7.67c-4.46,0-8.08,3.62-8.08,8.08s3.62,8.08,8.08,8.08,8.08-3.62,8.08-8.08c0-4.45-3.6-8.07-8.05-8.08,0,0-.02,0-.03,0ZM15.76,21c-2.9,0-5.25-2.35-5.25-5.25,0-2.9,2.35-5.25,5.25-5.25,2.9,0,5.25,2.35,5.25,5.25h0c0,2.9-2.35,5.25-5.25,5.25ZM26.05,7.34c0,1.04-.84,1.88-1.88,1.88s-1.88-.84-1.88-1.88.84-1.88,1.88-1.88c1.04,0,1.88.84,1.88,1.87,0,0,0,0,0,0ZM31.4,9.26c.05-2.45-.86-4.82-2.55-6.6C27.07.98,24.7.07,22.26.11,19.66-.04,11.86-.04,9.26.11c-2.45-.05-4.82.86-6.6,2.54C.98,4.43.06,6.8.11,9.25-.04,11.85-.04,19.65.11,22.25c-.05,2.45.86,4.82,2.55,6.6,1.78,1.68,4.15,2.59,6.6,2.55,2.6.15,10.4.15,13,0,2.45.05,4.82-.86,6.6-2.55,1.68-1.78,2.59-4.15,2.55-6.6.15-2.6.15-10.39,0-12.99h0ZM28.04,25.04c-.54,1.37-1.63,2.46-3,3-2.07.82-7,.63-9.29.63s-7.22.18-9.29-.63c-1.37-.54-2.46-1.63-3-3-.82-2.07-.63-7-.63-9.29s-.18-7.22.63-9.29c.54-1.37,1.63-2.46,3-3,2.07-.82,7-.63,9.29-.63s7.22-.18,9.29.63c1.37.54,2.46,1.63,3,3,.82,2.07.63,7,.63,9.29s.19,7.22-.63,9.29Z"/>
              </svg>
            </Link>
            <Link to="https://de.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <svg id="linkedin-icon" className="social-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                  <style>
                  </style>
                </defs>
                <path id="Pfad_105" className="social-icon-path" data-name="Pfad 105" d="M28,1c1.66,0,3,1.34,3,3v24c0,1.66-1.34,3-3,3H4c-1.66,0-3-1.34-3-3V4c0-1.66,1.34-3,3-3h24M28,0H4C1.79,0,0,1.79,0,4v24c0,2.21,1.79,3.99,4,4h24c2.21,0,3.99-1.79,4-4V4c0-2.21-1.79-3.99-4-4Z"/>
                <path id="Pfad_106" className="social-icon-path" data-name="Pfad 106" d="M24.3,23.92v-6.14c0-3.29-1.75-4.82-4.1-4.82-1.31-.05-2.55.63-3.2,1.77v-1.52h-3.56c.05,1.01,0,10.7,0,10.7h3.56v-5.97c-.01-.29.03-.59.12-.87.27-.78,1-1.3,1.83-1.3,1.29,0,1.8.98,1.8,2.42v5.73h3.56ZM9.69,11.76c1.02.08,1.92-.68,2-1.7.08-1.02-.68-1.92-1.7-2-.09,0-.18,0-.27,0-1.02-.09-1.92.67-2.01,1.69-.09,1.02.67,1.92,1.69,2.01.09,0,.18,0,.27,0h.02ZM11.47,23.92v-10.7h-3.56v10.7h3.56Z"/>
              </svg>
            </Link>
            </div>
          </div>
          <div className="hero-title-section">
            <h1 data-text={t('hero.title')}>{t('hero.title')}</h1>
            <HeroDescription />
            <Link to="/projects" className="link-to-film">{t('hero.link')}</Link>
          </div>
          <div></div>
          <ScrollToContentButton />
          </div>
          </div>
        </div>
        </div>
      ) : (
        <div>
          <div className='margin-container'>
          <div className="boxed-container">
            <div className="header-container">
            <div className="website-functions-container">
              <LightMode />
              <LanguageSwitch />
            </div>
            <HeaderNavigation />
            <div className="social-media-icon-container">
            <Link to="https://www.tiktok.com/@octoclick">
              <svg id="tiktok-icon" className="social-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.28 36">
                <defs>
                  <style>
                  </style>
                </defs>
                <path id="Icon_simple-tiktok" data-name="Icon simple-tiktok" className="social-icon-path" d="M16.43.03c1.96-.03,3.91-.01,5.86-.03.06,2.34,1,4.57,2.62,6.26,1.76,1.58,4,2.53,6.36,2.69v6.05c-2.18-.05-4.32-.55-6.3-1.45-.84-.4-1.66-.87-2.43-1.4-.01,4.38.01,8.76-.03,13.12-.11,2.12-.82,4.17-2.02,5.91-2.02,2.92-5.31,4.71-8.86,4.82-2.15.1-4.28-.44-6.12-1.54C2.43,32.61.4,29.44.03,25.88c-.03-.75-.05-1.5-.02-2.24.62-6.21,6.15-10.74,12.35-10.12.25.02.5.06.75.1.03,2.22-.06,4.44-.06,6.66-2.68-.94-5.62.47-6.56,3.15,0,0,0,.02,0,.03-.23.78-.31,1.6-.21,2.42.4,2.56,2.66,4.41,5.25,4.31,1.7-.05,3.27-.96,4.15-2.42.33-.47.55-1.02.61-1.59.15-2.68.09-5.35.1-8.04.02-6.04-.01-12.07.03-18.1Z"/>
              </svg>
            </Link>
            <Link to="https://de.linkedin.com/">
              <svg id="linkedin-icon" className="social-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <defs>
                  <style>
                  </style>
                </defs>
                <path id="Pfad_105" className="social-icon-path" data-name="Pfad 105" d="M28,1c1.66,0,3,1.34,3,3v24c0,1.66-1.34,3-3,3H4c-1.66,0-3-1.34-3-3V4c0-1.66,1.34-3,3-3h24M28,0H4C1.79,0,0,1.79,0,4v24c0,2.21,1.79,3.99,4,4h24c2.21,0,3.99-1.79,4-4V4c0-2.21-1.79-3.99-4-4Z"/>
                <path id="Pfad_106" className="social-icon-path" data-name="Pfad 106" d="M24.3,23.92v-6.14c0-3.29-1.75-4.82-4.1-4.82-1.31-.05-2.55.63-3.2,1.77v-1.52h-3.56c.05,1.01,0,10.7,0,10.7h3.56v-5.97c-.01-.29.03-.59.12-.87.27-.78,1-1.3,1.83-1.3,1.29,0,1.8.98,1.8,2.42v5.73h3.56ZM9.69,11.76c1.02.08,1.92-.68,2-1.7.08-1.02-.68-1.92-1.7-2-.09,0-.18,0-.27,0-1.02-.09-1.92.67-2.01,1.69-.09,1.02.67,1.92,1.69,2.01.09,0,.18,0,.27,0h.02ZM11.47,23.92v-10.7h-3.56v10.7h3.56Z"/>
              </svg>
            </Link>
            </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


