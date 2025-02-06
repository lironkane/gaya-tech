import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import { motion, useTransform, useScroll } from 'framer-motion';
import handshakeAnimation from '../assets/animations/arrow.json';
import { Global } from '@emotion/react'; // ייבוא Global

const RotatingCubeButton = () => {
  return (
    <div className="cube-wrapper group relative">
      <a href="/contact" className="absolute inset-0 z-20 cursor-pointer" aria-label="Contact us" />
      <div className="cube">
        <div className="cube-face front">בואו נדבר</div>
        <div className="cube-face back">בואו נדבר</div>
        <div className="cube-face top">בואו נדבר</div>
        <div className="cube-face bottom">בואו נדבר</div>
      </div>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const maxHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const minHeight = 50;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [maxHeight, minHeight]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const innerDivTranslateY = useTransform(scrollYProgress, [0, 1], [0, maxHeight * 0.8]);

  // Modified blur transform with stronger values
  const blurValue = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], ['blur(0px)', 'blur(0px)', 'blur(8px)', 'blur(16px)']);

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 1 }}
      className="relative p-3 min-h-screen bg-black"
      style={{
        height,
        scale,
      }}
    >
      <motion.div
        className="w-full h-full rounded-3xl relative shadow-lg bg-[#EAEAEA] p-8"
        style={{
          translateY: innerDivTranslateY,
          filter: blurValue,
        }}
      >
        <nav className="flex justify-end mb-8 gap-4">
          <a href="/about" className="text-black hover:text-gray-600"></a>
        </nav>

        <div className="flex flex-col justify-end min-h-[calc(100vh-200px)] pb-16">
          <div className="flex flex-col gap-12 items-end">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end w-full justify-end">
              <h1 className="text-4xl md:text-6xl font-black leading-tight font-arimo text-right whitespace-pre-line">
                בניית אתרים.{'\n'}
                שיווק דיגיטלי.{'\n'}
                הצלחה עסקית.
              </h1>
              <p className="text-lg md:text-xl text-right md:max-w-md font-arimo">
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
          className="w-24 h-48 absolute bottom-16 right-4 transform"
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

      {/* שימוש ב-Global של Emotion */}
      <Global
        styles={`
          .cube-wrapper {
            perspective: 1000px;
            width: 120px;
            height: 45px;
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
            font-size: 18px;
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

          .front { transform: translateZ(22.5px); }
          .back { transform: rotateX(180deg) translateZ(22.5px); }
          .right { transform: rotateY(90deg) translateZ(60px) scaleX(-1); }
          .left { transform: rotateY(-90deg) translateZ(60px) scaleX(-1); }
          .top { transform: rotateX(90deg) translateZ(22.5px); }
          .bottom { transform: rotateX(-90deg) translateZ(22.5px); }

          @keyframes rotateX {
            0% { transform: rotateX(0deg); }
            100% { transform: rotateX(-360deg); }
          }

          @media (max-width: 640px) {
            .cube-wrapper {
              width: 100px;
              height: 40px;
            }

            .cube-face {
              font-size: 16px;
            }

            .front { transform: translateZ(20px); }
            .back { transform: translateZ(-20px) rotateX(180deg); }
            .right { transform: rotateY(90deg) translateZ(50px) scaleX(-1); }
            .left { transform: rotateY(-90deg) translateZ(50px) scaleX(-1); }
            .top { transform: rotateX(90deg) translateZ(20px); }
            .bottom { transform: rotateX(-90deg) translateZ(20px); }
          }
        `}
      />
    </motion.section>
  );
};

export default Hero;