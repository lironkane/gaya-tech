import React, { useEffect } from 'react';
import { Globe, Code, Search, Settings, Zap, Layers, Shield, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const WebsiteDevelopmentPage = () => {
  useEffect(() => {
    document.title = 'בניית אתרים מקצועיים | tech-start';
  }, []);

  const technologies = [
    {
      icon: <Code className="w-8 h-8 text-[#124A36]" />,
      title: "פיתוח מותאם אישית",
      description: "בניית אתרים בהתאמה מלאה לצרכים העסקיים שלך"
    },
    {
      icon: <Globe className="w-8 h-8 text-[#124A36]" />,
      title: "עיצוב חווית משתמש",
      description: "ממשק משתמש אינטואיטיבי המותאם לכל מכשיר וגודל מסך"
    },
    {
      icon: <Search className="w-8 h-8 text-[#124A36]" />,
      title: "אופטימיזציה לגוגל",
      description: "אתר מותאם SEO לדירוג גבוה במנועי החיפוש"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#124A36]" />,
      title: "ביצועים מהירים",
      description: "אתר מהיר ויעיל שנטען במהירות בכל פלטפורמה"
    }
  ];

  const applications = [
    {
      title: "אתרי עסקים",
      items: [
        "חנויות אונליין",
        "אתרי שירותים מקצועיים",
        "אתרי מסעדות ובתי קפה",
        "אתרים לעסקים קטנים ובינוניים"
      ]
    },
    {
      title: "אתרים מורכבים",
      items: [
        "פורטלים ארגוניים",
        "מערכות ניהול תוכן",
        "פלטפורמות קורסים",
        "אתרי חברות ותאגידים"
      ]
    },
    {
      title: "אתרים מיוחדים",
      items: [
        "אתרי תיק עבודות",
        "בלוגים מקצועיים",
        "אתרי אירועים",
        "אתרים חד-דפיים"
      ]
    }
  ];

  const features = [
    {
      icon: <Settings className="w-6 h-6 text-[#124A36]" />,
      title: "ניהול עצמאי",
      description: "מערכת ניהול תוכן נוחה לשליטה מלאה בתכני האתר"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#124A36]" />,
      title: "אבטחה מתקדמת",
      description: "אבטחת מידע ברמה הגבוהה ביותר להגנה על האתר והמשתמשים"
    },
    {
      icon: <Share2 className="w-6 h-6 text-[#124A36]" />,
      title: "אינטגרציה מלאה",
      description: "חיבור למערכות ארגוניות וכלים עסקיים חיצוניים"
    }
  ];

  return (
    <>
      <Helmet>
        {/* Metadata SEO - Website Development Service Page */}
        <title>בניית אתרים מקצועיים לעסקים | tech-start</title>
        <meta name="description" content="tech-start מתמחה בבניית אתרים מקצועיים לעסקים. אתרים מותאמים אישית, מעוצבים להפליא, מותאמים למובייל ומקודמים למנועי חיפוש להשגת תוצאות מרביות." />
        <meta name="keywords" content="בניית אתרים, פיתוח אתרים, עיצוב אתרים, אתר תדמית, אתר תדמיתי, אתר רספונסיבי, אתר מותאם סלולר, קידום אתרים, SEO, פיתוח אתרים מקצועי, חווית משתמש" />
        {/* סוף Metadata SEO */}
      </Helmet>

      <div className="min-h-screen bg-[#FAF9F6]" aria-label="Website Development Services - tech-start">
        {/* Hero Section */}
        <div className="bg-[#124A36] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-6 font-arimo">
                בניית אתרים מקצועיים
                <span className="block text-2xl mt-4 text-[#FAF9F6]/80 font-normal">
                  הנוכחות הדיגיטלית שתמנף את העסק שלך
                </span>
              </h1>
              <p className="text-xl text-[#FAF9F6]/90 font-assistant leading-relaxed font-amatic">
                אתרים חדשניים, מעוצבים בקפידה ומותאמים במיוחד לצרכים העסקיים שלך
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
              בניית אתרים בסטנדרטים הגבוהים ביותר לחוויה מושלמת
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
              סוגי אתרים
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
              יתרונות נוספים
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

        {/* Tech Stack Section */}
        <div className="bg-[#124A36]/5 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#124A36] mb-6 font-arimo">
                טכנולוגיות מובילות
              </h2>
              <p className="text-gray-600 font-assistant mb-8 font-amatic">
                אנו משתמשים בטכנולוגיות המתקדמות ביותר לבניית אתרים
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg">WordPress</div>
                <div className="bg-white p-4 rounded-lg">React</div>
                <div className="bg-white p-4 rounded-lg">Next.js</div>
                <div className="bg-white p-4 rounded-lg">Tailwind CSS</div>
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
                מוכנים להקים את האתר המושלם לעסק שלכם?
              </h2>
              <p className="text-xl text-[#FAF9F6]/80 mb-8 font-assistant font-amatic">
                צוות המומחים שלנו כאן כדי ללוות אתכם בתהליך בניית האתר מהתכנון ועד העלייה לאוויר
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary-dark hover:bg-primary-dark/80 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
              >
                צור קשר לייעוץ מקצועי
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteDevelopmentPage;