import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Users, Target, Sparkles, Heart, Shield, Award } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: Lightbulb,
      title: "פתרונות חכמים",
      description: "טכנולוגיות מתקדמות ופתרונות AI חדשניים שיקפיצו את העסק שלך לרמה הבאה",
      delay: 0.2,
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Target,
      title: "ליווי מותאם אישית",
      description: "נבנה יחד אסטרטגיה מדויקת ופתרון המושלם בדיוק לצרכים העסקיים שלך",
      delay: 0.4,
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: Users,
      title: "צוות מקצועי ותומך",
      description: "מומחי פיתוח ושיווק דיגיטלי זמינים תמיד לעזור ולהוביל אותך להצלחה",
      delay: 0.6,
      gradient: "from-violet-400 to-purple-600"
    }
  ];

  const achievements = [
    { number: "15+", text: "שנות מומחיות" },
    { number: "250+", text: "פרויקטים מוצלחים" },
    { number: "24/7", text: "תמיכה אישית" }
  ];

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-100" 
      aria-label="Contact CTA Section - Tech Start: צור קשר להתחלת הצמיחה העסקית שלך"
    >
      <Helmet>
        <title>צרו קשר | Tech-Start - פיתוח אתרים וייעוץ שיווקי</title>
        <meta name="description" content="צרו קשר עם Tech-Start לקבלת פתרונות פיתוח אתרים ושיווק דיגיטלי חכמים ומותאמים אישית. צוות מקצועי זמין לליווי צמיחת העסק שלך." />
        <meta name="keywords" content="צור קשר, פיתוח אתרים, שיווק דיגיטלי, ייעוץ שיווקי, פתרונות חכמים, ליווי אישי, צוות מקצועי, קליניקות, רופאים, רופאי שיניים, בניית אתרים לרופאים, בניית אתרים לרופאי שיניים" />
      </Helmet>
      
      {/* Light & pleasant background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient orbs with subtle animation */}
        <div className="absolute top-0 left-0 w-[70%] h-[60%] bg-gradient-to-r from-purple-200/40 via-indigo-200/30 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-0 right-0 w-[70%] h-[60%] bg-gradient-to-l from-pink-200/40 via-fuchsia-200/30 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '14s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-gradient-to-t from-blue-200/30 via-cyan-200/20 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0iIzg4OCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIuNSIgZD0iTTAgMGg2MHY2MEgweiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 8 + 10}s infinite ease-in-out ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          {/* Main content area */}
          <div className="flex flex-col items-center">
            {/* Header and intro section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 px-6 py-3 rounded-full mb-8 border border-indigo-100 shadow-sm"
              >
                <Heart className="w-5 h-5 text-indigo-500" />
                <span className="font-medium">
                  בואו נצמח יחד לגבהים חדשים
                </span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-8 tracking-tight"
              >
                <span className="block text-gray-800 mb-3">
                  נלווה אותך
                </span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  בדרך להצלחה
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                הצוות המקצועי שלנו מתמחה בבניית פתרונות דיגיטליים מתקדמים
                <span className="mx-1 text-indigo-700 font-medium">שיקפיצו את העסק שלך</span>
                עם טכנולוגיות חדישות המותאמות בדיוק לצרכים שלך
              </motion.p>
            </motion.div>

            {/* Features section (3 cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 w-full relative">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden"
                >
                  <div className="relative rounded-2xl p-8 h-full z-10 bg-white border border-indigo-50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-transparent to-indigo-50 rounded-bl-3xl"></div>
                    
                    <div className="relative z-10">
                      {/* Feature icon with gradient background */}
                      <div className={`w-16 h-16 mb-6 rounded-xl p-0.5 bg-gradient-to-br ${feature.gradient}`}>
                        <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                          <feature.icon className="w-8 h-8 text-gray-800" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA section with animated button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center max-w-2xl mx-auto mb-20"
            >
              <div className="mb-10">
                <span className="inline-flex items-center gap-2 text-amber-700 bg-amber-50 px-6 py-3 rounded-full mb-8 border border-amber-100 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">
                    מבצע מיוחד - 15% הנחה למצטרפים החודש
                  </span>
                </span>
              </div>
              
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-xl font-bold relative overflow-hidden group shadow-lg"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <span className="absolute top-0 left-0 w-full h-full">
                    <span className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.purple.500)_0%,theme(colors.indigo.500)_10%,theme(colors.purple.500)_20%)] opacity-0 group-hover:opacity-20" style={{
                      '--shimmer-angle': '0deg',
                      animation: 'spin 2.5s linear infinite',
                      backgroundSize: '200% 200%'
                    }}></span>
                  </span>
                  
                  <Award className="w-6 h-6 text-white relative z-10" />
                  <span className="relative z-10">בוא נתחיל יחד</span>
                  <ArrowLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-2 relative z-10" />
                </motion.div>
              </Link>

              <p className="mt-6 text-gray-500 text-md">
                פגישת היכרות וייעוץ ללא עלות | תכנית אסטרטגית מותאמת אישית
              </p>
            </motion.div>

            {/* Stats section - reduced */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-indigo-50 rounded-xl p-6 text-center shadow-lg"
                >
                  <span className="block text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">{achievement.number}</span>
                  <span className="text-gray-600 text-sm">{achievement.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust badges - reduced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-8 md:gap-16"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">100% מאובטח</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">מוביל בתעשייה</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5px, 10px); }
          50% { transform: translate(10px, -5px); }
          75% { transform: translate(-5px, 8px); }
        }
        
        @keyframes spin {
          from { --shimmer-angle: 0deg; }
          to { --shimmer-angle: 360deg; }
        }
      `}</style>
    </section>
  );
};

export default ContactCTA;