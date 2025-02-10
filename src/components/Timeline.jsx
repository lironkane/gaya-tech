import React, { useState, useRef, useEffect } from 'react';
import {
  ClipboardList,
  Lightbulb,
  Rocket,
  Settings,
  Target,
  Flag,
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import timelineBackground from '../assets/background/timeline-background.jpg';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);
  const maxHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const minHeight = maxHeight * 0.7;

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"]
  });

    const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

  const scale = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0.95]);
  const innerDivTranslateY = useTransform(smoothProgress, [0, 0.8, 1], [0, 0, maxHeight * 0.1]);

  // Blur עליון
  const topBlurValue = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['blur(5px)', 'blur(0px)']
  );

  // Blur תחתון
  const bottomBlurValue = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ['blur(0px)', 'blur(0px)', 'blur(5px)']
  );

  // שילוב ה-blur
  const combinedBlurValue = useTransform(
    [topBlurValue, bottomBlurValue],
    ([top, bottom]) => `blur(${Math.max(parseFloat(top), parseFloat(bottom))}px)`
  );

    // נתוני השלבים (לפני השימוש בהם)
    const stepsData = [
      {
        icon: ClipboardList,
        title: 'פגישת היכרות ואפיון',
        description:
          'נבין את הצרכים והמטרות שלך, נגדיר יעדים ונבנה תכנית פעולה מותאמת אישית',
        details: [
          { text: 'הבנת צרכי העסק' },
          { text: 'הגדרת קהל יעד' },
          { text: 'ניתוח מתחרים' },
        ],
      },
      {
        icon: Lightbulb,
        title: 'תכנון ואסטרטגיה',
        description:
          'נעצב את חווית המשתמש ונתכנן את המבנה והפונקציונליות של האתר',
        details: [
          { text: 'עיצוב חווית משתמש' },
          { text: 'בחירת טכנולוגיות' },
          { text: 'תכנון מפורט' },
        ],
      },
      {
        icon: Settings,
        title: 'פיתוח ועיצוב',
        description:
          'נפתח את האתר תוך שימוש בטכנולוגיות המתקדמות ביותר ונעצב ממשק משתמש מרהיב',
        details: [
          { text: 'פיתוח האתר' },
          { text: 'עיצוב UI מודרני' },
          { text: 'בדיקות ואופטימיזציה' },
        ],
      },
      {
        icon: Target,
        title: 'קידום והטמעה',
        description:
          'נטמיע את האתר, נבצע אופטימיזציה לקידום ונוודא שהכל עובד בצורה מושלמת',
        details: [
          { text: 'SEO אופטימיזציה' },
          { text: 'העלאה לאוויר' },
          { text: 'בדיקות ביצועים' },
        ],
      },
      {
        icon: Rocket,
        title: 'השקה וצמיחה',
        description: 'נשיק את האתר ונתחיל בתהליך הקידום והצמיחה המתמשך',
        details: [
          { text: 'השקת האתר' },
          { text: 'ניטור ביצועים' },
          { text: 'התאמות ושיפורים' },
        ],
      },
    ];

  // אנימציית הקו האנכי (SVG)
    const lineLength = (stepsData.length) * 220; // אורך משוער, צריך להתאים

    const dashOffset = useTransform(
      smoothProgress,
      [0, 1],
      [lineLength, 0]
    );


    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const stepIndex = parseInt(entry.target.getAttribute('data-step'), 10);
              if (!isNaN(stepIndex)) {
                setActiveStep(stepIndex);
              }
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-10% 0px -40% 0px',
        }
      );

      const stepsEls = document.querySelectorAll('.timeline-step');
      stepsEls.forEach((step) => {
        observer.observe(step);
      });

      return () => observer.disconnect();
    }, [activeStep]);


  return (
    <motion.section
      ref={timelineRef}
      className="relative pt-5 pb-1 px-3 bg-black min-h-screen"
      initial={{ opacity: 1 }}
      style={{
        scale
      }}
    >
      <motion.div
        className="w-full h-full rounded-3xl relative shadow-lg p-8"
        style={{
          translateY: innerDivTranslateY,
          filter: combinedBlurValue,

        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 z-0" style={{
            backgroundImage: `url(${timelineBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotate(180deg)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backgroundBlendMode: 'screen',
            borderRadius: 'inherit',
        }}>
        </div>
        <div className="absolute inset-0 bg-white/80 z-1 rounded-3xl"></div>

        <div className="relative z-10">
          {/*  אנימציית הכותרת */}
          <motion.div
            className="text-center mb-16 relative z-10"
            style={{ position: 'relative' }}
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1,
            }}
          >
            <h2 className="relative font-arimo inline-block mb-6">
              <motion.span
                  className="block text-6xl font-bold text-black"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                >
                תהליך העבודה שלנו
              </motion.span>
              <motion.div
                className="h-1.5 w-full bg-black mt-4 rounded-full animate-pulse shadow-lg shadow-black/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
                />
            </h2>
            <motion.p
              className="text-4xl font-arimo text-black/80 mt-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}

            >
              הדרך שלך להצלחה דיגיטלית
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* SVG Line */}
            <svg className="absolute left-1/2 top-0 h-[95%] w-1 transform -translate-x-1/2"
                viewBox={`0 0 2 ${lineLength}`} //  חשוב: viewBox
                preserveAspectRatio="none" //  חשוב:  למתיחה נכונה
            >
                <motion.line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2={lineLength}
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray={lineLength} //  כל אורך הקו
                  style={{ strokeDashoffset: dashOffset }} // אנימציה!
                />
              </svg>

            {/* Starting Point */}
           <motion.div
               className="flex items-center justify-center mb-6 timeline-step"
               data-step="start"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{
                 duration: 0.5,
                 type: "spring",
                 stiffness: 100,
                 damping: 20
               }}
             >
               <div className="w-10 h-10 bg-[#FFF8F0] rounded-full flex items-center justify-center relative z-10 shadow-md border-2 border-black">
                 <Flag className="w-6 h-6 text-black" />
               </div>
             </motion.div>

            {/* Steps */}
            <div className="relative">
              {stepsData.map((step, index) => (
                <motion.div
                  key={index}
                  className={`timeline-step mb-16 flex items-start ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                  data-step={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{once: true}}
                  >
                  {/* Timeline Node */}
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#FFF8F0] border-2 border-[#F5E6D3]
                        transition-all duration-500
                        ${activeStep === index ? 'scale-100' : 'scale-75'}
                        shadow-md z-10 relative
                      `}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                    >
                    <step.icon
                      className={`w-6 h-6 ${
                        activeStep === index
                          ? 'text-black animate-pulse'
                          : 'text-black/70'
                      }`}
                    />
                  </motion.div>

                  {/* Content Box */}
                  <motion.div
                    className={`
                        p-6 rounded-2xl bg-white shadow-lg transition-all duration-500 group
                        border border-[#F5E6D3] flex-1
                        ${index % 2 === 0 ? 'ml-6' : 'mr-6'}
                        ${
                          activeStep === index
                            ? 'ring-2 ring-black/30 shadow-black/20 scale-105'
                            : ''
                        }
                        hover:shadow-xl
                      `}
                    whileHover={{
                      scale: 1.02,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                  >
                    <h3 className="text-xl font-arimo font-bold text-black mb-3 group-hover:text-black/80 transition duration-300 text-right">
                      {step.title}
                    </h3>
                    <p className="text-base font-arimo text-gray-700 mb-4 text-right" dir="rtl">
                      {step.description}
                    </p>

                    <ul className="space-y-2 text-sm list-none">
                      {step.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="flex font-arimo items-center gap-3 text-right bg-black/5 rounded-lg px-4 py-2 hover:bg-black/10 transition-colors duration-300"
                          dir="rtl"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: i * 0.1
                          }}
                        >
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          <span className="text-gray-700 font-medium">{detail.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Timeline;