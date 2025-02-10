import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import Lottie from 'lottie-react';
import arrowAnimation from '../assets/animations/arrow.json';
import { Global } from '@emotion/react';

/* --------------------------------------------------------------------------
   1) קומפוננטה פנימית: DotsSphereAnimation
   - מכילה את כל ההוקים הנוגעים לאנימציה (useMemo, useEffect וכו').
   - לעולם לא מחזירה JSX מוקדם. אם אין צורך באנימציה, לא נקרא לה בכלל.
-------------------------------------------------------------------------- */
function DotsSphereAnimation({ isMobile, isScrolling }) {
  const sphereRef = useRef(null);
  const animationFrameRef = useRef(null);

  const numberOfDots = isMobile ? 100 : 250;
  const sphereRadius = 180;

  const dots = useMemo(() => {
    const points = [];
    for (let i = 0; i < numberOfDots; i++) {
      const phi = Math.acos(-1 + (2 * i) / numberOfDots);
      const theta = Math.sqrt(numberOfDots * Math.PI) * phi;

      const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
      const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
      const z = sphereRadius * Math.cos(phi);

      points.push({
        initial: { x: x * 3, y: y * 3, z: -600 },
        target: { x, y, z },
        current: { x, y, z },
        initialized: false,
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.2,
      });
    }
    return points;
  }, [numberOfDots, sphereRadius]);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      dots.forEach((dot) => {
        dot.current = { ...dot.initial };
      });
      setIsInitialized(true);
    }
  }, [dots, isInitialized]);

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    let rotationX = 0;
    let rotationY = 0;
    let lastTime = 0;
    let reqId = null;

    function animate(time) {
      // אם גוללים – לא ממשיכים את האנימציה (לא מבצעים עדכונים),
      // אבל כן נקרא שוב ל־requestAnimationFrame כדי שלא "יתקע".
      // אם רוצים ממש להפסיק, אפשר לבטל גם את הקריאה החוזרת.
      if (isScrolling) {
        reqId = requestAnimationFrame(animate);
        return;
      }

      // להגבלת קצב עד ~30FPS
      if (time - lastTime < 30) {
        reqId = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;

      // סיבוב הכדור
      rotationX += 0.05;
      rotationY += 0.08;
      sphere.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

      // עדכון מיקום כל נקודה
      dots.forEach((dot, index) => {
        const dotElement = sphere.children[index];
        if (!dotElement) return;

        if (!dot.initialized) {
          const dx = (dot.target.x - dot.current.x) * 0.1;
          const dy = (dot.target.y - dot.current.y) * 0.1;
          const dz = (dot.target.z - dot.current.z) * 0.1;

          dot.current.x += dx;
          dot.current.y += dy;
          dot.current.z += dz;

          if (
            Math.abs(dx) < 0.2 &&
            Math.abs(dy) < 0.2 &&
            Math.abs(dz) < 0.2
          ) {
            dot.initialized = true;
          }
        } else {
          // ריחוף קל
          const t = time * 0.001;
          dot.current.x = dot.target.x + Math.sin(t * dot.speed + dot.phase) * 1;
          dot.current.y = dot.target.y + Math.cos(t * dot.speed + dot.phase) * 1;
        }

        dotElement.style.transform = `translate(-50%, -50%) translate3d(${dot.current.x}px, ${dot.current.y}px, ${dot.current.z}px)`;
      });

      // מפעילים שוב
      reqId = requestAnimationFrame(animate);
    }

    // מפעילים את האנימציה
    reqId = requestAnimationFrame(animate);

    return () => {
      if (reqId) {
        cancelAnimationFrame(reqId);
      }
    };
  }, [dots, isInitialized, isScrolling]);

  return (
    <div
      className="relative"
      style={{
        width: '300px',
        height: '300px',
        perspective: '1000px',
        position: 'relative',
        left: '100px',
        top: '100px',
      }}
    >
      <div
        ref={sphereRef}
        className="w-full h-full relative transform-gpu will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              transform: `translate(-50%, -50%) translate3d(${dot.initial.x}px, ${dot.initial.y}px, ${dot.initial.z}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
   2) קומפוננטה חיצונית: DotsSphere
   - מכילה רק לוגיקה פשוטה: אם (!isInView || prefersReducedMotion) => מציגה "גרסה סטטית" במקום האנימציה
   - כך אנחנו לא "מדלגים" על Hooks. ה-DotsSphereAnimation לא נוצר בכלל אם אין צורך באנימציה.
