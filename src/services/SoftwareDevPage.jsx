import React from 'react';
import { Code, GitBranch, Laptop, Cpu, Users, Database, GitMerge, Zap, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SoftwareDevPage = () => {
  const technologies = [
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: 'פיתוח Full Stack',
      description:
        'מומחיות בפיתוח מקצה לקצה, בניית אתרים ואפליקציות דינמיות תוך שימוש בטכנולוגיות המתקדמות ביותר, כולל React, Node.js ו-Python.',
      keywords: ['Full Stack', 'React', 'Node.js', 'Python', 'Web Development'],
    },
    {
      icon: <GitBranch className="w-10 h-10 text-primary" />,
      title: 'DevOps ואוטומציה',
      description:
        'הטמעת תהליכי CI/CD, ניהול תשתיות ענן ואוטומציה לשיפור יעילות וקיצור זמני פיתוח.',
      keywords: [
        'DevOps',
        'CI/CD',
        'Cloud Infrastructure',
        'Automation',
        'Agile',
      ],
    },
    {
      icon: <Laptop className="w-10 h-10 text-primary" />,
      title: 'פיתוח אפליקציות מובייל ודסקטופ',
      description:
        'יצירת אפליקציות מותאמות אישית למובייל (iOS ו-Android) ולדסקטופ, תוך שימוש בטכנולוגיות כמו React Native ו-Electron.',
      keywords: [
        'Mobile Development',
        'Desktop Development',
        'React Native',
        'Electron',
        'iOS',
        'Android',
      ],
    },
    {
      icon: <Cpu className="w-10 h-10 text-primary" />,
      title: 'פיתוח מערכות ליבה',
      description:
        'תכנון, פיתוח והטמעה של מערכות ליבה עסקיות קריטיות, תוך שימת דגש על יציבות, אמינות וביצועים גבוהים.',
      keywords: [
        'Core Systems',
        'Enterprise Solutions',
        'Backend Development',
        'System Architecture',
        'Database Design',
      ],
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'מומחיות טכנולוגית',
      description:
        'צוות המפתחים שלנו מנוסה בטכנולוגיות המתקדמות ביותר, ומבטיח פתרונות חדשניים ויעילים.',
      keywords: ['טכנולוגיה', 'חדשנות', 'פיתוח תוכנה', 'מומחים'],
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: 'פתרונות מותאמים אישית',
      description:
        'אנו מתאימים את תהליך הפיתוח לצרכים הייחודיים של כל לקוח, תוך גמישות מרבית והתאמה לדרישות העסקיות.',
      keywords: ['התאמה אישית', 'פתרונות תוכנה', 'גמישות', 'צרכים עסקיים'],
    },
    {
      icon: <ShieldCheck className='w-8 h-8 text-primary' />,
      title: 'אבטחת מידע מתקדמת',
      description:
        'אנו משלבים פרקטיקות אבטחת מידע מתקדמות בכל שלבי הפיתוח, כדי להבטיח הגנה מקסימלית על נתונים ומידע רגיש.',
      keywords: ['אבטחת מידע', 'הגנת נתונים', 'פרטיות', 'Cybersecurity'],
    },
    {
      icon: <GitMerge className='w-8 h-8 text-primary' />,
      title: 'תהליך פיתוח יעיל',
      description:
        'שימוש במתודולוגיות Agile ו-DevOps מאפשר לנו לספק תוצאות מהירות, תוך שמירה על איכות ותקשורת שוטפת.',
      keywords: ['Agile', 'DevOps', 'פיתוח מהיר', 'איכות תוכנה'],
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'תמיכה טכנית מקצועית',
      description:
        'אנו מציעים ליווי ותמיכה טכנית לאורך כל חיי הפרויקט, כולל תחזוקה, עדכונים ופתרון בעיות בזמן אמת.',
      keywords: ['תמיכה טכנית', 'תחזוקה', 'שירות לקוחות', 'פתרון בעיות'],
    },
  ];

  const processSteps = [
    {
      title: 'אפיון וניתוח דרישות',
      description:
        'הבנה מעמיקה של צרכי הלקוח, הגדרת מטרות הפרויקט, ותכנון ארכיטקטורת המערכת.',
      icon: <Users className="w-6 h-6 text-primary" />,
      keywords: ['אפיון', 'ניתוח דרישות', 'תכנון פרויקט', 'ארכיטקטורה'],
    },
    {
      title: 'עיצוב ופיתוח',
      description:
        'עיצוב ממשק משתמש ידידותי וחווית משתמש מיטבית, פיתוח קוד נקי ויעיל תוך שימוש בטכנולוגיות מתקדמות.',
      icon: <Code className="w-6 h-6 text-primary" />,
      keywords: [
        'עיצוב UI/UX',
        'פיתוח תוכנה',
        'קוד נקי',
        'טכנולוגיות מתקדמות',
      ],
    },
    {
      title: 'בדיקות ואיכות',
      description:
        'ביצוע בדיקות מקיפות (QA) כדי להבטיח את איכות התוכנה, יציבותה ועמידה בדרישות.',
      icon: <Zap className="w-6 h-6 text-primary" />,
      keywords: ['בדיקות תוכנה', 'QA', 'איכות תוכנה', 'בדיקות אוטומטיות'],
    },
    {
      title: 'הטמעה והדרכה',
      description:
        'הטמעת המערכת בסביבת הלקוח, הדרכת משתמשים, ותמיכה טכנית שוטפת.',
      icon: <Laptop className="w-6 h-6 text-primary" />,
      keywords: ['הטמעה', 'הדרכה', 'תמיכה טכנית', 'שירות לקוחות'],
    },
    {
      title: 'תחזוקה ועדכונים',
      description:
        'תחזוקה שוטפת של המערכת, עדכוני גרסאות, ותמיכה טכנית לטווח ארוך.',
      icon: <Cpu className="w-6 h-6 text-primary" />,
      keywords: ['תחזוקת תוכנה', 'עדכונים', 'תמיכה', 'שדרוגים'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>פיתוח תוכנה | גאיה-טק</title>
        <meta
          name="description"
          content="גאיה-טק מציעה שירותי פיתוח תוכנה מתקדמים, כולל פיתוח Full Stack, DevOps, פיתוח אפליקציות מובייל ודסקטופ, ומערכות ליבה עסקיות."
        />
        <meta
          name="keywords"
          content="פיתוח תוכנה, Full Stack, DevOps, אפליקציות מובייל, אפליקציות דסקטופ, React, Node.js, Python, CI/CD, אוטומציה, אבטחת מידע, תמיכה טכנית, גאיה-טק"
        />
        <meta name="author" content="גאיה-טק" />
        <meta property="og:title" content="פיתוח תוכנה | גאיה-טק" />
        <meta
          property="og:description"
          content="פתרונות תוכנה חדשניים ומותאמים אישית לצרכים העסקיים שלך."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />{' '}
        {/* הוסף תמונה */}
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/software-development"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="פיתוח תוכנה | גאיה-טק"
        />
        <meta
          name="twitter:description"
          content="פתרונות תוכנה חדשניים ומותאמים אישית לצרכים העסקיים שלך."
        />
        <meta
          name="twitter:image"
          content="/path/to/your/image.jpg"
        />{' '}
        {/* הוסף תמונה */}
      </Helmet>
      <div className="min-h-screen bg-gray-100 font-assistant">
        {/* Hero Section */}
        <div className="bg-primary text-white py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arimo">
                פיתוח תוכנה
                <span className="block text-lg md:text-xl mt-4 text-white/80 font-normal font-arimo">
                  פתרונות תוכנה חדשניים לעסקים מובילים
                </span>
              </h1>
              <p className="text-base text-xl md:text-lg text-white/90 leading-relaxed font-amatic">
                אנו מציעים שירותי פיתוח תוכנה מתקדמים, תוך שימוש בטכנולוגיות
                העדכניות ביותר, כדי לספק לך פתרונות יעילים, מאובטחים
                ומותאמים אישית לדרישות העסק שלך.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4 font-arimo">
              הטכנולוגיות שלנו
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 md:mb-16 font-assistant text-base md:text-lg font-amatic">
              אנו מתמחים במגוון רחב של טכנולוגיות פיתוח, כדי להבטיח את
              הפתרון המתאים ביותר עבורך.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                >
                  <div className="mb-4">{tech.icon}</div>
                  <h3 className="text-lg md:text-xl font-arimo font-bold mb-3 text-primary text-center">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 font-assistant text-center text-lg md:text-base font-amatic">
                    {tech.description}
                  </p>
                  <ul className="text-center mt-4 space-y-2">
                    {tech.keywords.map((keyword) => (
                      <li
                        key={keyword}
                        className="text-gray-500 text-xs md:text-sm"
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-arimo">
              תהליך העבודה שלנו
            </h2>
            <p className="text-center text-xl text-white/80 mb-12 md:mb-16 font-assistant text-base md:text-lg font-amatic">
              אנו מאמינים בתהליך עבודה מסודר ויעיל, המבטיח תוצאות
              איכותיות.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-lg md:text-xl font-arimo font-bold mb-4 text-primary flex items-center gap-3">
                    {step.icon}
                    {step.title}
                  </h3>
                  <p className="font-assistant text-gray-600 text-sm md:text-base mb-4 font-amatic">
                    {step.description}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {step.keywords.map((keyword) => (
                      <li key={keyword} className="text-gray-500 text-xs md:text-sm">
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
              הערכים המוספים שאנו מביאים לכל פרויקט פיתוח תוכנה.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-md flex flex-col items-center"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg md:text-xl font-arimo font-bold mb-2 text-primary text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-assistant text-center text-sm md:text-base font-amatic">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* CTA Section */}
      <div className="bg-[#124A36] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-arimo">
            מוכנים להתחיל בפיתוח הפרויקט שלכם?
          </h2>
          <p className="text-xl text-[#FAF9F6]/80 mb-8 font-assistant font-amatic">
            צוות המומחים שלנו כאן כדי להפוך את החזון שלכם למציאות
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
    </>
  );
};

export default SoftwareDevPage;