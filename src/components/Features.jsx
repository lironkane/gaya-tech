import React, { useRef, useState } from 'react';
import { Code, Globe, Users, LineChart, Smartphone, Zap, Layers, Settings } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import featuresBackground from '../assets/background/features-background.jpg';

const FeatureIcon = ({ Icon }) => (
  <motion.div
    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#000000] to-[#000000]"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 25,
      delay: 0.1,
    }}
  >
    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
  </motion.div>
);

const ServiceDetails = ({ service }) => {
  // ... (ללא שינוי) ...
   return (
        <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 sm:p-6 mt-4"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#2D2D2D]">{service.title}</h3>
            {/* תוכן מפורט לכל שירות - מותאם אישית */}
            {service.title === 'פיתוח PWAs' && (
                <>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-2">
                        Progressive Web Apps הן הדור הבא של חוויית המשתמש באינטרנט. הן משלבות את הטוב שבשני העולמות:
                    </p>
                    <ul className="list-disc list-inside text-base sm:text-lg text-gray-600 leading-relaxed">
                        <li>מהירות: טעינה מיידית.</li>
                        <li>אמינות: עבודה גם במצב לא מקוון.</li>
                        <li>מעורבות: התראות דחיפה (push notifications).</li>
                        <li>חוויה של אפליקציה: ניווט חלק, אנימציות, ותחושה של אפליקציה מקומית.</li>
                    </ul>
                </>
            )}
            {service.title === 'אתרים ואפליקציות' && (
                <p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-2'>
                    אנחנו בונים אתרים מותאמים אישית ואפליקציות מובייל, תוך הקפדה על עיצוב מרהיב, חוויית משתמש מעולה ושימוש בטכנולוגיות המתקדמות ביותר.
                </p>
            )}
            {service.title === 'אופטימיזציית ביצועים' && (
                <p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-2'>
                    מהירות האתר או האפליקציה שלך היא קריטית להצלחה. אנחנו מבצעים אופטימיזציה מקיפה כדי להבטיח טעינה מהירה, חוויית משתמש חלקה ושיפור בתוצאות SEO.
                </p>
            )}
            {service.title === 'אסטרטגיה דיגיטלית ו-UX/UI' && (
                <p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-2'>
                    אנחנו לא רק בונים אתרים ואפליקציות, אנחנו עוזרים לך להגדיר את האסטרטגיה הדיגיטלית שלך. התהליך שלנו כולל מחקר משתמשים מעמיק, אפיון מוצר מפורט, עיצוב ממשק וחוויית משתמש מוקפדים, ויצירת אב-טיפוס לבדיקה.
                </p>
            )}
            {service.title === 'קידום אורגני (SEO)' && (
                <p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-2'>
                    אנחנו נדאג שהאתר שלך יופיע בראש תוצאות החיפוש בגוגל. אנחנו מבצעים אופטימיזציה מקיפה למנועי חיפוש, כולל מחקר מילות מפתח, בניית קישורים ושיפור תוכן.
                </p>
            )}
            {service.title === 'קידום ממומן (PPC)' && (
                <p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-2'>
                    אנחנו מנהלים קמפיינים ממומנים בגוגל ובפלטפורמות נוספות, תוך התמקדות במקסום החזר ההשקעה (ROI) שלך.
                </p>
            )}
            {service.title === 'תחזוקה ותמיכה' && (
                <p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-2'>
                    אנחנו כאן בשבילך גם אחרי שהאתר או האפליקציה שלך באוויר. אנחנו מציעים שירותי תחזוקה שוטפים, עדכוני אבטחה ותמיכה טכנית מלאה.
                </p>
            )}
            {service.title === 'ליווי אישי' && (
                <p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-2'>
                    אנחנו מאמינים בליווי אישי ומקצועי לאורך כל הדרך. הצוות המנוסה שלנו זמין עבורך בכל שאלה ובקשה, מהייעוץ הראשוני ועד להשקה המוצלחת ולאחריה.
                </p>
            )}
        </motion.div>
    );
};

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedService, setExpandedService] = useState(null);

  const services1 = [
    { icon: Smartphone, title: 'פיתוח PWAs', description: 'חווית משתמש כמו אפליקציה, ישירות בדפדפן. מהירות, התקנה ואופליין.' },
    { icon: Code, title: 'אתרים ואפליקציות', description: 'בניית אתרים רספונסיביים ואפליקציות מובייל בטכנולוגיות מתקדמות.' },
    { icon: Zap, title: 'אופטימיזציית ביצועים', description: 'שיפור מהירות טעינה לשיפור חוויית משתמש, SEO והמרות.' },
    { icon: Layers, title: "אסטרטגיה דיגיטלית ו-UX/UI", description: "מחקר משתמשים, אפיון מוצר, עיצוב ממשק וחוויה, ויצירת אב-טיפוס." },
  ];

  const services2 = [
    { icon: Globe, title: 'קידום אורגני (SEO)', description: 'אופטימיזציה למנועי חיפוש להגדלת תנועה אורגנית.' },
    { icon: LineChart, title: 'קידום ממומן (PPC)', description: 'ניהול קמפיינים ממומנים בגוגל ופלטפורמות נוספות.' },
    { icon: Settings, title: 'תחזוקה ותמיכה', description: 'שירותי תחזוקה, עדכוני אבטחה ותמיכה טכנית.' },
    { icon: Users, title: 'ליווי אישי', description: 'צוות מנוסה שמלווה אותך לאורך כל התהליך.' },
  ];

  const featuresRef = useRef(null);
  const maxHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const minHeight = 500;

  const { scrollYProgress } = useScroll({
    target: featuresRef,
    offset: ["start start", "end start"],
  });

  const heightValue = useTransform(scrollYProgress, [0, 1], [maxHeight, minHeight]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const blurValueNumeric = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 8, 16]);
  const heightSpring = useSpring(heightValue, { stiffness: 80, damping: 30 });
  const scaleSpring = useSpring(scaleValue, { stiffness: 80, damping: 30 });
  const blurSpring = useSpring(blurValueNumeric, { stiffness: 80, damping: 30 });
  const blurFilter = useTransform(blurSpring, (v) => `blur(${v}px)`);

  const toggleServiceDetails = (index) => {
    setExpandedService((prev) => (prev === index ? null : index));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    expanded: { backgroundColor: 'rgba(255, 255, 255, 0.95)', scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const getService2StartIndex = () => services1.length;

  return (
        <section ref={featuresRef} className="relative p-3 bg-black">
          {/* רקע עם אנימציה */}
          <motion.div
            style={{
              height: heightSpring,
              scale: scaleSpring,
              filter: blurFilter,
              willChange: 'height, transform, filter',
            }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg" // הוספת overflow: hidden
          >
            <div className="absolute inset-0 z-0">
              <img
                src={featuresBackground}
                alt="Features Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />
   
            {/* תוכן - בתוך ה-motion.div, אבל עם z-index גבוה */}
            <div className="relative z-10 p-4 sm:p-8 md:p-12 lg:p-16 flex-grow flex flex-col justify-center">
                        {/* ... (כותרת ופסקה נשארים זהים) ... */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 font-arimo text-black"
              >
                בונים עתיד דיגיטלי ביחד
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-center text-lg sm:text-xl md:text-2xl font-amatic mb-4 sm:mb-6 text-black"
              >
                הופכים את הרעיונות שלך למציאות דיגיטלית מתקדמת.
              </motion.p>
   
              <div className="flex justify-center mb-4 sm:mb-6">
                <button
                  className={`py-2 px-4 sm:px-6 rounded-tl-md rounded-bl-md font-semibold transition-colors duration-300 ${
                    activeTab === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab(0)}
                >
                  שירותי פיתוח
                </button>
                <button
                  className={`py-2 px-4 sm:px-6 rounded-tr-md rounded-br-md font-semibold transition-colors duration-300 ${
                    activeTab === 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  שירותים נוספים
                </button>
              </div>
   
                            {/*  AnimatePresence  נשאר, אבל עם overflow:hidden */}
              <AnimatePresence initial={false} >
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={cardVariants}
                  className="container mx-auto"
                                  style={{overflow: 'hidden'}} // הוספת overflow: hidden
   
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {
                      (activeTab === 0 ? services1 : services2).map((service, index) => {
                        const serviceIndex =
                          activeTab === 0 ? index : index + getService2StartIndex();
                        return (
                          <div key={serviceIndex}>
                            <motion.div
                              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md flex items-center p-3 sm:p-4 transition-all duration-300 hover:shadow-lg cursor-pointer gap-4 sm:gap-6"
                              onClick={() => toggleServiceDetails(serviceIndex)}
                              variants={cardVariants}
                              animate={
                                expandedService === serviceIndex ? "expanded" : "visible"
                              }
                              whileHover={{ scale: 1.02 }}
                            >
                              <FeatureIcon Icon={service.icon} />
                              <div>
                                <h3 className="text-base sm:text-lg font-semibold text-[#2D2D2D]">
                                  {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </motion.div>
                            <AnimatePresence>
                              {expandedService === serviceIndex && (
                                <ServiceDetails service={service} />
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })
                    }
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </section>
      );
    };

export default Features;