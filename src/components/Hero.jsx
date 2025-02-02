import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from 'react-spring';
import { Helmet } from 'react-helmet';
import backgroundImage from "../assets/background/red3-background.jpg";
import RotatingCubeButton from '../RotatingCubeButton';

const Hero = ({ isVisible }) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const textRef = useRef(null);

  // SEO Meta Data
  const metaDescription = "פתרונות דיגיטליים מתקדמים - בניית אתרים מותאמים אישית, קידום אורגני מתקדם וליווי מקצועי לאורך כל הדרך";
  const metaKeywords = "פתרונות דיגיטליים, בניית אתרים, קידום אורגני, פיתוח אתרים, עיצוב אתרים, קידום אתרים";

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      textRef.current.style.animation = `typing 3.5s steps(${textWidth}, end), blink-caret 0.75s step-end infinite`;
    }

    // טעינת תמונת הרקע מראש לשיפור ביצועים
    const img = new Image();
    img.src = backgroundImage;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateOpacity = () => {
    if (!heroRef.current) return 1;
    const heroHeight = heroRef.current.offsetHeight;
    return Math.max(0, 1 - (scrollY / (heroHeight * 0.5)));
  };

  // אנימציות
  const backgroundProps = useSpring({
    from: { transform: 'scale(1) translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'scale(1.05) translateY(-20px)' });
        await next({ transform: 'scale(1) translateY(0px)' });
      }
    },
    config: { duration: 20000 },
  });

  const titleProps = useSpring({
    from: { transform: 'scale(1) translateY(-20px)', opacity: 0 },
    to: async (next) => {
      while (true) {
        await next({ transform: 'scale(1.02) translateY(0px)', opacity: 1 });
        await next({ transform: 'scale(0.98) translateY(-5px)', opacity: 0.95 });
      }
    },
    config: { tension: 300, friction: 15, mass: 2 },
    delay: 1000,
  });

  const subtitleProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-20px)',
    delay: 300,
    config: { duration: 500 },
  });

  const descriptionProps = useSpring({
    opacity: isVisible ? 1 : 0,
    delay: 600,
    config: { duration: 500 },
  });

  const fadeProps = useSpring({
    opacity: calculateOpacity(),
    config: { tension: 280, friction: 60 },
  });

  const textShadowAnimation = {
    textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
    transition: 'text-shadow 0.3s ease-in-out',
  };

  return (
    <>
      <Helmet>
        <title>פתרונות דיגיטליים מתקדמים | גאיה-טק</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content="פתרונות דיגיטליים מתקדמים | גאיה-טק" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={backgroundImage} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "גאיה-טק",
            "description": metaDescription,
            "url": window.location.href,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${window.location.origin}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <animated.header 
        ref={heroRef}
        className="relative pt-24 overflow-hidden"
        style={fadeProps}
        role="banner"
        aria-label="פתרונות דיגיטליים מתקדמים"
      >
        {/* תמונת רקע עם טעינה מותנית */}
        <animated.div
          className="absolute inset-0 h-full w-full z-0"
          style={{
            ...backgroundProps,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          role="img"
          aria-label="רקע דינמי"
          loading="lazy"
        />

        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-right space-y-8">
            <animated.h1
              style={{ ...titleProps, ...textShadowAnimation }}
              className="group font-secular font-black leading-tight tracking-wider text-white text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 cursor-pointer drop-shadow-lg hover:text-shadow-glow relative transform-gpu"
            >
              <span className="relative inline-block transform transition-transform duration-300 hover:scale-y-110 hover:scale-x-95">
                פתרונות
              </span>
              <br />
              <span className="relative inline-block transform transition-transform duration-300 hover:scale-y-110 hover:scale-x-95">
                דיגיטליים
              </span>
            </animated.h1>

            <animated.div
              style={subtitleProps}
              ref={textRef}
              className="font-secular drop-shadow-md text-4xl sm:text-5xl text-center text-white font-extrabold transition-all duration-700 hover:text-shadow-glow typewriter"
              role="doc-subtitle"
            >
              שעובדים בשבילך
            </animated.div>

            <animated.p 
              style={descriptionProps}
              className="font-amatic text-lg sm:text-3xl text-white max-w-3xl mx-auto text-center transition-all duration-700 drop-shadow-sm hover:text-shadow-glow animate-fade-in"
            >
              בניית אתרים מותאמים אישית, קידום אורגני מתקדם וליווי מקצועי
              לאורך כל הדרך
            </animated.p>

            <div 
              className={`flex justify-center w-full ${isVisible ? "opacity-100 delay-600" : "opacity-0"}`}
              role="navigation"
              aria-label="כפתור יצירת קשר"
            >
              <RotatingCubeButton />
            </div>
          </div>
        </div>
      </animated.header>
    </>
  );
};

export default Hero;