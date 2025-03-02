import React, { useEffect } from 'react';
import { Target, TrendingUp, Users, Clock, Zap, BarChart3, LineChart, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const LandingPageService = () => {
  useEffect(() => {
    document.title = 'עמודי נחיתה מקצועיים | tech-start';
  }, []);

  const technologies = [
    {
      icon: <Target className="w-8 h-8 text-[#124A36]" />,
      title: "ממוקדי המרות",
      description: "עמודי נחיתה ממוקדים בדיוק במטרה העסקית שלך"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#124A36]" />,
      title: "אופטימיזציה לקמפיינים",
      description: "עמודים מותאמים לקמפיינים פרסומיים עם אחוזי המרה גבוהים"
    },
    {
      icon: <Users className="w-8 h-8 text-[#124A36]" />,
      title: "התאמה לקהל יעד",
      description: "עיצוב ומסרים המותאמים במדויק לקהל היעד שלך"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#124A36]" />,
      title: "זמן פיתוח מהיר",
      description: "הקמה מהירה לתמיכה בקמפיינים ופעילויות שיווקיות"
    }
  ];

  const applications = [
    {
      title: "הרשמה ולידים",
      items: [
        "הרשמה לאירועים",
        "הורדת מדריכים וחומרים",
        "הרשמה לניוזלטר",
        "תיאום פגישות ושיחות ייעוץ"
      ]
    },
    {
      title: "מכירות ושיווק",
      items: [
        "השקת מוצרים חדשים",
        "מבצעים והנחות מיוחדות",
        "קידום שירותים",
        "מכירת קורסים ותוכניות"
      ]
    },
    {
      title: "אירועים מיוחדים",
      items: [
        "וובינרים והדרכות",
        "כנסים והרצאות",
        "תחרויות ומבצעים",
        "השקות ואירועים חד פעמיים"
      ]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#124A36]" />,
      title: "מהירות טעינה",
      description: "עמודים מהירים במיוחד למקסום אחוזי ההמרה"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#124A36]" />,
      title: "מעקב ומדידה",
      description: "מערכות אנליטיקה מובנות למדידת ביצועים והמרות"
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#124A36]" />,
      title: "A/B Testing",
      description: "אפשרות לבדיקת גרסאות שונות לשיפור ביצועים"
    }
  ];

  return (
    <>
      <Helmet>
        {/* Metadata SEO - Landing Page Service */}
        <title>עמודי נחיתה ממירים לקמפיינים | tech-start</title>
        <meta name="description" content="tech-start מתמחה בבניית עמודי נחיתה אפקטיביים עם אחוזי המרה גבוהים. עמודי נחיתה ממוקדים לקמפיינים, איסוף לידים, מכירות ואירועים מיוחדים." />
        <meta name="keywords" content="עמודי נחיתה, דפי נחיתה, המרות, קמפיינים, לידים, איסוף לידים, מכירות, דף נחיתה, דף ממיר, אופטימיזציה, לידים, פרסום" />
        {/* סוף Metadata SEO */}
      </Helmet>

      <div className="min-h-screen bg-[#FAF9F6]" aria-label="Landing Pages Services - tech-start">
        {/* Hero Section */}
        <div className="bg-[#124A36] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-6 font-arimo">
                עמודי נחיתה
                <span className="block text-2xl mt-4 text-[#FAF9F6]/80 font-normal">
                  דפים ממוקדים להשגת תוצאות מיידיות
                </span>
              </h1>
              <p className="text-xl text-[#FAF9F6]/90 font-assistant leading-relaxed font-amatic">
                עמודי נחיתה אפקטיביים המתוכננים להשיג המרות גבוהות ותוצאות עסקיות מדידות
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#124A36] text-center mb-4 font-arimo">
              היתרונות שלנו
            </h2>
            <p className="text-center text-gray-600 mb-16 font-assistant text-lg font-amatic">
              עמודי נחיתה מקצועיים שיניעו את הלקוחות שלך לפעולה
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <article key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-arimo font-bold mb-4 text-[#124A36] text-center">{tech.title}</h3>
                  <p className="text-gray-600 font-assistant text-center font-amatic">{tech.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Showcase Section */}
        <div className="bg-[#124A36] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16 font-arimo">
              שימושים נפוצים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-[#FAF9F6] rounded-2xl p-8">
                  <h3 className="text-xl font-arimo font-bold mb-6 text-[#124A36]">{app.title}</h3>
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
            <h2 className="text-4xl font-bold text-[#124A36] text-center mb-16 font-arimo">
              יתרונות טכניים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-arimo font-bold mb-4 text-[#124A36] text-center">
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

        {/* Conversion Elements Section */}
        <div className="bg-[#124A36]/5 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#124A36] mb-6 font-arimo">
                אלמנטים ממירים
              </h2>
              <p className="text-gray-600 font-assistant mb-8 font-amatic">
                כל עמוד נחיתה שלנו מכיל אלמנטים מוכחים להגדלת ההמרות
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="bg-[#124A36] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-[#124A36] mb-2">כותרות חזקות ומניעות לפעולה</h3>
                  <p className="text-gray-600 text-sm">כותרות שמושכות תשומת לב ומעבירות בבהירות את הערך המוצע</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="bg-[#124A36] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-[#124A36] mb-2">טפסים אופטימליים</h3>
                  <p className="text-gray-600 text-sm">טפסים קצרים וממוקדים עם שדות הכרחיים בלבד להגברת ההמרות</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="bg-[#124A36] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-[#124A36] mb-2">כפתורי פעולה בולטים</h3>
                  <p className="text-gray-600 text-sm">כפתורי CTA בולטים בצבעים נוגדים שמושכים לפעולה</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 flex items-start gap-4">
                <div className="bg-[#124A36] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-[#124A36] mb-2">אלמנטים של אמון</h3>
                  <p className="text-gray-600 text-sm">עדויות, סקירות, לוגואים של לקוחות ותגי אבטחה</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#124A36] text-center mb-12 font-arimo">
              התוצאות שלנו
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-[#124A36] mb-2">+45%</div>
                <p className="text-gray-600">שיפור אחוזי המרה</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-[#124A36] mb-2">+70%</div>
                <p className="text-gray-600">הגדלת לידים</p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-[#124A36] mb-2">-25%</div>
                <p className="text-gray-600">ירידה בעלות לליד</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#124A36] rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FAF9F6]/10 via-[#FAF9F6]/20 to-[#FAF9F6]/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6 font-arimo">
                מוכנים להגדיל את ההמרות בקמפיינים שלכם?
              </h2>
              <p className="text-xl text-[#FAF9F6]/80 mb-8 font-assistant font-amatic">
                צוות המומחים שלנו כאן כדי לבנות עמודי נחיתה אפקטיביים שיניעו תוצאות עסקיות מוכחות
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary-dark hover:bg-primary-dark/80 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
              >
                קבלו הצעת מחיר
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageService;