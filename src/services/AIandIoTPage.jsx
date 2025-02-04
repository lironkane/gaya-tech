import React, { useEffect } from 'react';
import { Brain, Cpu, Wifi, BarChart, Zap, Settings, Layers, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AIandIoTPage = () => {
  useEffect(() => {
    document.title = 'פתרונות בינה מלאכותית ו-IoT | גאיה-טק';
  }, []);

  const technologies = [
    {
      icon: <Brain className="w-8 h-8 text-[#124A36]" />,
      title: "בינה מלאכותית",
      description: "פתרונות AI מתקדמים לניתוח נתונים והתייעלות תהליכים"
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#124A36]" />,
      title: "IoT ומכשירים חכמים",
      description: "חיבור וניהול מכשירים חכמים ברשת מאובטחת"
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#124A36]" />,
      title: "ניתוח נתונים",
      description: "ניתוח מתקדם של Big Data וקבלת תובנות עסקיות"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#124A36]" />,
      title: "אוטומציה חכמה",
      description: "ייעול תהליכים באמצעות אוטומציה מבוססת AI"
    }
  ];

  const applications = [
    {
      title: "תעשייה חכמה",
      items: [
        "ניטור ציוד בזמן אמת",
        "תחזוקה מונעת",
        "אופטימיזציה של תהליכי ייצור",
        "בקרת איכות אוטומטית"
      ]
    },
    {
      title: "ניהול נתונים",
      items: [
        "ניתוח נתונים בזמן אמת",
        "חיזוי מגמות",
        "זיהוי אנומליות",
        "דוחות אוטומטיים"
      ]
    },
    {
      title: "אוטומציה",
      items: [
        "תהליכים אוטומטיים",
        "קבלת החלטות חכמה",
        "התראות חכמות",
        "אופטימיזציה של משאבים"
      ]
    }
  ];

  const features = [
    {
      icon: <Settings className="w-6 h-6 text-[#124A36]" />,
      title: "תשתית מודולרית",
      description: "מערכת גמישה המתאימה את עצמה לצרכים המשתנים של העסק"
    },
    {
      icon: <Layers className="w-6 h-6 text-[#124A36]" />,
      title: "שילוב מערכות",
      description: "אינטגרציה חלקה עם המערכות הקיימות בארגון"
    },
    {
      icon: <Share2 className="w-6 h-6 text-[#124A36]" />,
      title: "קישוריות מתקדמת",
      description: "חיבור מאובטח בין כל רכיבי המערכת"
    }
  ];

  return (
    <>
      <Helmet>
        <title>פתרונות בינה מלאכותית ו-IoT | גאיה-טק</title>
        <meta name="description" content="פתרונות בינה מלאכותית ו-IoT מתקדמים לעסקים - אוטומציה חכמה, ניתוח נתונים ומערכות IoT" />
        <meta name="keywords" content="בינה מלאכותית, IoT, מכשירים חכמים, אוטומציה, Big Data, ניתוח נתונים, תעשייה חכמה" />
      </Helmet>

      <div className="min-h-screen bg-[#FAF9F6]">
        {/* Hero Section */}
        <div className="bg-[#124A36] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-6 font-secular">
                בינה מלאכותית ו-IoT
                <span className="block text-2xl mt-4 text-[#FAF9F6]/80 font-normal">
                  טכנולוגיות מתקדמות לעסק החכם
                </span>
              </h1>
              <p className="text-xl text-[#FAF9F6]/90 font-assistant leading-relaxed font-amatic">
                פתרונות חדשניים המשלבים בינה מלאכותית ו-IoT להתייעלות
                וצמיחה עסקית
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#124A36] text-center mb-4 font-secular">
              הטכנולוגיות שלנו
            </h2>
            <p className="text-center text-gray-600 mb-16 font-assistant text-lg font-amatic">
              פתרונות מתקדמים המשלבים טכנולוגיות חדשניות
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <article key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-secular font-bold mb-4 text-[#124A36] text-center">{tech.title}</h3>
                  <p className="text-gray-600 font-assistant text-center font-amatic">{tech.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Showcase Section */}
        <div className="bg-[#124A36] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16 font-secular">
              יישומים מעשיים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-[#FAF9F6] rounded-2xl p-8">
                  <h3 className="text-xl font-secular font-bold mb-6 text-[#124A36]">{app.title}</h3>
                  <ul className="space-y-4">
                    {app.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 font-assistant text-gray-600">
                        <div className="w-2 h-2 bg-[#124A36] rounded-full mt-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#124A36] text-center mb-16 font-secular">
              יתרונות המערכת
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-secular font-bold mb-4 text-[#124A36] text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-assistant text-center font-amatic">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="bg-[#124A36]/5 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#124A36] mb-6 font-secular">
                טכנולוגיות מובילות
              </h2>
              <p className="text-gray-600 font-assistant mb-8 font-amatic">
                אנו משתמשים בטכנולוגיות המתקדמות ביותר בתעשייה
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg">TensorFlow</div>
                <div className="bg-white p-4 rounded-lg">PyTorch</div>
                <div className="bg-white p-4 rounded-lg">Azure IoT</div>
                <div className="bg-white p-4 rounded-lg">AWS IoT</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#124A36] rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FAF9F6]/10 via-[#FAF9F6]/20 to-[#FAF9F6]/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6 font-secular">
                מוכנים להפוך את העסק שלכם לחכם יותר?
              </h2>
              <p className="text-xl text-[#FAF9F6]/80 mb-8 font-assistant font-amatic">
                צוות המומחים שלנו כאן כדי ללוות אתכם בתהליך הטרנספורמציה הדיגיטלית
              </p>
              <Link
        to="/contact"
        className="bg-white hover:bg-gray-100 text-primary font-bold py-2 px-6 rounded-full transition duration-300"
      >
                צור קשר לייעוץ טכנולוגי
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIandIoTPage;