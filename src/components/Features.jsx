import React, { useState, useEffect, useRef } from 'react';
import { Code, Globe, Users, LineChart } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'פיתוח אתרים',
      description: 'אתרים מהירים, מאובטחים ומותאמים לכל מכשיר',
      features: ['חווית משתמש מתקדמת', 'תכנות Full-Stack', 'עיצוב UI/UX'],
    },
    {
      icon: Globe,
      title: 'קידום אורגני',
      description: 'אסטרטגיות SEO מתקדמות להגדלת החשיפה',
      features: ['מחקר מילות מפתח', 'אופטימיזציית תוכן', 'בניית קישורים'],
    },
    {
      icon: LineChart,
      title: 'קידום ממומן',
      description: 'ניהול קמפיינים ממומנים בגוגל',
      features: ['אופטימיזציה מתמדת', 'Google Ads', 'ניתוח נתונים'],
    },
    {
      icon: Users,
      title: 'ליווי אישי',
      description: 'תמיכה וייעוץ מקצועי לאורך כל הדרך',
      features: ['זמינות גבוהה', 'דוחות ביצועים', 'עדכונים שוטפים'],
    },
  ];

  const containerRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const controls = useAnimation();
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.5,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    if (titleInView) {
      controls.start('visible');
    }
  }, [controls, titleInView]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionBottom =
          sectionRef.current.offsetTop + sectionRef.current.offsetHeight;
        const viewportTop = window.scrollY;

        if (sectionBottom < viewportTop) {
          controls.start('hidden');
        } else {
          controls.start('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        const featureHeight =
          containerRef.current.offsetHeight / features.length;
        let visibleIndex = Math.floor(
          (scrollPosition - containerTop) / featureHeight
        );

        if (visibleIndex < 0) {
          visibleIndex = 0;
        } else if (visibleIndex >= features.length) {
          visibleIndex = features.length - 1;
        }

        setActiveFeature(visibleIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 bg-primary-dark hover:bg-primary-dark/90 text-white"
      variants={sectionVariants}
      initial="visible"
      animate={controls}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={titleRef}
          className="text-center text-4xl font-bold mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          השירותים שלנו - בונים עתיד דיגיטלי
        </motion.h2>
        <p className="text-center text-lg mb-16">
          עכשיו בואו נראה איך כל שירות שלנו יכול לתרום להצלחה שלכם:
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={containerRef}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={` bg-[#FFF8F0] rounded-xl p-8 transition-all duration-500 shadow-lg hover:shadow-xl border border-[#F5E6D3] ${
                index === activeFeature
                  ? 'opacity-100 blur-none scale-105'
                  : 'opacity-70 blur-[2px]'
              }`}
            >
              <div className="mb-6 flex justify-center">
                <feature.icon className="w-12 h-12 text-[#124A36]" />
              </div>
              <h3 className="text-xl text-center font-bold mb-4 text-[#2D2D2D]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {feature.description}
              </p>
              <ul className="text-center list-none p-0 pl-4">
                {feature.features.map((item, i) => (
                  <li
                    key={i}
                    className="mb-3 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-[#124A36] ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 mr-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;