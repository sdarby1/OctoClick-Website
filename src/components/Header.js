import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import HeaderNavigation from './HeaderNavigation';
import ScrollToContentButton from './ScrollDownBtn';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/'; // Prüft, ob die aktuelle Seite die Startseite ist

  return (
    <header className={isHome ? 'hero-header' : 'standard-header'}>
      {isHome ? (
        <div className="hero-container">
          <div className="header-container home-header">
            <Link to=""><img src="" alt="logo" /></Link>
            <HeaderNavigation />
          </div>
          <div></div>
          <div class="hero-title-section">
            <h1>OctoClick</h1>
            <p>Schau dir jetzt unseren neusten Werbefilm "Filmtitel" an!</p>
            <Link to="/film">Film ansehen</Link>
          </div>
          <ScrollToContentButton />
        </div>
      ) : (
        <div>
          <div className="header-container">
            <Link to=""><img src="" alt="logo" /></Link>
            <HeaderNavigation />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


