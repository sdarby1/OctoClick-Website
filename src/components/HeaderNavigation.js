import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 780);

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
            <li><NavLink className="nav-btn" to="/" onClick={() => setIsOpen(false)} data-text="Home">Home</NavLink></li>
            <li><NavLink className="nav-btn" to="/film" onClick={() => setIsOpen(false)} data-text="Film">Film</NavLink></li>
            <li><NavLink className="nav-btn" to="/about" onClick={() => setIsOpen(false)} data-text="About">About</NavLink></li>
            <li><NavLink className="nav-btn" to="/contact" onClick={() => setIsOpen(false)} data-text="Contact">Contact</NavLink></li>
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
