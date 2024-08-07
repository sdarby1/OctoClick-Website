import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header'; // Stelle sicher, dass der Pfad korrekt ist
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="custom-body">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
