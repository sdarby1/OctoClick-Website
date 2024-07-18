// ClickEffectProvider.js
import React, { useState, useEffect } from 'react';


const ClickEffectProvider = ({ children }) => {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setClicks((prevClicks) => [...prevClicks, newClick]);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
     <>
      {children}
      {clicks.map(click => (
        <div
          key={click.id}
          className="clickEffect"
          style={{ top: click.y, left: click.x }}
          onAnimationEnd={() => setClicks(clicks.filter(c => c.id !== click.id))}
        />
      ))}
    </> 
  );
};

export default ClickEffectProvider;
