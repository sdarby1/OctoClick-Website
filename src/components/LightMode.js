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
      <button onClick={toggleTheme} style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default LightMode;