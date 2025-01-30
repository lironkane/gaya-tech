import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from 'react-spring';
import backgroundImage from "../assets/background/red3-background.jpg";
import RotatingCubeButton from '../RotatingCubeButton';

const Hero = ({ isVisible }) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      textRef.current.style.animation = `typing 3.5s steps(${textWidth}, end), blink-caret 0.75s step-end infinite`;
    }
  }, []);

  // האזנה לאירוע גלילה
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // חישוב האטימות בזמן גלילה
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
    <animated.header 
      ref={heroRef}
      className="relative pt-24 overflow-hidden"
      style={fadeProps}
    >
      {/* רקע תמונה */}
      <animated.div
        className="absolute inset-0 h-full w-full z-0"
        style={{
          ...backgroundProps,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* שכבת כיסוי עם אפקט הדרגתי */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-gray-900/30
          via-gray-800/20
          to-transparent
        "
      />

      {/* תוכן ה-Hero */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-right space-y-8">
          {/* כותרת ראשית */}
          <animated.h1
  style={{ 
    ...titleProps, 
    ...textShadowAnimation,
  }}
  className={`
    group
    font-secular
    font-black
    leading-tight
    tracking-wider
    text-white
    text-center 
    text-5xl sm:text-6xl md:text-7xl lg:text-8xl
    transition-all duration-700
    cursor-pointer
    drop-shadow-lg
    hover:text-shadow-glow
    relative
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-gradient-to-b
    before:from-transparent
    before:to-white/10
    before:opacity-0
    hover:before:opacity-100
    before:transition-opacity
    before:duration-300
    before:rounded-3xl
    transform-gpu
    hover:transform
    hover:scale-[1.02]
    active:scale-[0.98]
    ${isVisible ? "opacity-100" : "opacity-0"}
  `}
>
  <span className="relative inline-block transform transition-transform duration-300 hover:scale-y-110 hover:scale-x-95">
    פתרונות
  </span>
  <br />
  <span className="relative inline-block transform transition-transform duration-300 hover:scale-y-110 hover:scale-x-95">
    דיגיטליים
  </span>
</animated.h1>
          {/* כותרת משנית */}
          <animated.div
            style={subtitleProps}
            ref={textRef}
            className={`
              font-secular
              drop-shadow-md
              text-4xl sm:text-5xl
              text-center
              text-white
              font-extrabold
              transition-all duration-700
              hover:text-shadow-glow
              ${isVisible ? "opacity-100 delay-400" : "opacity-0"}
              typewriter 
            `}
          >
            שעובדים בשבילך
          </animated.div>

          {/* תיאור */}
          <animated.p 
            style={descriptionProps}
            className={`
              font-amatic
              text-lg sm:text-3xl
              text-white
              max-w-3xl
              mx-auto
              text-center 
              transition-all duration-700
              drop-shadow-sm
              hover:text-shadow-glow
              ${isVisible ? "opacity-100 delay-600" : "opacity-0"}
              animate-fade-in
            `}
          >
            בניית אתרים מותאמים אישית, קידום אורגני מתקדם וליווי מקצועי
            לאורך כל הדרך
          </animated.p>

          {/* כפתור הנעה לפעולה */}
          <div className={`flex justify-center w-full ${isVisible ? "opacity-100 delay-600" : "opacity-0"}`}>
            <RotatingCubeButton />
          </div>
        </div>
      </div>
    </animated.header>
  );
};

export default Hero;