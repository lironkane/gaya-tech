import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { HelmetProvider } from 'react-helmet-async';

import WebsiteQuestionnaire from './pages/WebsiteQuestionnaire';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import LandingPage from './pages/LandingPage';
import MedicalSkeletonDemo from './components/MedicalSkeletonDemo';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import SoftwareDevPage from './services/SoftwareDevPage';
import AIandIoTPage from './services/AIandIoTPage';
import CyberSecurityPage from './services/CyberSecurityPage';
import CloudSolutionsPage from './services/CloudSolutionsPage';
import LandingPageService from './services/LandingPageService';
import WebsiteDevelopmentPage from './services/WebsiteDevelopmentPage';
import BrandWebsitePage from './services/BrandWebsitePage';
import Navbar from './components/Navbar';
import MinimalDNADemo from './components/MinimalDNADemo';
import ProfessionalReviews from './components/ProfessionalReviews.jsx';
import ContactCTA from './components/ContactCTA';
import Hero from './components/Hero';
import Services from './components/Services';
import Timeline from './components/Timeline';
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
import { trackConversion } from './utils/analytics';

import './parallax.js';

// קומפוננט עוטף לעמוד יצירת הקשר עם מעקב המרות
const ContactPageWithTracking = () => {
  useEffect(() => {
    // הפעל את קוד ההמרה כשהמשתמש מגיע לדף יצירת קשר
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-16893794531/gRzRCNmU66IaEOOxy_c-'});
      console.log('Contact page conversion tracked');
    }
  }, []);

  return <ContactPage />;
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => setIsVisible(true), 100);

    // התקנת Google Analytics אם צריך
    if (typeof window !== 'undefined' && !window.gtag) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-16893794531');
      window.gtag = gtag;
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HelmetProvider>

    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-background">
        <Navbar isScrolled={isScrolled} isVisible={isVisible} />
          <Routes>
            <Route path="/" element={
                <>
                  <Hero isVisible={isVisible} />
                  <Services isVisible={isVisible}/>
                  <Timeline isVisible={isVisible} />
                  <ContactCTA />
                </>
              }
            />
            <Route path="/questionnaire" element={<WebsiteQuestionnaire />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/MinimalDNADemo" element={<MinimalDNADemo />} />
            <Route path="/services/software-development" element={<SoftwareDevPage />} />
            <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
            <Route path="/services/ai-iot" element={<AIandIoTPage />} />
            <Route path="/services/website-development-page" element={<WebsiteDevelopmentPage />} />
            <Route path="/services/brand-website-page" element={<BrandWebsitePage />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutionsPage />} />
            <Route path="/services/landing-page-service" element={<LandingPageService />} />
            <Route path="/contact" element={<ContactPageWithTracking />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/MedicalSkeletonDemo" element={<MedicalSkeletonDemo />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
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
    </HelmetProvider>

  );
}

export default App;