import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/'; // Prüft, ob die aktuelle Seite die Startseite ist

  return (
    <header className={isHome ? 'hero-header' : 'standard-header'}>
      {isHome ? (
        <div className="hero-container">
          <div className="header-container">
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="film">Film</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div>
          <div className="header-container">
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="film">Film</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


