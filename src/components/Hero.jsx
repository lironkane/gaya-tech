import React, { useRef, useEffect, useState, useMemo } from 'react';
import Lottie from 'lottie-react';
import { motion, useTransform, useScroll, useSpring, useMotionValue, useAnimate } from 'framer-motion';
import handshakeAnimation from '../assets/animations/arrow.json';
import { Global } from '@emotion/react';

const DotsSphere = () => {
  const sphereRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  
  const dots = useMemo(() => {
    const numberOfDots = 400;
    const sphereRadius = 200; // הגדלת רדיוס הכדור
    const points = [];
    
    for (let i = 0; i < numberOfDots; i++) {
      const phi = Math.acos(-1 + (2 * i) / numberOfDots);
      const theta = Math.sqrt(numberOfDots * Math.PI) * phi;
      
      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);
      
      points.push({
        initial: { x: x * 3, y: y * 3, z: -300 },
        target: { x, y, z },
        current: { x, y, z },
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.2,
      });
    }
    return points;
  }, []);

  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    if (!isInitialized) {
      dots.forEach(dot => {
        dot.current = { ...dot.initial };
      });
      setIsInitialized(true);
    }

    const sphere = sphereRef.current;
    if (!sphere) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let lastTime = 0;
    
    const handleMouseMove = (e) => {
      const rect = sphere.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - rect.width / 2) * 0.005;
      mouseY = (e.clientY - rect.top - rect.height / 2) * 0.005;
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const animate = (time) => {
      if (time - lastTime < 20) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;

      currentRotationX += (mouseY - currentRotationX) * 0.1;
      currentRotationY += (mouseX - currentRotationY) * 0.1;
      
      sphere.style.transform = `rotateX(${-currentRotationX * 20}deg) rotateY(${currentRotationY * 20}deg)`;

      const mousePos = mouseRef.current;
      
      dots.forEach((dot, index) => {
        const dotElement = sphere.children[index];
        if (!dotElement) return;

        if (!dot.initialized) {
          const dx = (dot.target.x - dot.current.x) * 0.08;
          const dy = (dot.target.y - dot.current.y) * 0.08;
          const dz = (dot.target.z - dot.current.z) * 0.08;
          
          dot.current.x += dx;
          dot.current.y += dy;
          dot.current.z += dz;
          
          if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1 && Math.abs(dz) < 0.1) {
            dot.initialized = true;
          }
        } else {
          const t = time * 0.001;
          dot.current.x = dot.target.x + Math.sin(t * dot.speed + dot.phase) * 1.2;
          dot.current.y = dot.target.y + Math.cos(t * dot.speed + dot.phase) * 1.2;
        }

        const rect = dotElement.getBoundingClientRect();
        const distanceToMouse = Math.hypot(
          mousePos.x - (rect.left + rect.width / 2),
          mousePos.y - (rect.top + rect.height / 2)
        );
        
        const glowIntensity = Math.max(0, 1 - distanceToMouse / 40); // הגדלת רדיוס הזוהר
        const depth = (dot.current.z + 120) / 240; // עדכון נרמול העומק
        const baseOpacity = 0.3 + depth * 0.7;
        
        const transform = `translate(-50%, -50%) translate3d(${dot.current.x}px, ${dot.current.y}px, ${dot.current.z}px)`;
        if (dotElement.style.transform !== transform) {
          dotElement.style.transform = transform;
        }
        
        if (glowIntensity > 0.1 || !dotElement.style.backgroundColor) {
          dotElement.style.backgroundColor = `rgba(0, 0, 0, ${baseOpacity + glowIntensity * 0.3})`;
          dotElement.style.width = `${1.5 + glowIntensity}px`; // הגדלת גודל הנקודות
          dotElement.style.height = `${1.5 + glowIntensity}px`;
          if (glowIntensity > 0.5) {
            dotElement.style.boxShadow = `0 0 ${glowIntensity * 2}px rgba(0,0,0,0.3)`;
          } else {
            dotElement.style.boxShadow = 'none';
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dots, isInitialized]);

  return (
    <div className="relative" style={{ 
      width: '250px',  // הגדלת אזור המיכל
      height: '250px',
      perspective: '1000px',
      position: 'absolute',
      left: 'calc(50% + 350px)',     // הזזה 100px ימינה
      top: 'calc(50% + 200px)',      // הזזה 100px למטה
      transform: 'translate(-50%, -50%)'  // הזזה למרכז המדויק
    }}>
      <div
        ref={sphereRef}
        className="w-full h-full relative transform-gpu will-change-transform"
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: '1.5px',
              height: '1.5px',
              transform: `translate(-50%, -50%) translate3d(${dot.initial.x}px, ${dot.initial.y}px, ${dot.initial.z}px)`,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          />
        ))}
      </div>
    </div>
  );
};


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
      className="relative min-h-screen bg-black min-w-[320px]"
      style={{
        height: heightSpring,
        scale: scaleSpring,
        willChange: 'height, transform',
      }}
    >
      <motion.div
        className="w-full h-full rounded-3xl relative shadow-lg bg-[#EAEAEA] px-[550vw] py-[8vh] padding-container"
        style={{
          translateY: innerDivTranslateYSpring,
          filter: blurFilter,
          willChange: 'transform, filter',
        }}
      >
        <div className="absolute left-[5vw] top-[calc(8vh+50px)]">
        <DotsSphere />
      </div>

        <nav className="flex justify-end mb-8 gap-4">
          <a style={{ marginRight: '1.5vw', marginLeft: '1.5vw' }} href="/about" className="text-black hover:text-gray-600"></a>
        </nav>

        <div className="flex flex-col justify-end min-h-[calc(100vh-200px)] pb-16">
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