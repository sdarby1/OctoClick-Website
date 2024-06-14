// src/layouts/NoLayout.js
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const NoLayout = () => {
  useEffect(() => {
    // Füge die Klasse hinzu, wenn die Komponente gemountet wird
    document.body.classList.add('no-padding');

    // Entferne die Klasse, wenn die Komponente unmountet wird
    return () => {
      document.body.classList.remove('no-padding');
    };
  }, []);

  return (
    <div className="video-player-page">
      <Outlet />
    </div>
  );
};

export default NoLayout;
