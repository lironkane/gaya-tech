import React, { useRef, useEffect, useState, useMemo } from 'react';
import Lottie from 'lottie-react';
import { motion, useTransform, useScroll, useSpring, useMotionValue } from 'framer-motion';
import handshakeAnimation from '../assets/animations/arrow.json';
import { Global } from '@emotion/react';
import { Helmet } from 'react-helmet'; // הוספתי ייבוא react-helmet


const RotatingLogo = () => {
  const [rotation, setRotation] = useState(0);


  return (
    <div className="relative w-[16vw] h-[16vw] max-w-[200px] max-h-[200px] min-w-[80px] min-h-[80px]">
      <motion.img
        src="/logo.png"
        alt="Tech Start Logo"
        className="rounded-full w-full h-full object-cover"
        style={{
          rotate: `${rotation}deg`,
          willChange: 'transform',
        }}
      />
    </div>
  );
};

const RotatingCubeButton = () => {
  return (
    <>
      <div
        className="cube-wrapper group relative"
        style={{
          width: 'clamp(100px, 10vw, 180px)',
          height: 'clamp(40px, 5vh, 60px)',
          marginRight: '50px',  // הוספת margin קבוע של 50px
          transform: 'translateX(50px)' // הוספת הזזה של 50px ימינה
        }}
      >
        <a href="/contact" className="absolute inset-0 z-20 cursor-pointer" aria-label="Contact us" />
        <div className="cube">
          <div className="cube-face front" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>בואו נדבר</div>
          <div className="cube-face back" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>בואו נדבר</div>
          <div className="cube-face top" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>בואו נדבר</div>
          <div className="cube-face bottom" style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}>בואו נדבר</div>
        </div>
      </div>
      <Global
        styles={`
          .cube-wrapper {
            perspective: 1000px;
            transform-style: preserve-3d;
            filter: drop-shadow(2px 2px 0px #000);
          }

          .cube {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateX 8s infinite linear;
          }

          .cube-face {
            position: absolute;
            width: 100%;
            height: 100%;
            background: black;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            border: 2px solid #0a2a1f;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
            transition: all 0.3s;
            user-select: none;
            text-shadow: 1px 1px 0px #000;
          }

          .cube-wrapper:hover .cube-face {
            background: #B4B4B4;
            box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.4);
            text-shadow: 2px 2px 0px #000;
          }

          .front { transform: translateZ(20px); }
          .back { transform: rotateX(180deg) translateZ(20px); }
          .right { transform: rotateY(90deg) translateZ(50px); }
          .left { transform: rotateY(-90deg) translateZ(50px); }
          .top { transform: rotateX(90deg) translateZ(20px); }
          .bottom { transform: rotateX(-90deg) translateZ(20px); }

          @keyframes rotateX {
            0% { transform: rotateX(0deg); }
            100% { transform: rotateX(-360deg); }
          }
        `}
      />
    </>
  );
};



