/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Programs from './pages/Programs';
import News from './pages/News';
import Directory from './pages/Directory';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import Careers from './pages/Careers';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="programs" element={<Programs />} />
          <Route path="news" element={<News />} />
          <Route path="directory" element={<Directory />} />
          <Route path="contact" element={<Contact />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </Router>
  );
}