-------------------------------------------------------------------------- */
function DotsSphere({ isInView, prefersReducedMotion, isMobile, isScrolling }) {
  // אם איננו רוצים להפעיל אנימציה, נחזיר אלמנט סטטי:
  if (!isInView || prefersReducedMotion) {
    return (
      <div
        style={{
          width: '300px',
          height: '300px',
          position: 'relative',
          left: '100px',
          top: '100px',
        }}
      >
        {/* אפשר כאן לשים משהו סטטי (תמונה) או כלום */}
      </div>
    );
  }

  // אם רוצים אנימציה, מחזירים את הקומפוננטה
  return <DotsSphereAnimation isMobile={isMobile} isScrolling={isScrolling} />;
}

/* --------------------------------------------------------------------------
   Component: RotatingLogo
-------------------------------------------------------------------------- */
const RotatingLogo = () => {
  const [rotation] = useState(0);

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

/* --------------------------------------------------------------------------
   Component: RotatingCubeButton
-------------------------------------------------------------------------- */
const RotatingCubeButton = () => {
  return (
    <>
      <div
        className="cube-wrapper group relative"
        style={{
          width: 'clamp(100px, 10vw, 180px)',
          height: 'clamp(40px, 5vh, 60px)',
          marginRight: '50px',
          transform: 'translateX(50px)',
        }}
      >
        <a
          href="/contact"
          className="absolute inset-0 z-20 cursor-pointer"
          aria-label="Contact us"
        />
        <div className="cube">
          <div
            className="cube-face front"
            style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}
          >
            בואו נדבר
          </div>
          <div
            className="cube-face back"
            style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}
          >
            בואו נדבר
          </div>
          <div
            className="cube-face top"
            style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}
          >
            בואו נדבר
          </div>
          <div
            className="cube-face bottom"
            style={{ fontSize: 'clamp(14px, 1.5vw, 20px)' }}
          >
            בואו נדבר
          </div>
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

