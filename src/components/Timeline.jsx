import React, { useEffect, useState, useRef } from 'react';
import {
  ClipboardList,
  Lightbulb,
  Rocket,
  Settings,
  Target,
  Flag,
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);
  const maxHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const minHeight = maxHeight * 0.7;

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["0.3 0.9", "1.2 0.5"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.001
  });

  const scale = useTransform(smoothProgress, [0.3, 0.8, 1], [1, 1, 0.95]);
  const innerDivTranslateY = useTransform(smoothProgress, [0.3, 0.8, 1], [0, 0, maxHeight * 0.1]);
  const blurValue = useTransform(smoothProgress, 
    [0.3, 0.7, 0.9, 1], 
    ['blur(0px)', 'blur(0px)', 'blur(2px)', 'blur(4px)']
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(
              entry.target.getAttribute('data-step'),
              10
            );
            setActiveStep(stepIndex);
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

    return () => {
      observer.disconnect();
    };
  }, []);

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

  return (
    <motion.section
      ref={timelineRef}
      className="relative pt-5 pb-48 px-3 bg-black min-h-screen"
      initial={{ opacity: 1 }}
      style={{
        scale
      }}
    >
      <motion.div
        className="w-full h-full rounded-3xl relative shadow-lg bg-gradient-to-br from-[#EAEAEA] to-[#F5E6D3] p-8"
        style={{
          translateY: innerDivTranslateY,
          filter: blurValue,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col">
          <motion.div 
            className="text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="relative font-arimo inline-block mb-6">
              <span className="block text-6xl font-bold text-[#124A36]">
                תהליך העבודה שלנו
              </span>
              <div className="h-1.5 w-full bg-[#124A36] mt-4 rounded-full animate-pulse shadow-lg shadow-[#124A36]/20"></div>
            </h2>
            <p className="text-4xl font-arimo text-[#124A36]/80 mt-6 font-medium">
              הדרך שלך להצלחה דיגיטלית
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 h-[95%] w-1 transform -translate-x-1/2 bg-gradient-to-b from-[#124A36]/10 via-[#124A36]/20 to-[#124A36]/10 rounded-full">
              {/* Animated Progress */}
              <motion.div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#124A36] to-[#1a654a] rounded-full"
                initial={{ height: "0%" }}
                animate={{ 
                  height: `${Math.min(((activeStep + 1) / stepsData.length) * 105, 100)}%`
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.1
                }}
                style={{
                  boxShadow: '0 0 20px rgba(18,74,54,0.3)',
                }}
              />
            </div>

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
              <div className="w-10 h-10 bg-[#FFF8F0] rounded-full flex items-center justify-center relative z-10 shadow-md border-2 border-[#124A36]">
                <Flag className="w-6 h-6 text-[#124A36]" />
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
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
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
                          ? 'text-[#124A36] animate-pulse'
                          : 'text-[#124A36]/70'
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
                            ? 'ring-2 ring-[#124A36]/30 shadow-[#124A36]/20 scale-105'
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
                    <h3 className="text-xl font-arimo font-bold text-[#124A36] mb-3 group-hover:text-[#124A36]/80 transition duration-300 text-right">
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
                          <div className="w-2 h-2 bg-[#124A36] rounded-full"></div>
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