const Hero = () => {
  const heroRef = useRef(null);
  const maxHeight = typeof window !== 'undefined' ? window.innerHeight - 50 : 800;
  const minHeight = 50;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const getTitleContent = () => {
    return (
      <>
        {'בניית אתרים.'}
        {'\n'}
        {'שיווק דיגיטלי.'}
        {'\n'}
        {'הצלחה עסקית.'}
      </>
    );
  };

  const [h1FontSize, setH1FontSize] = useState('6vw');
  const h1Ref = useRef(null);
  const MAX_LINES = 3;

  useEffect(() => {
    const calculateH1FontSize = () => {
      if (!h1Ref.current) return;

      const container = h1Ref.current.parentElement;
      const containerWidth = container.clientWidth;

      let fontSize = 6;
      h1Ref.current.style.fontSize = `${fontSize}vw`;
      h1Ref.current.style.lineHeight = `calc(1.1em + 0.5vw)`;
      h1Ref.current.style.whiteSpace = 'pre-line';

      while (h1Ref.current.scrollHeight > h1Ref.current.offsetHeight && fontSize > 1) {
        fontSize -= 0.1;
        h1Ref.current.style.fontSize = `${fontSize}vw`;
        h1Ref.current.style.lineHeight = `calc(1.1em + 0.5vw)`;
      }

      const computedLineHeight = parseFloat(window.getComputedStyle(h1Ref.current).lineHeight);
      const numLines = h1Ref.current.scrollHeight / computedLineHeight;

      while (numLines > MAX_LINES && fontSize > 1) {
        fontSize -= 0.1;
        h1Ref.current.style.fontSize = `${fontSize}vw`;
        h1Ref.current.style.lineHeight = `calc(1.1em + 0.5vw)`;
        const updatedNumLines = h1Ref.current.scrollHeight / computedLineHeight;
        if (updatedNumLines <= MAX_LINES) break;
      }

      setH1FontSize(`${fontSize}vw`);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      calculateH1FontSize();
    };

    calculateH1FontSize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  const heightValue = useTransform(scrollYProgress, [0, 1], [maxHeight, minHeight]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const blurValueNumeric = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 0, 8, 16]);
  const heightSpring = useSpring(heightValue, { stiffness: 80, damping: 30 });
  const scaleSpring = useSpring(scaleValue, { stiffness: 80, damping: 30 });
  const blurSpring = useSpring(blurValueNumeric, { stiffness: 80, damping: 30 });
  const blurFilter = useTransform(blurSpring, (v) => `blur(${v}px)`);
  const innerDivTranslateY = useTransform(scrollYProgress, [0, 1], [0, maxHeight * 0.8]);
  const innerDivTranslateYSpring = useSpring(innerDivTranslateY, { stiffness: 80, damping: 30 });

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 1 }}
      className="relative min-h-[calc(100vh-50px)] bg-black min-w-[320px] pt-3 pb-1 px-3 mb-8"
      style={{
        height: heightSpring,
        scale: scaleSpring,
        willChange: 'height, transform',
      }}
      aria-label="Hero Section - Tech Start: בניית אתרים, שיווק דיגיטלי, הצלחה עסקית"
    >
      <Helmet>
        {/* Metadata SEO -  קידום אורגני לאתר */}
        <title>Tech-Start - פיתוח אתרים | שיווק דיגיטלי | לרופאי שיניים ורופאים</title>
        <meta name="description" content="Tech-Start: חברת פיתוח אתרים ושיווק דיגיטלי המתמחה בבניית אתרים וקידום קליניקות רפואיות ומרפאות שיניים. פתרונות דיגיטליים מתקדמים לרופאים ורופאי שיניים." />
        <meta name="keywords" content="פיתוח אתרים לרופאי שיניים, בניית אתרים לרופאים, אתר מרפאת שיניים, אתר לקליניקה רפואית, קידום אתרים לרופאים, שיווק דיגיטלי לרופאי שיניים, עיצוב אתרים רפואיים, אתר תדמית לרופא, אתר תדמית למרפאת שיניים, קידום אורגני לרופאים" />
        {/* סוף Metadata SEO */}
      </Helmet>
      <motion.div
        className="w-full h-full rounded-3xl relative shadow-lg bg-[#EAEAEA] px-[5vw] py-[6vh] padding-container"
        style={{
          translateY: innerDivTranslateYSpring,
          filter: blurFilter,
          willChange: 'transform, filter',
        }}
        role="region" aria-labelledby="hero-title"
      >

        <nav className="flex justify-end mb-8 gap-4">
          <a style={{ marginRight: '1.5vw', marginLeft: '1.5vw' }} href="/about" className="text-black hover:text-gray-600"></a>
        </nav>

        <div className="flex flex-col justify-end min-h-[calc(100vh-300px)] pb-12">
          <div className="flex flex-col gap-12 items-end">
            <div className="flex flex-col md:flex-row gap-8 md:gap-[2vw] items-start md:items-center w-full justify-end">
              <h1
                ref={h1Ref}
                className="text-right h1-responsive whitespace-pre-line"
                style={{
                  fontSize: h1FontSize,
                  lineHeight: `calc(1.1em + 0.5vw)`,
                  fontWeight: '900',
                  fontFamily: 'Arimo, sans-serif',
                }}
                id="hero-title"
              >
                {getTitleContent()}
              </h1>

              <div className="order-first md:order-none mb-4 md:mb-0">
                <RotatingLogo />
              </div>

              <p className="text-right md:max-w-md font-arimo mobile-paragraph"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  lineHeight: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontFamily: 'Arimo, sans-serif',
                }}
              >
                אנחנו עוזרים ללקוחות ברחבי העולם ליצור חוויות מרתקות יותר באמצעות
                השילוב המנצח בין פיתוח אתרים מתקדם לקידום דיגיטלי אפקטיבי.
              </p>
            </div>

            <div className="flex justify-end w-full">
              <RotatingCubeButton />
            </div>
          </div>
        </div>

        <div
          className="w-24 h-48 absolute"
          style={{
            bottom: 'calc(8vh + 50px)',
            right: '4vw',
            transform: 'rotateY(180deg) rotateX(180deg) rotateZ(40deg)',
          }}
        >
          <Lottie
            animationData={handshakeAnimation}
            loop={true}
            className="transition-all duration-300 hover:scale-105"
          />
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-black rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-black rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </motion.div>

      <Global
        styles={`
          .h1-responsive {
            font-size: 6vw;
            line-height: calc(1.1em + 0.5vw);
            white-space: pre-line !important;
          }

          .h1-small {
            font-size: 6vw;
            line-height: calc(1.1em + 0.5vw);
          }

          @media (max-width: 1150px) {
            .h1-responsive {
              font-size: 3vw !important;
              line-height: 1.2 !important;
            }
          }

          @media (max-width: 1016px) {
            .h1-responsive {
              font-size: 3.8vw !important;
              line-height: 1.2 !important;
            }
            .padding-container {
              padding-left: 3vw !important;
              padding-right: 3vw !important;
              padding-top: 5vh !important;
              padding-bottom: 5vh !important;
            }
            .animation-container {
              bottom: 6vh !important;
              right: 3vw !important;
            }
          }

          @media (max-width: 780px) {
            .h1-responsive {
              font-size: 4.2vw !important;
              line-height: 1.2 !important;
            }
            .mobile-paragraph {
              font-size: 1.2rem !important;
              line-height: 1.8rem !important;
            }
          }
        `}
      />
    </motion.section>
  );
};

export default Hero;