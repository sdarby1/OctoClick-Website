import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LightMode from './LightMode';
import LanguageSwitch from './LanguageSwitch';
import { useTranslation } from 'react-i18next';



const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 780);
  const { t } = useTranslation();


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
      if (window.innerWidth >= 780) {
        setIsOpen(false); // Menü automatisch schließen, wenn Bildschirm groß genug ist
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
     <nav className={isOpen ? "open" : ""}>
        <ul>
            <li><NavLink activeclassname="active" className="nav-btn" to="/" onClick={() => setIsOpen(false)} data-text={t('navbar.home')}>{t('navbar.home')}</NavLink></li>
            <li><NavLink activeclassname="active" className="nav-btn" to="/about" onClick={() => setIsOpen(false)} data-text={t('navbar.about')}>{t('navbar.about')}</NavLink></li>
            <li><Link to="/"><img src="/images/logo/OctoClick-Logo.svg" alt="logo" width="60px;"/></Link></li>
            <li><NavLink activeclassname="active" className="nav-btn" to="/projects" onClick={() => setIsOpen(false)} data-text={t('navbar.project')}>{t('navbar.project')}</NavLink></li>
            <li><NavLink activeclassname="active" className="nav-btn" to="/contact" onClick={() => setIsOpen(false)} data-text={t('navbar.contact')}>{t('navbar.contact')}</NavLink></li>
        </ul>
     </nav>
     {isMobile && (
       <div className={`hamburger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
         <div className="bar1 bar"></div>
         <div className="bar2 bar"></div>
         <div className="bar3 bar"></div>
       </div>
     )}
    </>
  )
}

export default HeaderNavigation;
