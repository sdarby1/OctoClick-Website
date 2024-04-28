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
            <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/film" onClick={() => setIsOpen(false)}>Film</NavLink></li>
            <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
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