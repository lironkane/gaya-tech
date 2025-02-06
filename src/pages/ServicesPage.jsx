import React from 'react';
import { Code, Globe, Users, LineChart, CheckCircle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: 'פיתוח אתרים',
      description: 'אתרים מהירים, מאובטחים ומותאמים לכל מכשיר',
      features: [
        'חווית משתמש מתקדמת',
        'תכנות Full-Stack',
        'עיצוב UI/UX מודרני',
        'אבטחה מתקדמת',
        'תמיכה בכל הדפדפנים',
        'אופטימיזציה למובייל'
      ],
      color: '#124A36'
    },
    {
      icon: Globe,
      title: 'קידום אורגני',
      description: 'אסטרטגיות SEO מתקדמות להגדלת החשיפה',
      features: [
        'מחקר מילות מפתח',
        'אופטימיזציית תוכן',
        'בניית קישורים',
        'מעקב וניתוח ביצועים',
        'דוחות חודשיים',
        'אסטרטגיה מותאמת אישית'
      ],
      color: '#2A6B52'
    },
    {
      icon: LineChart,
      title: 'קידום ממומן',
      description: 'ניהול קמפיינים ממומנים בגוגל',
      features: [
        'אופטימיזציה מתמדת',
        'Google Ads',
        'ניתוח נתונים',
        'התאמה לקהל היעד',
        'מעקב ROI',
        'אסטרטגיית רימרקטינג'
      ],
      color: '#3D8C6E'
    },
    {
      icon: Users,
      title: 'ליווי אישי',
      description: 'תמיכה וייעוץ מקצועי לאורך כל הדרך',
      features: [
        'זמינות גבוהה',
        'דוחות ביצועים',
        'עדכונים שוטפים',
        'פגישות תקופתיות',
        'תמיכה טכנית',
        'ייעוץ אסטרטגי'
      ],
      color: '#50AD8A'
    }
  ];

  const faqs = [
    {
      question: 'כמה זמן לוקח לבנות אתר?',
      answer: 'זמן הפיתוח משתנה בהתאם לגודל ומורכבות הפרויקט. אתר בסיסי יכול להיות מוכן תוך 2-3 שבועות, בעוד שפרויקטים מורכבים יותר עשויים לקחת 2-3 חודשים.'
    },
    {
      question: 'האם האתר יהיה מותאם למובייל?',
      answer: 'בהחלט! כל האתרים שלנו מפותחים בגישת Mobile-First ומותאמים לכל סוגי המכשירים והמסכים.'
    },
    {
      question: 'איך מתחילים תהליך קידום אורגני?',
      answer: 'התהליך מתחיל בפגישת ייעוץ חינם בה נלמד על העסק שלכם, נבצע מחקר מתחרים ומילות מפתח, ונבנה אסטרטגיה מותאמת אישית.'
    },
    {
      question: 'האם אתם מספקים שירותי תחזוקה שוטפים?',
      answer: 'כן, אנחנו מציעים חבילות תחזוקה חודשיות הכוללות עדכונים, גיבויים, אבטחה ותמיכה טכנית שוטפת.'
    }
  ];

  return (
    <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
  >
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-[#124A36] to-[#2A6B52] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-arimo font-bold mb-6">
              השירותים שלנו
            </h1>
            <p className="font-amatic text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              פתרונות דיגיטליים מקצה לקצה לעסקים שרוצים להצליח באונליין
            </p>
          </div>
        </div>
        {/* Decorative pattern */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 opacity-10">
          {Array(36).fill().map((_, i) => (
            <div key={i} className="bg-white/20 rounded-lg"></div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F5E6D3]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <service.icon className="w-10 h-10" style={{ color: service.color }} />
                  <h3 className="text-2xl font-bold" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                </div>
                <p className="font-amatic text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#124A36] font-arimo">
            שאלות נפוצות
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div 
                key={faq.question}
                className="bg-[#FFF8F0] rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-[#124A36] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#124A36] mb-2">
                      {faq.question}
                    </h3>
                    <p className="font-amatic text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#124A36] via-[#2A6B52] to-[#124A36] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-arimo">
            מוכנים להתחיל?
          </h2>
          <p className="font-amatic text-xl text-white/80 mb-8">
            בואו נדבר על הפרויקט שלכם ונראה איך אנחנו יכולים לעזור
          </p>
          <button className="bg-white text-[#124A36] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl">
            צרו קשר עכשיו
          </button>
        </div>
      </section>
    </div>
    </motion.div>

  );
};

export default ServicesPage;