/* --------------------------------------------------------------------------
   Main Component: Hero
   כולל:
   - IntersectionObserver לזיהוי כניסה/יציאה מהמסך (isInView)
   - זיהוי prefersReducedMotion
   - זיהוי מובייל (userAgent)
   - אנימציות Framer Motion (גובה, סקייל, בלור)
   - שימוש ב-DotsSphere עם הפרדת DotsSphereAnimation
-------------------------------------------------------------------------- */
export default function Hero() {
  const heroRef = useRef(null);

  // הגדרות ראשוניות...
  const maxHeight =
    typeof window !== 'undefined' ? window.innerHeight : 800;
  const minHeight = 50;

  // useState וכדומה...
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // מוסיפים state חדש: האם גוללים כעת?
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer = null;

    const handleScroll = () => {
      setIsScrolling(true); 
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      // נמתין 150 מילישניות אחרי שהמשתמש הפסיק לגלול – אז נניח שלא גוללים
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  /* -----------------------------
     prefers-reduced-motion
  ----------------------------- */
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = () => {
        setPrefersReducedMotion(mediaQuery.matches);
      };
      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  /* -----------------------------
     זיהוי מובייל (פשוט)
  ----------------------------- */
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = /Mobi|Android/i.test(navigator.userAgent);
      setIsMobile(checkMobile);
    }
  }, []);

  /* -----------------------------
     Intersection Observer
  ----------------------------- */
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current) {
            setIsInView(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      observer.disconnect();
    };
  }, []);

  /* -----------------------------
     Framer Motion Hooks
  ----------------------------- */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // פונקציה שחוזרת על טקסט הכותרת
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

  // שליטה בגודל הטקסט בכותרת
  const [h1FontSize, setH1FontSize] = useState('6vw');
  const h1Ref = useRef(null);
  const MAX_LINES = 3;

  useEffect(() => {
    const calculateH1FontSize = () => {
      if (!h1Ref.current) return;

      let fontSize = 6;
      h1Ref.current.style.fontSize = `${fontSize}vw`;
      h1Ref.current.style.lineHeight = `calc(1.1em + 0.5vw)`;
      h1Ref.current.style.whiteSpace = 'pre-line';

      while (
        h1Ref.current.scrollHeight > h1Ref.current.offsetHeight &&
        fontSize > 1
      ) {
        fontSize -= 0.1;
        h1Ref.current.style.fontSize = `${fontSize}vw`;
        h1Ref.current.style.lineHeight = `calc(1.1em + 0.5vw)`;
      }

      const computedLineHeight = parseFloat(
        window.getComputedStyle(h1Ref.current).lineHeight
      );
      const numLines = h1Ref.current.scrollHeight / computedLineHeight;

      while (numLines > MAX_LINES && fontSize > 1) {
        fontSize -= 0.1;
        h1Ref.current.style.fontSize = `${fontSize}vw`;
        h1Ref.current.style.lineHeight = `calc(1.1em + 0.5vw)`;

        const updatedNumLines =
          h1Ref.current.scrollHeight / computedLineHeight;
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

  // אנימציות גובה, סקייל, בלור
  const heightValue = useTransform(scrollYProgress, [0, 1], [maxHeight, minHeight]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const blurValueNumeric = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 0, 8, 16]);

  const heightSpring = useSpring(heightValue, { stiffness: 50, damping: 25 });
  const scaleSpring = useSpring(scaleValue, { stiffness: 80, damping: 30 });
  const blurSpring = useSpring(blurValueNumeric, { stiffness: 80, damping: 30 });
  const blurFilter = useTransform(blurSpring, (v) => `blur(${v}px)`);

  const innerDivTranslateY = useTransform(scrollYProgress, [0, 1], [0, maxHeight * 0.8]);
  const innerDivTranslateYSpring = useSpring(innerDivTranslateY, {
    stiffness: 80,
    damping: 30,
  });

  // אם יש Reduce Motion, נבטל/נצמצם את האנימציות
  const finalHeight = prefersReducedMotion ? '100vh' : heightSpring;
  const finalScale = prefersReducedMotion ? 1 : scaleSpring;
  const finalFilter = prefersReducedMotion ? 'none' : blurFilter;
  const finalTranslateY = prefersReducedMotion ? 0 : innerDivTranslateYSpring;

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 1 }}
      className="relative min-h-screen bg-black min-w-[320px]"
      style={{
        height: finalHeight,
        scale: finalScale,
        willChange: 'height, transform',
      }}
    >
      <motion.div
        className="w-full h-full rounded-3xl relative shadow-lg bg-[#EAEAEA] px-[550vw] py-[8vh] padding-container"
        style={{
          translateY: finalTranslateY,
          filter: finalFilter,
          willChange: 'transform, filter',
        }}
      >
        {/* עוברים prop של isScrolling למטה */}
        <div className="absolute left-[5vw] top-[calc(8vh+50px)]">
          <DotsSphere 
            isInView={isInView}
            prefersReducedMotion={prefersReducedMotion}
            isMobile={isMobile}
            isScrolling={isScrolling} // <--- מעביר כאן
          />
        </div>

        {/* ניווט ראשוני (כרגע ריק) */}
        <nav className="flex justify-end mb-8 gap-4">
          <a
            style={{ marginRight: '1.5vw', marginLeft: '1.5vw' }}
            href="/about"
            className="text-black hover:text-gray-600"
          >
            {/* אפשר טקסט / אייקון */}
          </a>
        </nav>

        {/* תוכן מרכזי */}
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

              {/* לוגו מסתובב */}
              <div className="order-first md:order-none mb-4 md:mb-0">
                <RotatingLogo />
              </div>

              {/* טקסט תיאור קצר */}
              <p
                className="text-right md:max-w-md font-arimo mobile-paragraph"
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

            {/* כפתור קובייה מסתובבת */}
            <div className="flex justify-end w-full">
              <RotatingCubeButton />
            </div>
          </div>
        </div>

        {/* אנימציית Lottie */}
        <div
          className="w-24 h-48 absolute"
          style={{
            bottom: 'calc(8vh + 20px)',
            right: '-6vw',
            transform: 'rotateY(180deg) rotateX(180deg) rotateZ(40deg)',
          }}
        >
          <Lottie
            animationData={arrowAnimation}
            loop={true}
            className="transition-all duration-300 hover:scale-105"
          />
        </div>
      </motion.div>

      {/* CSS גלובלי המתייחס ל-H1 ולרספונסיביות */}
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
}