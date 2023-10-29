import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';
import VerticalVideo from './pages/VerticalVideo';
import CaseStudy from './pages/CaseStudy';
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import GoogleAds from './pages/GoogleAds';
import LocalSeo from './pages/LocalSeo';
import Terms from './pages/Terms';
import Services from './pages/Services'

import ScrollToTop from './components/scroll-to-top';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/video" element={<VerticalVideo />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
            <Route path="/terms"  element={<Terms  />} /> 
            <Route path="/services"  element={<Services  />} /> 
            <Route path="/local-seo"  element={<LocalSeo  />} /> 
            <Route path="/google-ads"  element={<GoogleAds  />} /> 
            {/* Add more Routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
