import React, { useEffect, useState, useRef } from 'react';
import {
  ClipboardList,
  Lightbulb,
  Rocket,
  Settings,
  Target,
  Flag,
  CircleDot,
} from 'lucide-react';

const Timeline = ({ isVisible }) => {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);

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
        rootMargin: '-20% 0px -20% 0px',
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
    <section
      className="py-24 relative overflow-hidden bg-[#FFF8F0]"
      id="process"
      ref={timelineRef}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,74,54,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(18,74,54,0.05)_2px,transparent_2px)]
        bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]">
      </div>

      <div className="text-center mb-20 relative z-10">
        <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <h2 className="relative font-secular inline-block mb-6">
            <span className="block text-7xl font-bold text-[#124A36]">
              תהליך העבודה שלנו
            </span>
            <div
              className="h-1.5 w-full bg-[#124A36] mt-4 rounded-full
              animate-pulse shadow-lg shadow-[#124A36]/20"
            ></div>
          </h2>
          <p className="text-5xl font-amatic text-[#124A36]/80 mt-6 font-medium">
            הדרך שלך להצלחה דיגיטלית
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-1 transform -translate-x-1/2 bg-[#124A36]/20 rounded-full h-full">
          {/* Animated Progress */}
          <div
            className="absolute top-0 left-0 right-0 bg-[#124A36] rounded-full transition-all duration-1000"
            style={{
              height: `${((activeStep + 1) / (stepsData.length + 1)) * 100}%`,
              boxShadow: '0 0 20px rgba(18,74,54,0.3)',
            }}
          />
        </div>

        {/* Starting Point */}
        <div
          className="flex items-center justify-center mb-6 timeline-step"
          data-step="start"
        >
          <div
            className="w-10 h-10 bg-[#FFF8F0] rounded-full flex items-center justify-center
            relative z-10 shadow-md border-2 border-[#124A36]"
          >
            <Flag className="w-6 h-6 text-[#124A36]" />
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className={`timeline-step mb-16 flex items-start ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
              data-step={index}
            >
              {/* Timeline Node */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#FFF8F0] border-2 border-[#F5E6D3]
                    transition-all duration-500
                    ${activeStep === index ? 'scale-100' : 'scale-75'}
                    shadow-md z-10 relative
                  `}
              >
                <step.icon
                  className={`w-6 h-6 ${
                    activeStep === index
                      ? 'text-[#124A36] animate-pulse'
                      : 'text-[#124A36]/70'
                  }`}
                />
              </div>

              {/* Content Box */}
              <div
                className={`
                    p-4 rounded-2xl bg-[#FFF8F0] backdrop-blur-sm shadow-md transition-all duration-500 group
                    border border-[#F5E6D3] flex-1
                    ${index % 2 === 0 ? 'ml-6' : 'mr-6'}
                    ${
                      activeStep === index
                        ? 'ring-2 ring-[#124A36]/30 shadow-[#124A36]/20 scale-105'
                        : ''
                    }
                    hover:shadow-[#124A36]/20 hover:scale-105
                  `}
              >
                <h3 className="text-lg font-secular font-bold text-[#124A36] mb-2 group-hover:text-[#124A36]/80 transition duration-300 text-right">
                  {step.title}
                </h3>
                <p
                  className="text-sm font-secular text-gray-700 mb-3 text-right"
                  dir="rtl"
                >
                  {step.description}
                </p>

                <ul className="space-y-1 text-xs list-none">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex font-secular items-center gap-2 text-right"
                      dir="rtl"
                    >
                      <div className="w-2 h-1 bg-[#124A36] rounded-full"></div>
                      <span className="text-gray-600 font-medium">
                        {detail.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* End Point */}
        <div className="flex items-center justify-center mt-4">
          <div
            className="w-8 h-8 bg-[#124A36] rounded-full flex items-center justify-center relative z-10
              animate-pulse"
          >
            <div className="w-6 h-6 bg-[#FFF8F0] rounded-full flex items-center justify-center">
              <CircleDot className="w-4 h-4 text-[#124A36]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;