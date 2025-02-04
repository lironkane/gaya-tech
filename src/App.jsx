import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => setIsVisible(true), 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
    <ScrollToTop />

      <div className="min-h-screen bg-background">
        <Navbar isScrolled={isScrolled} isVisible={isVisible} />
          <Routes>
            <Route path="/" element={
                <>
                  <Hero isVisible={isVisible} />
                  <Features isVisible={isVisible} />
                  <Timeline isVisible={isVisible} />
                  <WhyChooseUs isVisible={WhyChooseUs} />
                  <ContactCTA />
                </>
              }
            />
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
    </Router>
  );
}

export default App;