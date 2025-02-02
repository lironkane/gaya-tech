import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';CyberSecurityPage
import SoftwareDevPage from './services/SoftwareDevPage';
import AIandIoTPage from './services/AIandIoTPage';
import CyberSecurityPage from './services/CyberSecurityPage';AIandIoTPage
import CloudSolutionsPage from './services/CloudSolutionsPage';
import Navbar from './components/Navbar';
import ContactCTA from './components/ContactCTA'; // ייבוא הקומפוננטה

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
import ScrollToTop from './ScrollToTop';

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
              <WhyChooseUs isVisible={isVisible} />
              <ContactCTA />

            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/software-development" element={<SoftwareDevPage />} />
          <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
          <Route path="/services/ai-iot" element={<AIandIoTPage />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/seo-optimization-guide-2024" element={<SeoOptimizationGuide2024 />} />
          <Route path="/blog/link-building-strategies" element={<LinkBuildingStrategies />} />
          <Route path="/blog/keyword-research-tips" element={<KeywordResearchTips />} />
          <Route path="/blog/seo-content-writing" element={<SeoContentWriting />} />
          <Route path="/blog/website-speed-optimization" element={<WebsiteSpeedOptimization />} />
          <Route path="/blog/local-seo-guide" element={<LocalSeoGuide />} />
          <Route path="/blog/meta-tags-optimization" element={<MetaTagsOptimization />} />
          <Route path="/blog/google-images-seo" element={<GoogleImagesSeo />} />
          <Route path="/blog/technical-seo-guide" element={<TechnicalSeoGuide />} />
          <Route path="/blog/wordpress-seo-tips" element={<WordpressSeoTips />} />
        </Routes>
        <Footer />
      </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;