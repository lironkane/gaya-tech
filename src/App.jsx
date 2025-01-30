import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Timeline from './components/Timeline';
import Features from './components/Features';
import Footer from './components/Footer';
import './parallax.js';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background">
        {/* Global Animations */}
        <style jsx global>{`
          @keyframes slideUp {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes scaleIn {
            0% {
              transform: scale(0.9);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-slide-up {
            opacity: 0;
            animation: slideUp 0.8s ease-out forwards;
          }

          .animate-fade-in {
            opacity: 0;
            animation: fadeIn 0.8s ease-out forwards;
          }

          .animate-scale-in {
            opacity: 0;
            animation: scaleIn 0.8s ease-out forwards;
          }

          .delay-200 { animation-delay: 200ms; }
          .delay-400 { animation-delay: 400ms; }
          .delay-600 { animation-delay: 600ms; }
        `}</style>

        {/* תוכן ראשי */}
        <Navbar isScrolled={isScrolled} isVisible={isVisible} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero isVisible={isVisible} />
              <Features isVisible={isVisible} />
              <Timeline isVisible={isVisible} />
              <WhyChooseUs isVisible={WhyChooseUs} />
            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;