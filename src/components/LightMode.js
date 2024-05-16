import React, { useState, useEffect } from 'react';
import '../styles/colors.css';

function LightMode() {
  const [theme, setTheme] = useState('dark');

  // Setze das Theme-Attribut beim ersten Rendern und bei Änderungen des Themes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Funktion zum Umschalten des Themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default LightMode;