import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  MousePointer2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // ייבוא react-helmet

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative text-primary-100 font-amatic min-h-screen overflow-hidden flex items-center" dir="rtl" aria-label="Footer - Tech Start: ניווט מהיר, יצירת קשר ומידע על החברה">
      <Helmet>
        {/* Metadata SEO - Footer */}
        <title>Tech-Start - פיתוח אתרים, שיווק דיגיטלי ויצירת קשר</title>
        <meta name="description" content="הגעתם לפוטר של Tech-Start. מצאו ניווט מהיר, פרטי יצירת קשר ומידע חיוני על החברה שלנו לפיתוח אתרים ושיווק דיגיטלי." />
        <meta name="keywords" content="פוטר, ניווט מהיר, צור קשר, מייל, טלפון, כתובת, שירותים, תיק עבודות, אודות, בלוג, Tech-Start, פיתוח אתרים, שיווק דיגיטלי, קליניקות, רופאים, רופאי שיניים" />
        {/* סוף Metadata SEO */}
      </Helmet>
      {/* Dynamic Background with Mouse Movement */}
      <div
        className="absolute inset-0 bg-background transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
        <div className="absolute inset-0 bg-gradient-pro opacity-30" />

        {/* Interactive Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-metal opacity-20 blur-3xl animate-subtle-float"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.05}px, ${(mousePosition.y - window.innerHeight / 2) * 0.05}px)`
          }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-glass opacity-20 blur-3xl animate-subtle-float animation-delay-1000"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * -0.05}px, ${(mousePosition.y - window.innerHeight / 2) * -0.05}px)`
          }}
        />
      </div>

      {/* Enhanced Grid Overlay */}
      <div className="absolute inset-0">
        <div className="h-full w-full"
          style={{
            backgroundImage: `
                 linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
               `,
            backgroundSize: '4rem 4rem',
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`
          }}
        />
      </div>

      <div className="relative w-full py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-24 relative">
            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <MousePointer2 className="absolute text-accent-frost w-6 h-6 animate-subtle-float" style={{ left: '10%', top: '20%' }} />
              <div className="absolute w-2 h-2 bg-accent-silver rounded-full animate-subtle-float" style={{ right: '15%', top: '30%' }} />
              <div className="absolute w-3 h-3 bg-glass-medium rounded-full animate-subtle-float animation-delay-1000" style={{ left: '20%', bottom: '20%' }} />
            </div>

            <div className="relative mb-16 group perspective-1000">
              <div className="absolute inset-0 bg-glass-medium rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-metal bg-clip-text text-transparent relative z-10 transform transition-transform duration-500 group-hover:scale-105 drop-shadow-lg">
                Ready to #makeitbetter
                <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg" />
              </h2>
            </div>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-fade-in text-white drop-shadow-md">
              נפגש ונהפוך את החלום הדיגיטלי שלך למציאות מרהיבה
            </p>

            {/* Super Enhanced CTA Button */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 px-12 py-5 rounded-2xl text-xl font-medium overflow-hidden"
            >
              {/* Button Background Effects */}
              <div className="absolute inset-0 bg-glass-medium backdrop-blur-lg border border-accent-frost" />
              <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-frost to-transparent bg-[length:200%_100%] animate-highlight-scan" />

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-metal opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

              {/* Content with Enhanced Animation */}
              <span className="relative z-10 text-white transform transition-transform duration-300 group-hover:scale-110">
                בואו ניצור משהו מיוחד
              </span>
              <Sparkles className="relative z-10 w-6 h-6 text-white animate-subtle-float" />
              <ArrowRight className="relative z-10 w-6 h-6 text-white transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </Link>
          </div>

          {/* Main Grid with Enhanced Interaction */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
            {/* Vision Section */}
            <div className="group space-y-6 p-8 rounded-3xl bg-glass-medium backdrop-blur-lg border border-accent-frost shadow-frosted hover:shadow-pro transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300 drop-shadow-lg relative">
                <span className="relative z-10">החזון שלנו</span>
                <div className="absolute inset-0 bg-gradient-metal opacity-50 blur-sm"></div>
              </h3>
              <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                אנחנו מאמינים שכל מוצר דיגיטלי צריך להיות לא רק פונקציונלי, אלא גם מרהיב ומעורר השראה.
                זו הסיבה שאנחנו משקיעים בכל פרט ופרט.
              </p>
            </div>

            {/* Quick Links */}
            <div className="group space-y-6 p-8 rounded-3xl bg-glass-medium backdrop-blur-lg border border-accent-frost shadow-frosted hover:shadow-pro transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300 drop-shadow-lg relative">
                <span className="relative z-10">ניווט מהיר</span>
                <div className="absolute inset-0 bg-gradient-metal opacity-50 blur-sm"></div>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'שירותים', path: '/services' },
                  { name: 'תיק עבודות', path: '/portfolio' },
                  { name: 'אודות', path: '/about' },
                  { name: 'בלוג', path: '/blog' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group/link text-gray-200 transition-all duration-300 hover:text-white"
                  >
                    <span className="relative inline-block">
                      {link.name}
                      <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-metal transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="group space-y-6 p-8 rounded-3xl bg-glass-medium backdrop-blur-lg border border-accent-frost shadow-frosted hover:shadow-pro transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300 drop-shadow-lg relative">
                <span className="relative z-10">צור קשר</span>
                <div className="absolute inset-0 bg-gradient-metal opacity-50 blur-sm"></div>
              </h3>
              <div className="space-y-4">
                {[
                  { Icon: Mail, text: 'lironkane1@gmail.com', href: 'mailto:lironkane1@gmail.com' },
                  { Icon: Phone, text: '054-699-7625', href: 'tel:0546997625' },
                  { Icon: MapPin, text: 'תל אביב, ישראל', href: null },
                ].map((item, index) => {
                  const Content = () => (
                    <>
                      <div className="relative p-2 rounded-full bg-glass-light group-hover:bg-glass-medium transition-all duration-300 transform group-hover:scale-110">
                        <item.Icon className="w-5 h-5 text-white" />
                        <div className="absolute inset-0 bg-gradient-metal opacity-0 group-hover:opacity-20 rounded-full blur-md transition-opacity duration-300" />
                      </div>
                      <span className="relative text-gray-200 group-hover:text-white">
                        {item.text}
                        <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-metal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </span>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      className="group flex items-center gap-3 transition-colors duration-300"
                    >
                      <Content />
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="group flex items-center gap-3 transition-colors duration-300"
                    >
                      <Content />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Bar */}
          <div className="relative">
            <div className="absolute inset-0 bg-glass-dark backdrop-blur-md opacity-50" />
            <div className="relative border-t border-accent-frost pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-xl md:text-2xl font-bold bg-gradient-metal bg-clip-text text-transparent animate-subtle-float">
                  #makeitbetter
                </div>
                <div className="text-sm text-gray-200">
                  © {new Date().getFullYear()} סטרט טק. כל הזכויות שמורות.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;