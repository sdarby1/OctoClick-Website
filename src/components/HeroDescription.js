import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HeroDescription = () => {
  const { t } = useTranslation();

  // Texte, die im <h2> angezeigt werden sollen
  const heroDescriptions = [
    t('hero.desc1'),
    t('hero.desc2'),
    t('hero.desc3')
  ];

  const [currentDescription, setCurrentDescription] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentDescription(prevDescription => (prevDescription + 1) % heroDescriptions.length);
        setShowText(true);
      }, 100); // Kurze Pause, um den Text unsichtbar zu machen und die Animation zu triggern
    }, 5000); // 5000ms = 5s

    return () => clearInterval(interval); // Interval aufräumen, wenn Komponente unmounted wird
  }, [heroDescriptions.length]);

  return (
    <div className="typewriter-container">
      <div
        className="typewriter"
        style={{
          visibility: showText ? 'visible' : 'hidden',
          animation: showText ? `typewriter 3s steps(${heroDescriptions[currentDescription].length}, end) forwards, blink-caret .75s step-end infinite` : 'none'
        }}
      >
        <h2 key={currentDescription}>{heroDescriptions[currentDescription]}</h2>
      </div>
      {/* Unsichtbarer Platzhalter für die Höhe */}
      <div style={{ visibility: 'hidden', position: 'absolute' }}>
        <h2>{heroDescriptions[currentDescription]}</h2>
      </div>
    </div>
  );
};

export default HeroDescription;