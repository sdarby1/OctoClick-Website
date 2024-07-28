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
    <div className='margin-container'>
      <div className="boxed-container">
    <header className={isHome ? 'hero-header' : 'standard-header'}>
      {isHome ? (
        <div className="hero-container">
          <div className="header-container home-header">
            <div className="website-functions-container">
              <LightMode />
              <LanguageSwitch />
            </div>
            <HeaderNavigation />
            <div className="social-media-icon-container">
            <Link to="https://www.tiktok.com/@octoclick"><img src="/images/icons/tiktok-icon.svg" alt="Tik Tok"/></Link>
              <img src="/images/icons/instagram-icon.svg" alt="Instagram"/>
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
      ) : (
        <div>
          <div className="header-container">
          <div className="website-functions-container">
              <LightMode />
              <LanguageSwitch />
            </div>
            <HeaderNavigation />
            <div className="social-media-icon-container">
              <img src="/images/icons/tiktok-icon.svg" alt="Tik Tok"/>
              <img src="/images/icons/instagram-icon.svg" alt="Instagram"/>
            </div>
          </div>
        </div>
      )}
    </header>
    </div>
    </div>
  );
};

export default Header;


