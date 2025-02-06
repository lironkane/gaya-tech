import React, { useState, useEffect } from 'react';
import { Code, Globe, LineChart } from 'lucide-react';

const ServicesShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: Code,
      title: "פיתוח אתרים",
      description: "אנו מתמחים בבניית אתרים מותאמים אישית, המשלבים טכנולוגיות מתקדמות עם עיצוב מודרני",
      features: [
        "פיתוח Full-Stack מקצועי",
        "עיצוב UI/UX חדשני ומושך",
        "אתרים מהירים ומאובטחים",
        "אופטימיזציה למנועי חיפוש",
        "תמיכה טכנית מתמשכת"
      ],
      bgGradient: "from-gray-800/50 to-gray-900/50"
    },
    {
      icon: Globe,
      title: "קידום אורגני",
      description: "אנחנו מספקים שירותי SEO מקיפים שיעזרו לעסק שלך להגיע לדירוג גבוה יותר בתוצאות החיפוש",
      features: [
        "מחקר מילות מפתח מעמיק",
        "אופטימיזציית תוכן מקצועית",
        "בניית קישורים איכותיים",
        "מעקב וניתוח ביצועים",
        "דוחות חודשיים מפורטים"
      ],
      bgGradient: "from-gray-800/50 to-gray-900/50"
    },
    {
      icon: LineChart,
      title: "קידום ממומן",
      description: "ניהול קמפיינים ממומנים בגוגל אדס שיביאו לכם לקוחות איכותיים",
      features: [
        "ניהול קמפיינים מקצועי",
        "התאמה מדויקת לקהל היעד",
        "מעקב אחר המרות ותוצאות",
        "אופטימיזציה מתמדת",
        "שקיפות מלאה בתוצאות"
      ],
      bgGradient: "from-gray-800/50 to-gray-900/50"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden" dir="rtl">
      {/* כותרת */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">
        <h2 className="text-center text-5xl font-bold text-white tracking-tight font-arimo">השירותים שלנו</h2>
      </div>

      <div className="relative max-w-6xl mx-auto h-screen mt-32">
        <div className="absolute inset-0 flex items-center justify-center card-container">
          <div className="relative w-full h-[80vh]">
            {services.map((service, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + services.length) % services.length;
              const isNext = index === (currentIndex + 1) % services.length;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 p-4 transition-all duration-500
                    ${isActive ? 'z-20 opacity-100 translate-y-0' : isPrev ? 'z-10 opacity-50 translate-y-full' : 'z-10 opacity-0 translate-y-full'}`}
                  style={{
                    visibility: isNext || isActive || isPrev ? 'visible' : 'hidden',
                  }}
                >
                  <div
                    className={`h-full w-full shadow-2xl p-8
                      bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm
                      border border-gray-700 rounded-all`}
                  >
                    <div className="h-full flex flex-col justify-center items-start relative">
                      <service.icon 
                        className="w-16 h-16 text-accent mb-8 transition-all duration-300 
                                   hover:scale-125 hover:rotate-15 hover:text-white cursor-pointer" 
                      />
                      <h2 className="text-5xl font-bold text-white tracking-tight mb-4 font-arimo">{service.title}</h2>
                      <p className="font-amatic text-3xl text-gray-400 w-2/3 mb-8">{service.description}</p>
                      <div className="font-amatic space-y-3 w-2/3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-start gap-3">
                            <div className="relative">
                              <div className="w-2 h-2 bg-accent rounded-full transform transition-all duration-300 hover:scale-150" />
                              <div className="absolute inset-0 bg-accent/30 rounded-full animate-ping" />
                            </div>
                            <span className="text-2xl text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Progress Bar */}
        <div className="absolute bottom-8 left-8 right-8 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent/50 rounded-full transition-all duration-[5000ms] ease-linear"
            style={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;