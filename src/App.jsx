import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import ServicesPage from './pages/Services';
import Products from './pages/Products';
import Work from './pages/Work';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
