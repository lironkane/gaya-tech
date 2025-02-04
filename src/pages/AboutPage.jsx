import React, { useEffect, useLayoutEffect } from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'אודות גאיה-טק | חברת היי-טק מובילה בישראל';
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // גלילה מיידית לראש העמוד
  }, []);
  // Previous data arrays remain the same
  const values = [
    {
      icon: <Target className="w-10 h-10 text-[#124A36]" />,
      title: "חזון וחדשנות טכנולוגית",
      description: "פיתוח פתרונות טכנולוגיים מתקדמים והובלת חדשנות בתחום ההייטק הישראלי"
    },
    {
      icon: <Award className="w-10 h-10 text-[#124A36]" />,
      title: "מצוינות טכנולוגית",
      description: "מחויבות למצוינות בפיתוח תוכנה, אבטחת מידע, ופתרונות ענן מתקדמים"
    },
    {
      icon: <Users className="w-10 h-10 text-[#124A36]" />,
      title: "שיתופי פעולה וייעוץ",
      description: "יצירת שותפויות אסטרטגיות בתעשיית ההייטק ומתן ייעוץ טכנולוגי מקיף"
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#124A36]" />,
      title: "טכנולוגיות חדשניות",
      description: "התמחות בפיתוח מערכות AI, ביג דאטה ופתרונות IoT מתקדמים"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "הקמת החברה",
      description: "ייסוד גאיה-טק כחברת פיתוח תוכנה וייעוץ טכנולוגי"
    },
    {
      year: "2018",
      title: "הרחבת השירותים",
      description: "פתיחת מרכז פיתוח חדש והרחבת צוות המומחים"
    },
    {
      year: "2020",
      title: "חדשנות ב-AI",
      description: "השקת פתרונות מבוססי בינה מלאכותית וניתוח נתונים"
    },
    {
      year: "2023",
      title: "מובילים בתעשייה",
      description: "ביסוס מעמד כחברה מובילה בפיתוח פתרונות תוכנה"
    }
  ];

  return (
    <div>

    <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
  >
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Cream Background */}
        <section className="pt-32 pb-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-[#124A36] mb-8 font-secular leading-tight">
              גאיה-טק
              <span className="block text-2xl mt-4 text-[#1a654a] font-normal">
                חברת היי-טק מובילה בישראל
              </span>
            </h1>
            <p className="font-amatic text-xl text-gray-600 font-assistant leading-relaxed">
              אנחנו חברת טכנולוגיה מובילה המתמחה בפיתוח תוכנה, פתרונות ענן, ו-AI. 
              הצוות המקצועי שלנו מספק פתרונות טכנולוגיים חדשניים המותאמים לצרכי העסק שלך.
            </p>
          </div>
        </section>

        {/* Values Section - Green Background */}
        <section className="py-24 bg-[#124A36] rounded-3xl mb-24">
          <h2 className="text-4xl font-bold text-white text-center mb-16 font-secular">
            השירותים והיתרונות שלנו
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            {values.map((value, index) => (
              <article key={index} className="group bg-[#FAF9F6] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-6 transform transition-transform group-hover:scale-110 duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heebo font-bold mb-4 text-[#124A36]">{value.title}</h3>
                <p className="font-amatic text-gray-600 font-assistant leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Expertise Section - Cream Container */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto bg-[#124A36] rounded-3xl p-12 relative">
            <div className="absolute -top-3 right-12 w-24 h-2 bg-[#FAF9F6]/20 rounded-full"></div>
            <h2 className="text-4xl font-bold text-white text-center mb-12 font-secular">
              המומחיות שלנו
            </h2>
            <div className="space-y-6 text-right">
              <p className="text-lg text-gray-200 font-amatic leading-relaxed">
                גאיה-טק מובילה בתחום פיתוח התוכנה והפתרונות הטכנולוגיים בישראל. 
                אנו מתמחים בפיתוח אפליקציות, מערכות ענן, ומערכות בינה מלאכותית מתקדמות.
              </p>
              <p className="text-lg text-gray-200 font-amatic leading-relaxed">
                צוות המומחים שלנו כולל מפתחי Full Stack, מומחי DevOps, ומהנדסי תוכנה בכירים. 
                אנו משלבים טכנולוגיות חדשניות לפיתוח פתרונות מותאמים אישית.
              </p>
            </div>
          </div>
        </section>

        {/* Milestones Section - Green Background */}
        <section className="py-24 bg-[#124A36] rounded-3xl mb-24">
          <div className="mb-16 text-center">
            <h2 className="inline-block text-4xl font-bold text-white font-secular pb-2 mb-2">
              ציוני דרך
            </h2>
            <p className="text-[#FAF9F6]/80 text-lg font-amatic font-assistant">
              התפתחות החברה לאורך השנים
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            {milestones.map((milestone, index) => (
              <article key={index} className="bg-[#FAF9F6] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-lg font-bold font-specular text-[#124A36] font-heebo bg-[#124A36]/10 px-4 py-1 rounded-full">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="text-xl font-heebo font-bold mb-4 text-[#124A36]">{milestone.title}</h3>
                <p className="font-amatic text-gray-600 font-assistant leading-relaxed">{milestone.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section - Cream background with Green Container */}
        <section className="py-24">
          <div className="bg-[#124A36] rounded-3xl p-12 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FAF9F6]/10 via-[#FAF9F6]/20 to-[#FAF9F6]/10"></div>
            <h2 className="text-3xl font-bold text-white mb-6 font-secular">
              מוכנים לקחת את העסק שלכם לשלב הבא?
            </h2>
            <p className="font-amatic text-xl text-gray-200 mb-8 font-assistant">
              צוות המומחים שלנו כאן כדי לעזור לכם להצליח בעידן הדיגיטלי
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-[#FAF9F6] text-[#124A36] px-10 py-4 rounded-xl text-lg font-heebo hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#FAF9F6] focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
            >
              צור קשר לייעוץ טכנולוגי
            </button>
          </div>
        </section>
      </div>
    </div>
    </motion.div>
    </div>

  );
};

export default AboutPage;