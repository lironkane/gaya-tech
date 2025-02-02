import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import SoftwareDevPage from './services/SoftwareDevPage';
import AIandIoTPage from './services/AIandIoTPage';
import CyberSecurityPage from './services/CyberSecurityPage';
import CloudSolutionsPage from './services/CloudSolutionsPage';
import Navbar from './components/Navbar';
import ContactCTA from './components/ContactCTA';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Timeline from './components/Timeline';
import Features from './components/Features';
import Footer from './components/Footer';
import SeoOptimizationGuide2024 from './pages/blog/SeoOptimizationGuide2024';
import LinkBuildingStrategies from './pages/blog/LinkBuildingStrategies';
import KeywordResearchTips from './pages/blog/KeywordResearchTips';
import SeoContentWriting from './pages/blog/SeoContentWriting';
import WebsiteSpeedOptimization from './pages/blog/WebsiteSpeedOptimization';
import LocalSeoGuide from './pages/blog/LocalSeoGuide';
import MetaTagsOptimization from './pages/blog/MetaTagsOptimization';
import GoogleImagesSeo from './pages/blog/GoogleImagesSeo';
import TechnicalSeoGuide from './pages/blog/TechnicalSeoGuide';
import WordpressSeoTips from './pages/blog/WordpressSeoTips';
import ScrollToTop from './components/ScrollToTop';

import './parallax.js';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Handle scroll events
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Set initial visibility after a short delay
    setTimeout(() => setIsVisible(true), 100);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <Router>
      <ScrollToTop>
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
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
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

            .delay-200 {
              animation-delay: 200ms;
            }
            .delay-400 {
              animation-delay: 400ms;
            }
            .delay-600 {
              animation-delay: 600ms;
            }
          `}</style>

          {/* Main Content */}
          <Navbar isScrolled={isScrolled} isVisible={isVisible} />
          <AnimatePresence mode="wait">
            <Routes key={window.location.pathname} >
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Hero isVisible={isVisible} />
                    <Features isVisible={isVisible} />
                    <Timeline isVisible={isVisible} />
                    <WhyChooseUs isVisible={WhyChooseUs} />
                    <ContactCTA />
                  </PageTransition>
                }
              />
              <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
              <Route
                path="/services/software-development"
                element={<PageTransition><SoftwareDevPage /></PageTransition>}
              />
              <Route
                path="/services/cyber-security"
                element={<PageTransition><CyberSecurityPage /></PageTransition>}
              />
              <Route path="/services/ai-iot" element={<PageTransition><AIandIoTPage /></PageTransition>} />
              <Route
                path="/services/cloud-solutions"
                element={<PageTransition><CloudSolutionsPage /></PageTransition>}
              />
              <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
              <Route
                path="/blog/seo-optimization-guide-2024"
                element={<PageTransition><SeoOptimizationGuide2024 /></PageTransition>}
              />
              <Route
                path="/blog/link-building-strategies"
                element={<PageTransition><LinkBuildingStrategies /></PageTransition>}
              />
              <Route
                path="/blog/keyword-research-tips"
                element={<PageTransition><KeywordResearchTips /></PageTransition>}
              />
              <Route
                path="/blog/seo-content-writing"
                element={<PageTransition><SeoContentWriting /></PageTransition>}
              />
              <Route
                path="/blog/website-speed-optimization"
                element={<PageTransition><WebsiteSpeedOptimization /></PageTransition>}
              />
              <Route path="/blog/local-seo-guide" element={<PageTransition><LocalSeoGuide /></PageTransition>} />
              <Route
                path="/blog/meta-tags-optimization"
                element={<PageTransition><MetaTagsOptimization /></PageTransition>}
              />
              <Route
                path="/blog/google-images-seo"
                element={<PageTransition><GoogleImagesSeo /></PageTransition>}
              />
              <Route
                path="/blog/technical-seo-guide"
                element={<PageTransition><TechnicalSeoGuide /></PageTransition>}
              />
              <Route
                path="/blog/wordpress-seo-tips"
                element={<PageTransition><WordpressSeoTips /></PageTransition>}
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default App;