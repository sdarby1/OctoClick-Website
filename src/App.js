import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Film from './pages/Film';
import NotFound from './pages/404';
import ClickEffectProvider from './components/ClickEffectProvider';

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
      </Routes>
    </Router>
    </ClickEffectProvider> 
  );
}

export default App;

