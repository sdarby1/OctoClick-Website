import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // Stelle sicher, dass der Pfad korrekt ist

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        Footer
      </footer>
    </>
  );
};

export default RootLayout;
