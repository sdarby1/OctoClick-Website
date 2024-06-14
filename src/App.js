import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import NoLayout from './layouts/NoLayout'; // Neue Layout-Komponente

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Film from './pages/Film';
import NotFound from './pages/404';
import ClickEffectProvider from './components/ClickEffectProvider';
import CustomVideoPlayer from './components/CustomVideoPlayer';

function App() {
  return (
    <ClickEffectProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="film" element={<Film />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/videoplayer" element={<NoLayout />}>
            <Route index element={<CustomVideoPlayer />} />
          </Route>
        </Routes>
      </Router>
    </ClickEffectProvider>
  );
}

export default App;
