import React, { useState, useEffect } from 'react';
import '../styles/colors.css';  // Richtiges Importieren der CSS-Datei
import sunIcon from '../images/icons/light-mode-icon.svg'; 
import moonIcon from '../images/icons/dark-mode-icon.svg'; 

function LightMode() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{  color: 'var(--text-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'} />
        <span className="slider">
          <img src={moonIcon} alt="Moon Icon" className="icon moon-icon" />
          <img src={sunIcon} alt="Sun Icon" className="icon sun-icon" />
        </span>
      </label>
    </div>
  );
}

export default LightMode;