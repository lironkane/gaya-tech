import React, { useEffect } from 'react';
import {
  Cloud,
  Server,
  Shield,
  Database,
  ArrowUpDown,
  Zap,
  TrendingUp,
  Lock,
} from 'lucide-react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

const CloudSolutionsPage = () => {
  useEffect(() => {
    document.title = 'פתרונות ענן מתקדמים | tech-start';
  }, []);

  const solutions = [
    {
      icon: <Cloud className="w-10 h-10 text-primary" />,
      title: 'פתרונות ענן היברידיים',
      description:
        'שילוב אופטימלי של תשתית ענן ציבורי ופרטי מאפשר לך ליהנות מהגמישות והחסכון של הענן הציבורי, תוך שמירה על שליטה מלאה בנתונים רגישים בענן הפרטי. פתרון היברידי מאפשר ניצול משאבים יעיל וחכם.',
      keywords: [
        'ענן היברידי',
        'תשתית ענן',
        'ענן ציבורי',
        'ענן פרטי',
        'פתרון ענן',
      ],
    },
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: 'ניהול שרתים בענן',
      description:
        'שירותי ניהול שרתים בענן מבטיחים זמינות גבוהה, ביצועים אופטימליים ועדכונים שוטפים. התמקד בליבת העסק שלך ותן לנו לנהל את השרתים שלך.',
      keywords: [
        'ניהול שרתים',
        'שרתים בענן',
        'שירותי ענן',
        'תחזוקת שרתים',
        'שרת וירטואלי',
      ],
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: 'אבטחת ענן מתקדמת',
      description:
        'הגן על המידע והתשתיות שלך בענן בעזרת פתרונות אבטחה מתקדמים, הכוללים הצפנה, הגנה מפני איומים, וניהול זהויות ובקרת גישה.',
      keywords: [
        'אבטחת ענן',
        'הצפנת מידע',
        'הגנה מפני איומים',
        'אבטחת מידע',
        'ניהול זהויות',
      ],
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: 'גיבוי ושחזור בענן',
      description:
        'הבטח את המשכיות העסק שלך עם פתרונות גיבוי נתונים בענן ושחזור מהיר במקרה של אסון. פתרונות גיבוי מותאמים אישית לכל צורך.',
      keywords: [
        'גיבוי בענן',
        'שחזור נתונים',
        'המשכיות עסקית',
        'גיבוי אוטומטי',
        'שחזור מאסון',
      ],
    },
  ];

  const benefits = [
    {
      icon: <ArrowUpDown className="w-8 h-8 text-primary" />,
      title: 'גמישות מרבית',
      description:
        'התאם את משאבי הענן שלך בהתאם לצרכים המשתנים של העסק. שלם רק עבור מה שאתה צריך, מתי שאתה צריך.',
      keywords: ['גמישות ענן', 'התאמת משאבים', 'ענן סקיילבילי'],
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'חיסכון משמעותי',
      description:
        'חסוך בעלויות תשתית, תחזוקה וחשמל. פתרונות ענן מאפשרים לך לייעל את ההוצאות ולשפר את הרווחיות.',
      keywords: ['חיסכון בעלויות', 'ענן חסכוני', 'הוצאות תשתית'],
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: 'אבטחה מקיפה',
      description:
        'הגן על המידע העסקי שלך עם טכנולוגיות האבטחה המתקדמות ביותר. פתרונות הענן שלנו כוללים הצפנה, בקרת גישה, והגנה רב-שכבתית.',
      keywords: ['אבטחת מידע בענן', 'הצפנה', 'בקרת גישה', 'הגנה רב שכבתית'],
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'זמינות ונגישות',
      description:
        'הבטח גישה רציפה למערכות ולמידע שלך מכל מקום ובכל זמן. פתרונות ענן מבטיחים זמינות גבוהה ושרידות.',
      keywords: ['זמינות גבוהה', 'נגישות מכל מקום', 'שרידות', 'ענן זמין'],
    },
  ];

  return (
    <>
      <Helmet>
        {/* Metadata SEO - Cloud Solutions Page */}
        <title>פתרונות ענן מתקדמים לעסקים | tech-start</title>
        <meta
          name="description"
          content="tech-start מציעה פתרונות ענן מתקדמים לעסקים, כולל תשתית היברידית, ניהול שרתים, אבטחת מידע וגיבוי אוטומטי. שפר את גמישות העסק, חסוך בעלויות והבטח את המידע שלך עם פתרונות הענן שלנו."
        />
        <meta
          name="keywords"
          content="פתרונות ענן, ענן היברידי, ניהול שרתים, אבטחת ענן, גיבוי נתונים, שרתים וירטואליים, tech-start, גמישות, חיסכון בעלויות, אבטחה מתקדמת, זמינות גבוהה"
        />
        <meta name="author" content="tech-start" />
        <meta
          property="og:title"
          content="פתרונות ענן מתקדמים לעסקים | tech-start"
        />
        <meta
          property="og:description"
          content="פתרונות ענן מותאמים אישית לצרכים שלך, עם דגש על ביצועים, אבטחה וחיסכון בעלויות."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />{' '}
        {/* הוסף תמונה רלוונטית */}
        <meta
          property="og:url"
          content="https://www.tech-start.co.il/cloud-solutions"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="פתרונות ענן מתקדמים לעסקים | tech-start"
        />
        <meta
          name="twitter:description"
          content="פתרונות ענן מותאמים אישית לצרכים שלך, עם דגש על ביצועים, אבטחה וחיסכון בעלויות."
        />
        <meta
          name="twitter:image"
          content="/path/to/your/image.jpg"
        />{' '}
        {/* הוסף תמונה רלוונטית */}
      </Helmet>

      <div className="min-h-screen bg-gray-100" aria-label="Cloud Solutions for Business - tech-start">
        {/* Hero Section */}
        <div className="bg-primary text-white py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arimo">
                פתרונות ענן מתקדמים
                <span className="block text-lg md:text-xl mt-4 text-white/80 font-normal font-arimo">
                  העתיד של העסק שלך מתחיל כאן
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/90 font-assistant leading-relaxed font-amatic">
                אנחנו מציעים פתרונות ענן מותאמים אישית, שיעזרו לך לשפר את
                היעילות, להגביר את הגמישות, ולחסוך בעלויות. גלה כיצד פתרונות
                הענן שלנו יכולים להזניק את העסק שלך קדימה.
              </p>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4 font-arimo">
              הפתרונות שלנו
            </h2>
            <p className="text-center text-gray-600 mb-12 md:mb-16 font-assistant text-base md:text-lg font-amatic">
              מגוון פתרונות ענן מתקדמים המותאמים בדיוק לצרכי העסק שלך.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                >
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-lg md:text-xl font-arimo font-bold mb-3 text-primary text-center">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 font-assistant text-center text-sm md:text-base font-amatic">
                    {solution.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {solution.keywords.map((keyword) => (
                      <li key={keyword} className="text-gray-500 text-xs md:text-sm">
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-arimo">
              טכנולוגיות ושירותים בענן
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 rounded-2xl p-6 md:p-8 text-primary">
                <h3 className="text-lg md:text-xl font-arimo font-bold mb-4">
                  תשתיות ענן
                </h3>
                <ul className="space-y-3 font-assistant text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    <span>שרתים וירטואליים מאובטחים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    <span>אחסון בענן סקיילבילי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    <span>רשתות וירטואליות מתקדמות</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6 md:p-8 text-primary">
                <h3 className="text-lg md:text-xl font-arimo font-bold mb-4">
                  שירותי ניהול ענן
                </h3>
                <ul className="space-y-3 font-assistant text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    <span>ניטור מערכות 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    <span>גיבוי נתונים אוטומטי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    <span>אופטימיזציית משאבי ענן</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6 md:p-8 text-primary">
                <h3 className="text-lg md:text-xl font-arimo font-bold mb-4">
                  אבטחת ענן
                </h3>
                <ul className="space-y-3 font-assistant text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    <span>הצפנת מידע מתקדמת</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    <span>הגנה מפני איומי סייבר</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
                    <span>בקרת גישה וניהול זהויות</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4 font-arimo">
              היתרונות שלנו
            </h2>
            <p className="text-center text-gray-600 mb-12 md:mb-16 font-assistant text-base md:text-lg font-amatic">
              למה לבחור בפתרונות הענן המתקדמים שלנו?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-md flex items-center gap-4"
                >
                  {benefit.icon}
                  <div>
                    <h3 className="text-lg md:text-xl font-arimo font-bold mb-2 text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 font-assistant text-sm md:text-base font-amatic">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-primary-light">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-20"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-arimo">
                מוכנים לעבור לענן?
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-8 font-assistant font-amatic">
              צוות המומחים שלנו כאן כדי ללוות אתכם בתהליך הטרנספורמציה הדיגיטלית
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

export default CloudSolutionsPage;