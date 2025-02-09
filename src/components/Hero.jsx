import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import handshakeAnimation from '../assets/animations/arrow.json';
import { Global } from '@emotion/react';

const RotatingLogoWithText = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const text = "אנחנו זמינים לעבודה ";
  const repeatedText = text.repeat(3);
  const textLength = repeatedText.length;
  const radius = '8vw';

  return (
    <div className="relative w-[12vw] h-[12vw] max-w-[150px] max-h-[150px] min-w-[60px] min-h-[60px]">
      <motion.img
        src="/images/Tech-Start.jpg"
        alt="Tech Start Logo"
        className="rounded-full w-full h-full object-cover"
        style={{
          rotate: `${rotation}deg`,
          willChange: 'transform',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from(repeatedText).map((char, index) => (
          <span
            key={index}
            className="absolute text-[clamp(8px,1.2vw,12px)] font-semibold text-black"
            style={{
              transform: `rotate(${index * (360 / textLength)}deg) translate(${radius}) rotate(${-index * (360 / textLength)}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

const RotatingCubeButton = () => {
  return (
    <>
      <div className="cube-wrapper group relative" style={{ width: 'clamp(100px, 10vw, 180px)', height: 'clamp(40px, 5vh, 60px)' }}>
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
            background: #1a654a;
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
  const maxHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const minHeight = 50;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const getTitleContent = () => {
    if (screenWidth < 780) {
      return (
        <>
          בניית<br />אתרים.<br />
          שיווק<br />דיגיטלי.<br />
          הצלחה<br />עסקית.
        </>
      );
    } else {
      return (
        <>
          בניית אתרים.<br />
          שיווק דיגיטלי.<br />
          הצלחה עסקית.
        </>
      );
    }
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
      className="relative min-h-screen bg-black min-w-[320px]"
      style={{
        height: heightSpring,
        scale: scaleSpring,
        willChange: 'height, transform',
      }}
    >
      <motion.div
        className="w-full h-full rounded-3xl relative shadow-lg bg-[#EAEAEA] px-[5vw] py-[8vh] padding-container"
        style={{
          translateY: innerDivTranslateYSpring,
          filter: blurFilter,
          willChange: 'transform, filter',
        }}
      >
        <nav className="flex justify-end mb-8 gap-4">
          <a style={{ marginRight: '1.5vw', marginLeft: '1.5vw' }} href="/about" className="text-black hover:text-gray-600"></a>
        </nav>

        <div className="flex flex-col justify-end min-h-[calc(100vh-200px)] pb-16">
          <div className="flex flex-col gap-12 items-end">
            <div className="flex flex-col md:flex-row gap-8 md:gap-[5vw] items-start md:items-center w-full justify-end">
              <h1 ref={h1Ref} className="text-right h1-responsive"
                style={{
                  fontSize: h1FontSize,
                  lineHeight: `calc(1.1em + 0.5vw)`,
                  fontWeight: '900',
                  fontFamily: 'Arimo, sans-serif',
                }}
              >
                {getTitleContent()}
              </h1>

              <div className="order-first md:order-none mb-4 md:mb-0">
                <RotatingLogoWithText />
              </div>

              <p className="text-right md:max-w-md font-arimo"
                style={{
                  fontSize: 'clamp(0.7rem, 2vw, 1.5rem)',
                  lineHeight: 'clamp(1.2rem, 2.5vw, 2rem)',
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
          className="w-24 h-48 absolute bottom-[4vh] right-[4vw] transform animation-container"
          style={{
            transform: 'rotateY(180deg) rotateX(180deg) rotateZ(40deg)',
          }}
        >
          <Lottie
            animationData={handshakeAnimation}
            loop={true}
            className="transition-all duration-300 hover:scale-105"
          />
        </div>
      </motion.div>

      <Global
        styles={`
          .h1-responsive {
            font-size: 6vw;
            line-height: calc(1.1em + 0.5vw);
          }

          .h1-small {
            font-size: 6vw;
            line-height: calc(1.1em + 0.5vw);
          }

          @media (max-width: 1150px) {
            .h1-responsive {
              font-size: 3.5vw !important;
              line-height: 1.2 !important;
            }
          }

          @media (max-width: 1016px) {
            .h1-responsive {
              font-size: 4.5vw !important;
              line-height: 1.2 !important;
            }
            .padding-container {
              padding-left: 3vw !important;
              padding-right: 3vw !important;
              padding-top: 5vh !important;
              padding-bottom: 5vh !important;
            }
            .animation-container {
              bottom: 3vh !important;
              right: 3vw !important;
            }
          }

          @media (max-width: 780px) {
            .h1-responsive {
              font-size: 5vw !important;
              line-height: 1.2 !important;
            }
          }
        `}
      />
    </motion.section>
  );
};

export default Hero;