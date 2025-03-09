import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Code, Zap, Globe, ArrowRight } from 'lucide-react';

/**
 * @description דף צור קשר מתקדם עם אפקטים ויזואליים מרהיבים
 * @version 2.0 - Ultra Edition
 */
const ContactPage = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // עקיבת תנועת עכבר
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // אפקט נראות מושהה - נותן לעמוד להתרנדר לפני הצגת אנימציות
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // מעקב המרות
  useEffect(() => {
    if (window?.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'צור קשר',
        page_location: window.location.href,
        page_path: window.location.pathname
      });
      
      window.gtag('event', 'conversion', {
        send_to: 'AW-16893794531/gRzRCNmU66IaEOOxy_c-'
      });
    }
    
    // סגנונות גלובליים
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      @keyframes scanline {
        0% {
          transform: translateY(-100%);
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          transform: translateY(100%);
          opacity: 0;
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 0.5;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.1);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      @keyframes border-glow {
        0%, 100% {
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
        50% {
          border-color: rgba(99, 102, 241, 0.6);
          box-shadow: 0 0 25px rgba(99, 102, 241, 0.6);
        }
      }
      
      @keyframes text-flicker {
        0%, 100% {
          opacity: 1;
        }
        41.99% {
          opacity: 1;
        }
        42% {
          opacity: 0.8;
        }
        43% {
          opacity: 1;
        }
        45% {
          opacity: 0.3;
        }
        45.5% {
          opacity: 1;
        }
        50% {
          opacity: 0.9;
        }
        54.5% {
          opacity: 1;
        }
        55% {
          opacity: 0.4;
        }
        57% {
          opacity: 1;
        }
      }
      
      .glitch:hover {
        animation: text-flicker 2s linear forwards;
      }
      
      .bg-orbs {
        z-index: 0;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
      
      .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.3;
        animation: pulse 8s ease-in-out infinite, float 15s ease-in-out infinite;
      }
      
      .hexagon-overlay {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill='%235b6ff9' fill-opacity='0.05'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E");
      }
      
      .scanline::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background: linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), transparent);
        animation: scanline 4s linear infinite;
      }
      
      .glow-card {
        border: 2px solid transparent;
        animation: border-glow 4s ease-in-out infinite;
        animation-play-state: paused;
      }
      
      .glow-card:hover {
        animation-play-state: running;
      }
      
      .tech-border {
        position: relative;
        border: 1px solid rgba(59, 130, 246, 0.3);
      }
      
      .tech-border::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        width: 10px;
        height: 10px;
        border-top: 2px solid rgba(59, 130, 246, 0.8);
        border-left: 2px solid rgba(59, 130, 246, 0.8);
      }
      
      .tech-border::after {
        content: '';
        position: absolute;
        bottom: -1px;
        right: -1px;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid rgba(59, 130, 246, 0.8);
        border-right: 2px solid rgba(59, 130, 246, 0.8);
      }
      
      .cyber-button {
        position: relative;
        z-index: 1;
        overflow: hidden;
      }
      
      .cyber-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid white;
        border-left: 2px solid white;
        transition: all 0.25s ease;
      }
      
      .cyber-button::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        transition: all 0.25s ease;
      }
      
      .cyber-button:hover::before, 
      .cyber-button:hover::after {
        width: 20px;
        height: 20px;
      }
    `;
    document.head.appendChild(styleElement);
    
    // עדכון כותרת הדף
    document.title = "צור קשר | גאיה-טק - פתרונות טכנולוגיים";
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // אנימציות 
  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: i => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 50, 
        damping: 12,
        delay: 0.3 + (i * 0.1)
      }
    }),
    hover: {
      y: -15,
      scale: 1.05,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };
  
  const titleLetterVariants = {
    hidden: { 
      opacity: 0, 
      y: -20
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };
  
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95 
    }
  };
  
  // פונקציה להוספת אפקט אינטראקטיבי לרקע
  const calculateMouseEffect = (baseX, baseY, strength = 20) => {
    if (!isVisible) return {};
    
    // חישוב הזחה על פי מיקום העכבר
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const moveX = (mousePosition.x - (windowWidth / 2)) / (windowWidth / 2) * strength;
    const moveY = (mousePosition.y - (windowHeight / 2)) / (windowHeight / 2) * strength;
    
    return {
      transform: `translate(calc(${baseX}% + ${moveX}px), calc(${baseY}% + ${moveY}px))`
    };
  };
  
  // גישה מתקדמת לסידור הכרטיסים
  const getCardColors = (type) => {
    switch(type) {
      case 'phone':
        return {
          bgFrom: 'from-blue-600/20',
          bgTo: 'to-blue-900/30',
          iconBgFrom: 'from-blue-600',
          iconBgTo: 'to-blue-800',
          textColor: 'text-blue-200',
          borderColor: 'border-blue-500/30',
          glowColor: 'rgba(59, 130, 246, 0.5)'
        };
      case 'email':
        return {
          bgFrom: 'from-indigo-600/20',
          bgTo: 'to-indigo-900/30',
          iconBgFrom: 'from-indigo-600',
          iconBgTo: 'to-indigo-800',
          textColor: 'text-indigo-200',
          borderColor: 'border-indigo-500/30',
          glowColor: 'rgba(99, 102, 241, 0.5)'
        };
      case 'location':
        return {
          bgFrom: 'from-violet-600/20',
          bgTo: 'to-violet-900/30',
          iconBgFrom: 'from-violet-600',
          iconBgTo: 'to-violet-800',
          textColor: 'text-violet-200',
          borderColor: 'border-violet-500/30',
          glowColor: 'rgba(139, 92, 246, 0.5)'
        };
      default:
        return {
          bgFrom: 'from-gray-600/20',
          bgTo: 'to-gray-900/30',
          iconBgFrom: 'from-gray-600',
          iconBgTo: 'to-gray-800',
          textColor: 'text-gray-200',
          borderColor: 'border-gray-500/30',
          glowColor: 'rgba(100, 100, 100, 0.5)'
        };
    }
  };
  
  return (
    <div className="min-h-screen w-full py-16 text-white overflow-x-hidden" ref={containerRef}
         style={{
           background: 'linear-gradient(to bottom, #0c1129, #070a1b)',
           backgroundAttachment: 'fixed',
           position: 'relative'
         }}>
      
      {/* רקע משודרג */}
      <div className="fixed inset-0 z-[-3]">
        {/* שכבת גרדיאנט רקע */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black/40 to-indigo-900/10"></div>
        
        {/* שכבת רשת מתקדמת */}
        <div className="absolute inset-0 opacity-20 hexagon-overlay"></div>
        
        {/* שכבת גריד */}
        <div className="absolute inset-0 z-[-1] opacity-30"
             style={{
               backgroundImage: `
                 linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>
      
      {/* שכבת אורות רקע אינטראקטיבית */}
      <div className="bg-orbs">
        <div className="orb" 
             style={{
               width: '250px', 
               height: '250px', 
               left: '10%', 
               top: '20%', 
               backgroundColor: 'rgba(30, 64, 175, 0.15)',
               animationDelay: '0s',
               ...calculateMouseEffect(10, 20, -10)
             }}>
        </div>
        <div className="orb" 
             style={{
               width: '350px', 
               height: '350px', 
               right: '10%', 
               top: '10%', 
               backgroundColor: 'rgba(79, 70, 229, 0.15)',
               animationDelay: '1s',
               ...calculateMouseEffect(90, 10, -15)
             }}>
        </div>
        <div className="orb" 
             style={{
               width: '200px', 
               height: '200px', 
               left: '20%', 
               bottom: '20%', 
               backgroundColor: 'rgba(147, 51, 234, 0.15)',
               animationDelay: '2s',
               ...calculateMouseEffect(20, 80, -8)
             }}>
        </div>
        <div className="orb" 
             style={{
               width: '300px', 
               height: '300px', 
               right: '15%', 
               bottom: '15%', 
               backgroundColor: 'rgba(59, 130, 246, 0.15)',
               animationDelay: '3s',
               ...calculateMouseEffect(85, 85, -12)
             }}>
        </div>
      </div>
      
      {/* אפקט סריקת קו */}
      <div className="fixed inset-0 scanline pointer-events-none z-10"></div>

      {/* תוכן ראשי */}
      <div className="container mx-auto px-4 relative z-10">
        {/* כותרת עם אפקט גליץ' */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16 relative"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-8 relative inline-block glitch">
            {/* כותרת עם אפקט רחף על כל אות */}
            <span className="absolute -top-1 -left-1 text-red-500/20 blur-sm">צור קשר</span>
            <span className="absolute -bottom-1 -right-1 text-blue-500/20 blur-sm">צור קשר</span>
            
            {/* אנימציה של אותיות בודדות */}
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-400">
              {"צור קשר".split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={titleLetterVariants}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto relative"
          >
            <span className="text-blue-300">חדשנות טכנולוגית</span>{' '}
            פתרונות מתקדמים שמותאמים{' '}
            <span className="text-indigo-300">בדיוק לצרכים שלך</span>
          </motion.p>
          
          {/* סמלי טכנולוגיה צפים */}
          <div className="flex justify-center gap-10 mt-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <Code className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}
            >
              <Zap className="w-8 h-8 text-indigo-400" />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              style={{ animation: 'float 3s ease-in-out infinite 1s' }}
            >
              <Globe className="w-8 h-8 text-violet-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* כרטיסי קשר משודרגים עם אנימציות מתקדמות */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* כרטיסי קשר */}
          {['phone', 'email', 'location'].map((type, index) => {
            const colors = getCardColors(type);
            let icon, title, content, link, linkText, subContent;
            
            switch(type) {
              case 'phone':
                icon = <Phone className="w-8 h-8 text-white" />;
                title = "טלפון";
                content = "054-6997625";
                link = "tel:054-6997625";
                linkText = "התקשרו עכשיו";
                subContent = "זמינים בימים א׳-ה׳, 09:00-18:00";
                break;
              case 'email':
                icon = <Mail className="w-8 h-8 text-white" />;
                title = "אימייל";
                content = "lironkane1@gmail.com";
                link = "mailto:lironkane1@gmail.com";
                linkText = "שלחו אימייל";
                subContent = "מענה תוך יום עסקים";
                break;
              case 'location':
                icon = <MapPin className="w-8 h-8 text-white" />;
                title = "כתובת";
                content = "ישראל";
                link = null;
                linkText = null;
                subContent = "שירות דיגיטלי בכל רחבי הארץ";
                break;
              default:
                icon = null;
                title = "";
                content = "";
                link = null;
                subContent = "";
            }
            
            return (
              <motion.div
                key={type}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                className={`glow-card tech-border flex flex-col items-center p-10 relative rounded-xl backdrop-blur-lg shadow-xl overflow-hidden ${colors.borderColor}`}
                onMouseEnter={() => setActiveCard(type)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* רקע אינטראקטיבי */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${colors.bgFrom} ${colors.bgTo} z-0`}
                  animate={{
                    background: activeCard === type 
                      ? `linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(79, 70, 229, 0.3))`
                      : `linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(79, 70, 229, 0.1))`
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* פס דק עליון */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                
                {/* תוכן הכרטיס */}
                <div className="relative z-10 w-full">
                  {/* אייקון מרחף */}
                  <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${colors.iconBgFrom} ${colors.iconBgTo} shadow-lg`} 
                       style={{ animation: 'float 3s ease-in-out infinite' }}>
                    {icon}
                  </div>
                  
                  {/* כותרת */}
                  <h3 className={`text-2xl font-bold mb-3 text-center ${colors.textColor}`}>{title}</h3>
                  
                  {/* תוכן */}
                  <p className="text-gray-300 text-center text-lg mb-6">{content}</p>
                  
                  {/* תוכן משני */}
                  <p className="text-gray-400/60 text-center text-sm mb-6">{subContent}</p>
                  
                  {/* לינק */}
                  {link && (
                    <motion.a
                      href={link}
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-2 justify-center mt-4 ${colors.textColor} hover:opacity-80 transition-opacity text-sm`}
                    >
                      {linkText} <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* כפתורי פעולה */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center relative"
        >
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-indigo-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              מוכנים להתחיל?
            </h3>
            
            <p className="text-gray-300 mb-8">
              צוות המומחים שלנו זמין לענות על כל שאלה ולהציע פתרונות שיתאימו בדיוק לצרכים שלך
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* כפתור וואטסאפ */}
              <motion.a
                href="https://api.whatsapp.com/send?phone=972546997625&text=היי%20גאיה-טק%20אני%20מתעניין%20ב..."
                target="_blank"
                rel="noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="cyber-button flex items-center justify-center gap-3 px-8 py-4 
                       bg-gradient-to-r from-green-600 to-green-700
                       text-white font-bold rounded-md shadow-lg"
                onClick={() => {
                  if (window?.gtag) {
                    window.gtag('event', 'conversion', {
                      send_to: 'AW-16893794531/gRzRCNmU66IaEOOxy_c-'
                    });
                  }
                }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>שלחו הודעה בוואטסאפ</span>
              </motion.a>
              
              {/* כפתור אימייל */}
              <motion.a
                href="mailto:lironkane1@gmail.com?subject=פנייה%20מאתר%20גאיה-טק"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="cyber-button flex items-center justify-center gap-3 px-8 py-4
                       bg-gradient-to-r from-blue-600 to-indigo-700
                       text-white font-bold rounded-md shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>שליחת אימייל</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        {/* טקסט תחתון */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center relative"
        >
          <div className="relative py-6">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            <p className="relative z-10 bg-[#0c1129] inline-block px-6 text-blue-400 text-sm tracking-wider">
              גאיה-טק | טכנולוגיה מתקדמת
            </p>
          </div>
          
          <p className="mt-4 text-sm text-gray-500 max-w-md mx-auto">
            © {new Date().getFullYear()} כל הזכויות שמורות. גאיה-טק פתרונות טכנולוגיים.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;