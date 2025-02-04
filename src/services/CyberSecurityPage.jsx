import React, { useEffect } from 'react';
import { Shield, Lock, Eye, AlertCircle, Key, Search, Activity, Network } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const CyberSecurityPage = () => {
  useEffect(() => {
    document.title = 'אבטחת מידע וסייבר | גאיה-טק';
  }, []);

  const services = [
    {
      icon: <Shield className="w-8 h-8 text-[#124A36]" />,
      title: "הגנה מתקדמת",
      description: "פתרונות הגנה כוללים מפני איומי סייבר מתקדמים"
    },
    {
      icon: <Search className="w-8 h-8 text-[#124A36]" />,
      title: "ניטור ובקרה",
      description: "מעקב רציף אחר איומים ואנומליות במערכות"
    },
    {
      icon: <Key className="w-8 h-8 text-[#124A36]" />,
      title: "אבטחת מידע",
      description: "הצפנה והגנה על מידע רגיש ונכסים דיגיטליים"
    },
    {
      icon: <Network className="w-8 h-8 text-[#124A36]" />,
      title: "אבטחת רשת",
      description: "הגנה על תשתיות הרשת והתקשורת הארגונית"
    }
  ];

  const solutions = [
    {
      title: "הגנת נקודות קצה",
      items: [
        "הגנה מפני וירוסים ונוזקות",
        "מניעת דליפת מידע",
        "בקרת התקנים",
        "הצפנת דיסקים"
      ]
    },
    {
      title: "אבטחת רשת",
      items: [
        "חומות אש מתקדמות",
        "מניעת חדירות",
        "סינון תעבורה",
        "VPN מאובטח"
      ]
    },
    {
      title: "ניהול זהויות",
      items: [
        "אימות דו-שלבי",
        "ניהול הרשאות",
        "בקרת גישה",
        "ניטור משתמשים"
      ]
    }
  ];

  const stats = [
    {
      number: "24/7",
      label: "ניטור ותמיכה"
    },
    {
      number: "99.9%",
      label: "זמינות מערכת"
    },
    {
      number: "+1000",
      label: "איומים מזוהים"
    }
  ];

  return (
    <>
      <Helmet>
        <title>אבטחת מידע וסייבר | גאיה-טק</title>
        <meta name="description" content="פתרונות אבטחת מידע וסייבר מתקדמים לעסקים - הגנה מפני איומים, ניטור ובקרה, והגנה על נכסים דיגיטליים" />
        <meta name="keywords" content="אבטחת מידע, סייבר, הגנת סייבר, אבטחת רשת, ניטור אבטחה, הגנה מפני איומים" />
      </Helmet>

      <div className="min-h-screen bg-[#FAF9F6]">
        {/* Hero Section */}
        <div className="bg-[#124A36] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-6 font-secular">
                אבטחת מידע וסייבר
                <span className="block text-2xl mt-4 text-[#FAF9F6]/80 font-normal">
                  הגנה מתקדמת על הנכסים הדיגיטליים שלך
                </span>
              </h1>
              <p className="text-xl text-[#FAF9F6]/90 font-assistant leading-relaxed font-amatic">
                פתרונות אבטחה מקיפים להגנה על העסק שלך מפני איומי סייבר מתקדמים
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#124A36] text-center mb-4 font-secular">
              שירותי אבטחה
            </h2>
            <p className="text-center text-gray-600 mb-16 font-assistant text-lg font-amatic">
              הגנה מקיפה על המידע והמערכות שלך
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <article key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-secular font-bold mb-4 text-[#124A36] text-center">{service.title}</h3>
                  <p className="text-gray-600 font-assistant text-center font-amatic">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#124A36] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2 font-secular">{stat.number}</div>
                  <div className="text-[#FAF9F6]/80 font-assistant">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Solutions */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#124A36] text-center mb-16 font-secular">
              פתרונות אבטחה מקיפים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-secular font-bold mb-6 text-[#124A36]">{solution.title}</h3>
                  <ul className="space-y-4">
                    {solution.items.map((item, itemIndex) => (
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

        {/* Certification Section */}
        <div className="bg-[#124A36]/5 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#124A36] mb-6 font-secular">
                תקנים והסמכות
              </h2>
              <p className="text-gray-600 font-assistant mb-8 font-amatic">
                אנו עומדים בתקני אבטחה מחמירים ומחזיקים בהסמכות בינלאומיות
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg">ISO 27001</div>
                <div className="bg-white p-4 rounded-lg">SOC 2</div>
                <div className="bg-white p-4 rounded-lg">GDPR</div>
                <div className="bg-white p-4 rounded-lg">PCI DSS</div>
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
                מוכנים להגן על העסק שלכם?
              </h2>
              <p className="text-xl text-[#FAF9F6]/80 mb-8 font-assistant font-amatic">
                צוות המומחים שלנו כאן כדי לבנות את מעטפת ההגנה המושלמת עבורכם
              </p>
                        <Link
                          to="/contact"
                          className="inline-block bg-primary-dark hover:bg-primary-dark/80 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
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

export default CyberSecurityPage;