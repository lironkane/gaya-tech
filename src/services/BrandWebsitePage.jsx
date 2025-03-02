import React, { useEffect } from 'react';
import { Award, Layout, Image, MousePointer, Zap, Layers, Shield, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const BrandWebsitePage = () => {
  useEffect(() => {
    document.title = 'בניית אתרי תדמית | tech-start';
  }, []);

  const technologies = [
    {
      icon: <Award className="w-8 h-8 text-[#124A36]" />,
      title: "עיצוב פרימיום",
      description: "עיצוב מרהיב ויוקרתי המדגיש את הערכים של המותג שלך"
    },
    {
      icon: <Layout className="w-8 h-8 text-[#124A36]" />,
      title: "חווית משתמש מושלמת",
      description: "ממשק אינטואיטיבי שמוביל את הגולש בדיוק לאן שצריך"
    },
    {
      icon: <Image className="w-8 h-8 text-[#124A36]" />,
      title: "ויזואליות מרשימה",
      description: "אלמנטים גרפיים מתקדמים ואנימציות עדינות לחוויה ייחודית"
    },
    {
      icon: <MousePointer className="w-8 h-8 text-[#124A36]" />,
      title: "קריאות לפעולה",
      description: "הכוונה אפקטיבית של המבקרים להשגת המטרות העסקיות שלך"
    }
  ];

  const applications = [
    {
      title: "מותגים עסקיים",
      items: [
        "חברות ותאגידים",
        "עסקים קטנים ובינוניים",
        "סטארטאפים וחברות טכנולוגיה",
        "משרדי עורכי דין ורואי חשבון"
      ]
    },
    {
      title: "מותגים אישיים",
      items: [
        "אנשי מקצוע עצמאיים",
        "יועצים ומנטורים",
        "אמנים ויוצרים",
        "מרצים ומדריכים"
      ]
    },
    {
      title: "מוסדות ומגזרים",
      items: [
        "ארגונים ומוסדות חינוך",
        "עמותות וארגונים ללא מטרות רווח",
        "גופים ציבוריים",
        "מוסדות תרבות ואמנות"
      ]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#124A36]" />,
      title: "מהירות טעינה",
      description: "ביצועים מהירים במיוחד לחוויית גלישה מושלמת"
    },
    {
      icon: <Layers className="w-6 h-6 text-[#124A36]" />,
      title: "התאמה לכל מכשיר",
      description: "עיצוב רספונסיבי מושלם למחשב, טאבלט וסמארטפון"
    },
    {
      icon: <Shield className="w-6 h-6 text-[#124A36]" />,
      title: "אבטחה מתקדמת",
      description: "הגנה מקסימלית על האתר והמידע של המבקרים"
    }
  ];

  return (
    <>
      <Helmet>
        {/* Metadata SEO - Brand Website Service Page */}
        <title>בניית אתרי תדמית איכותיים לעסקים | tech-start</title>
        <meta name="description" content="tech-start מתמחה בבניית אתרי תדמית יוקרתיים לעסקים ומותגים. אתרים מעוצבים להפליא, שמשקפים את הערכים והייחודיות של המותג שלך ומשאירים רושם בלתי נשכח." />
        <meta name="keywords" content="אתר תדמית, אתר תדמיתי, בניית אתרי תדמית, עיצוב אתרים, מיתוג, מיתוג דיגיטלי, אתר חברה, אתר עסקי, אתר יוקרתי, חווית משתמש, UI/UX" />
        {/* סוף Metadata SEO */}
      </Helmet>

      <div className="min-h-screen bg-[#FAF9F6]" aria-label="Brand Website Services - tech-start">
        {/* Hero Section */}
        <div className="bg-[#124A36] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-6 font-arimo">
                אתרי תדמית
                <span className="block text-2xl mt-4 text-[#FAF9F6]/80 font-normal">
                  חלון הראווה הדיגיטלי של העסק שלך
                </span>
              </h1>
              <p className="text-xl text-[#FAF9F6]/90 font-assistant leading-relaxed font-amatic">
                אתרים מעוצבים בקפידה שמשקפים את המקצועיות, האמינות והערכים של המותג שלך
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#124A36] text-center mb-4 font-arimo">
              המאפיינים שלנו
            </h2>
            <p className="text-center text-gray-600 mb-16 font-assistant text-lg font-amatic">
              אתרי תדמית שמשאירים רושם בלתי נשכח ומניעים תוצאות עסקיות
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
              אתרי תדמית לכל תחום
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

        {/* Process Section */}
        <div className="bg-[#124A36]/5 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-[#124A36] mb-6 font-arimo">
                תהליך העבודה שלנו
              </h2>
              <p className="text-gray-600 font-assistant mb-8 font-amatic">
                תהליך מובנה שמבטיח תוצאות מושלמות בכל פרויקט
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#124A36] text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-lg font-bold text-[#124A36] mt-4 mb-2">אפיון צרכים</h3>
                <p className="text-gray-600 text-sm">הבנת המטרות, קהל היעד והערכים של המותג</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#124A36] text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-lg font-bold text-[#124A36] mt-4 mb-2">עיצוב ואישור</h3>
                <p className="text-gray-600 text-sm">עיצוב ממשק המשתמש בהתאם לזהות המותג</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#124A36] text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-lg font-bold text-[#124A36] mt-4 mb-2">פיתוח ויישום</h3>
                <p className="text-gray-600 text-sm">בניית האתר על בסיס העיצוב ובטכנולוגיות מתקדמות</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center relative">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#124A36] text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-lg font-bold text-[#124A36] mt-4 mb-2">השקה וליווי</h3>
                <p className="text-gray-600 text-sm">העלאת האתר לאוויר ותמיכה שוטפת</p>
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
                מוכנים להציג את המותג שלכם בצורה הטובה ביותר?
              </h2>
              <p className="text-xl text-[#FAF9F6]/80 mb-8 font-assistant font-amatic">
                צוות המומחים שלנו כאן כדי לבנות את אתר התדמית המושלם עבור העסק שלך
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary-dark hover:bg-primary-dark/80 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
              >
                צור קשר לייעוץ תדמיתי
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandWebsitePage;