import React, { useEffect, useState, useRef } from 'react';
import {
  ClipboardList,
  Lightbulb,
  Rocket,
  Settings,
  Target,
  Flag,
  CircleDot
} from 'lucide-react';

const Timeline = ({ isVisible }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const timelineRef = useRef(null);

  useEffect(() => {
    const observers = [];
    const stepsEls = document.querySelectorAll('.timeline-step');

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepIndex = parseInt(entry.target.getAttribute('data-step'), 10);
          setVisibleSteps(prev => new Set([...prev, stepIndex]));
          setActiveStep(stepIndex);
        }
      });
    };

    stepsEls.forEach((step) => {
      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      });
      observer.observe(step);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const stepsData = [
    {
      icon: ClipboardList,
      title: 'פגישת היכרות ואפיון',
      description: 'נבין את הצרכים והמטרות שלך, נגדיר יעדים ונבנה תכנית פעולה מותאמת אישית',
      details: [
        { text: 'הבנת צרכי העסק' },
        { text: 'הגדרת קהל יעד' },
        { text: 'ניתוח מתחרים' }
      ],
      position: 'left',
      bgImage: '/images/meeting.jpg'
    },
    {
      icon: Lightbulb,
      title: 'תכנון ואסטרטגיה',
      description: 'נעצב את חווית המשתמש ונתכנן את המבנה והפונקציונליות של האתר',
      details: [
        { text: 'עיצוב חווית משתמש' },
        { text: 'בחירת טכנולוגיות' },
        { text: 'תכנון מפורט' }
      ],
      position: 'right',
      bgImage: '/images/lightbulb.jpg'
    },
    {
      icon: Settings,
      title: 'פיתוח ועיצוב',
      description: 'נפתח את האתר תוך שימוש בטכנולוגיות המתקדמות ביותר ונעצב ממשק משתמש מרהיב',
      details: [
        { text: 'פיתוח האתר' },
        { text: 'עיצוב UI מודרני' },
        { text: 'בדיקות ואופטימיזציה' }
      ],
      position: 'left',
      bgImage: '/images/strategy.jpg'
    },
    {
      icon: Target,
      title: 'קידום והטמעה',
      description: 'נטמיע את האתר, נבצע אופטימיזציה לקידום ונוודא שהכל עובד בצורה מושלמת',
      details: [
        { text: 'SEO אופטימיזציה' },
        { text: 'העלאה לאוויר' },
        { text: 'בדיקות ביצועים' }
      ],
      position: 'right',
      bgImage: '/images/promote.jpg'
    },
    {
      icon: Rocket,
      title: 'השקה וצמיחה',
      description: 'נשיק את האתר ונתחיל בתהליך הקידום והצמיחה המתמשך',
      details: [
        { text: 'השקת האתר' },
        { text: 'ניטור ביצועים' },
        { text: 'התאמות ושיפורים' }
      ],
      position: 'left',
      bgImage: '/images/rocket.jpg'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FFF8F0]" id="process" ref={timelineRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,74,54,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(18,74,54,0.05)_2px,transparent_2px)]
          bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-20 relative z-10">
        <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <h2 className="relative font-secular inline-block mb-6">
            <span className="block text-7xl font-bold text-[#124A36]">
              תהליך העבודה שלנו
            </span>
            <div className="h-1.5 w-full bg-[#124A36] mt-4 rounded-full
              animate-pulse shadow-lg shadow-[#124A36]/20"></div>
          </h2>
          <p className="text-5xl font-secular text-[#124A36]/80 mt-6 font-medium">
            הדרך שלך להצלחה דיגיטלית
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Starting Point */}
        <div className="flex items-center justify-center mb-16 timeline-step" data-step="start">
          <div className="w-20 h-20 bg-[#FFF8F0] rounded-full flex items-center justify-center
            relative z-10 shadow-xl border-4 border-[#124A36]">
            <div className="w-16 h-16 bg-[#124A36] rounded-full flex items-center justify-center">
              <Flag className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Center Line */}
        <div
          className="absolute left-1/2 top-[88px] w-2 transform -translate-x-1/2 bg-[#124A36]/10 rounded-full"
          style={{
            height: 'calc(100% - 93px)'
          }}
        >
          {/* Animated Progress */}
          <div
            className="absolute top-0 left-0 right-0 bg-[#124A36] rounded-full transition-all duration-1000"
            style={{
              height: `${((activeStep + 1) / stepsData.length) * 100}%`,
              boxShadow: '0 0 20px rgba(18,74,54,0.3)'
            }}
          />
        </div>

        {/* Steps */}
        <div className="relative">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className={`timeline-step flex items-center mb-24
                ${step.position === 'left' ? 'flex-row-reverse mr-timeline' : 'ml-timeline'}`}
              data-step={index}
            >
              {/* Image Container */}
              <div
                className={`w-1/2
                  ${step.position === 'left' ? 'pl-20' : 'pr-20'}
                  transition-all duration-500
                  ${visibleSteps.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div
                  className="group w-full max-w-sm aspect-square shadow-2xl rounded-lg overflow-hidden
                    relative hover:shadow-[#124A36]/20 transition duration-500"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: step.bgImage ? `url(${step.bgImage})` : 'none',
                    }}
                  ></div>

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#124A36]/80 via-[#124A36]/50 to-transparent
                    transition duration-500 ${visibleSteps.has(index) ? 'opacity-100' : 'opacity-0'}`}
                  ></div>

                  {/* Frame */}
                  <div className={`absolute inset-2 transition duration-500
                      ${visibleSteps.has(index) ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full h-full border-4 border-white/50 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="w-32 flex justify-center relative z-10">
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center bg-[#FFF8F0] border border-[#F5E6D3]
                    transition-all duration-500
                    ${visibleSteps.has(index) ? 'scale-100' : 'scale-0'}
                    ${activeStep === index ? 'shadow-lg shadow-[#124A36]/20' : 'shadow-md'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <step.icon
                    className={`w-6 h-6 ${activeStep === index ? 'text-[#124A36] animate-pulse' : 'text-[#124A36]/70'}`}
                  />
                </div>
              </div>

              {/* Content Box */}
              <div
                className={`w-1/2
                  ${step.position === 'left' ? 'pr-20' : 'pl-20'}
                  transition-all duration-500
                  ${visibleSteps.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div
                  className={`
                    p-6 rounded-2xl bg-[#FFF8F0] backdrop-blur-sm shadow-xl transition-all duration-500 group
                    border border-[#F5E6D3]
                    ${activeStep === index ? 'ring-2 ring-[#124A36]/30 shadow-[#124A36]/20 scale-105' : ''}
                    hover:shadow-[#124A36]/20 hover:scale-105
                  `}
                >
                  <h3 className="text-xl font-secular font-bold text-[#124A36] mb-3 group-hover:text-[#124A36]/80 transition duration-300 text-right">
                    {step.title}
                  </h3>
                  <p className="text-base font-secular text-gray-700 mb-4 text-right" dir="rtl">
                    {step.description}
                  </p>

                  <ul className="space-y-2 text-sm">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex font-secular items-center gap-2 text-right" dir="rtl">
                        <div className="w-2.5 h-1.5 bg-[#124A36] rounded-full"></div>
                        <span className="text-gray-600 font-medium">
                          {detail.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End Point */}
        <div className="flex items-center justify-center relative">
          <div
            className="w-8 h-8 bg-[#124A36] rounded-full flex items-center justify-center relative z-10
              transform -translate-y-1/2 animate-pulse"
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