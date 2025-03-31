import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Heart, ThumbsUp } from 'lucide-react';

const ProfessionalReviews = () => {
  // פונקציה להצגת כוכבים לפי דירוג
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    
    for (let i = 0; i < maxStars; i++) {
      if (i < rating) {
        // כוכב מלא
        stars.push(
          <Star 
            key={i} 
            className="text-amber-400 fill-amber-400" 
            size={20} 
          />
        );
      } else {
        // כוכב ריק
        stars.push(
          <Star 
            key={i} 
            className="text-gray-300" 
            size={20} 
          />
        );
      }
    }
    
    return stars;
  };

  // המלצות מורחבות עם מגוון רחב יותר של לקוחות
  const [reviews] = useState([
    {
      id: 1,
      author: "ד״ר אברהם כהן",
      role: "מנהל מחלקה כירורגית",
      rating: 5,
      content: "האתר הביא למרפאה שלנו תנועה משמעותית של מטופלים חדשים. הצוות המקצועי הבין בדיוק את הצרכים הייחודיים של הקליניקה והצליח לתרגם אותם לחוויית משתמש מעולה. המערכת לקביעת תורים חסכה לנו המון זמן ומשאבים.",
      projectType: "אתר למרפאה כירורגית",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      author: "שרית לוי",
      role: "מנכ\"לית חברת נדל\"ן",
      rating: 5,
      content: "אתר הנדל\"ן החדש שלנו הוא מנוע צמיחה אמיתי לעסק. הצוות איתר בדיוק את הצרכים שלנו והציע פתרונות חכמים שהפכו את האתר לכלי מכירה אפקטיבי. הנכסים מוצגים בצורה מושכת וברורה, והלידים שמגיעים מהאתר איכותיים במיוחד.",
      projectType: "אתר נדל\"ן עם מערכת ניהול נכסים",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      author: "אייל ברקוביץ'",
      role: "בעלים של רשת מסעדות",
      rating: 5,
      content: "ההחלטה להשקיע באתר חדש הייתה אחת ההחלטות העסקיות הטובות ביותר שעשינו. המערכת לביצוע הזמנות אונליין הגדילה את המכירות שלנו ב-40% תוך שלושה חודשים. העיצוב המרהיב משקף את האווירה במסעדות שלנו והתוצאה היא פשוט מושלמת.",
      projectType: "אתר הזמנות למסעדות",
      imageUrl: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      id: 4,
      author: "ד״ר שרון מזרחי",
      role: "רופאת עיניים",
      rating: 5,
      content: "האתר החדש שיפר משמעותית את הנגישות למרפאה. המטופלים מדווחים על חווית משתמש מצוינת וקלות בקביעת תורים. ההשקעה השתלמה מאוד, והאתר מביא לנו לקוחות חדשים באופן קבוע. גם הדירוג שלנו בגוגל השתפר מאז שהאתר עלה לאוויר.",
      projectType: "אתר מרפאת עיניים",
      imageUrl: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 5,
      author: "לילך דוד",
      role: "מנהלת קליניקת אסתטיקה",
      rating: 5,
      content: "העיצוב המודרני והמקצועי של האתר משקף בדיוק את הרמה הגבוהה של הקליניקה שלנו. מערכת ניהול התורים חסכה לנו המון זמן והתייעלות משמעותית בעבודה. התמונות והסרטונים מוצגים בצורה אלגנטית, והטקסטים נכתבו בצורה שמעבירה בדיוק את המסר שרצינו.",
      projectType: "אתר לקליניקת אסתטיקה",
      imageUrl: "https://randomuser.me/api/portraits/women/39.jpg"
    },
    {
      id: 6,
      author: "עמית גולדברג",
      role: "מנכ\"ל חברת סטארט-אפ",
      rating: 5,
      content: "היינו צריכים דף נחיתה שיגרום למשקיעים פוטנציאליים להתעניין במוצר, והתוצאה עלתה על כל הציפיות. הדף נקי, מקצועי ומעביר בדיוק את המסר הנכון. קיבלנו כבר עשרות פניות ממשקיעים רציניים בעקבות הדף, ואנחנו בדרך לסבב השקעה מוצלח.",
      projectType: "דף נחיתה לסטארט-אפ",
      imageUrl: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      id: 7,
      author: "מירב כהן",
      role: "מנהלת קליניקת קוסמטיקה",
      rating: 5,
      content: "התוצאה הסופית מדהימה. האתר לא רק נראה מקצועי ויוקרתי, אלא גם מייצר המרות גבוהות ומושך לקוחות חדשים. הייחודיות של העיצוב מבדילה אותנו מהמתחרים, והשירות שקיבלנו היה מעל ומעבר למצופה. תודה על העבודה המושקעת והמקצועית.",
      projectType: "אתר קליניקת קוסמטיקה",
      imageUrl: "https://randomuser.me/api/portraits/women/76.jpg"
    },
    {
      id: 8,
      author: "אלון מזרחי",
      role: "בעלים של חנות אופנה",
      rating: 5,
      content: "חנות האופנה המקוונת שנבנתה עבורנו היא פשוט מושלמת. המערכת קלה לניהול, העיצוב מרהיב והמכירות זינקו כבר בחודש הראשון. התהליך היה מקצועי מההתחלה ועד הסוף, וקיבלנו הדרכה מקיפה לניהול המערכת. ממליץ בחום!",
      projectType: "חנות אופנה מקוונת",
      imageUrl: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      id: 9,
      author: "דניאל לוי",
      role: "יועץ עסקי",
      rating: 5,
      content: "האתר התדמיתי שנבנה עבורי סייע לי לבנות נוכחות מקצועית ברשת שמושכת לקוחות איכותיים. הצוות היה קשוב לכל בקשה, גם כשדרשתי שינויים ותוספות במהלך העבודה. האתר נטען במהירות, מותאם לנייד בצורה מושלמת, ומקדם אותי היטב בתוצאות החיפוש.",
      projectType: "אתר תדמיתי ליועץ עסקי",
      imageUrl: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 10,
      author: "עדי רוזנברג",
      role: "בעלת עסק לעיצוב פנים",
      rating: 5,
      content: "התיק עבודות הדיגיטלי שנבנה עבורי הוא הכרטיס ביקור המושלם לעסק שלי. הלקוחות מתרשמים מהעיצוב המוקפד ומהאופן שבו העבודות שלי מוצגות. האתר קל לעדכון, ואני יכולה להוסיף פרויקטים חדשים בקלות. ההשקעה הוחזרה לי כבר בחודשים הראשונים.",
      projectType: "תיק עבודות דיגיטלי",
      imageUrl: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      id: 11,
      author: "רון אביב",
      role: "מנכ\"ל חברת פיננסים",
      rating: 5,
      content: "האתר התדמיתי שנבנה לחברה שלנו העלה את הפרופיל המקצועי שלנו לרמה חדשה. העיצוב המוקפד והתוכן האיכותי משדרים אמינות ומקצועיות, ואנחנו מקבלים תגובות נלהבות מלקוחות ומשותפים עסקיים. מערכת ניהול התוכן נוחה מאוד לשימוש, וזה חשוב במיוחד בתחום שלנו.",
      projectType: "אתר תדמיתי לחברת פיננסים",
      imageUrl: "https://randomuser.me/api/portraits/men/72.jpg"
    },
    {
      id: 12,
      author: "מיכל ברק",
      role: "בעלת חנות מוצרי טבע",
      rating: 5,
      content: "החנות המקוונת שלנו צמחה פי שלושה מאז שהשקנו את האתר החדש. הממשק נוח למשתמש, התמונות מוצגות בצורה מושכת, ותהליך הרכישה פשוט וברור. זה בדיוק מה שרצינו - חנות שמקלה על הלקוחות לרכוש את המוצרים שלנו. תודה על העבודה המעולה!",
      projectType: "חנות מקוונת למוצרי טבע",
      imageUrl: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  ]);

  // מצב והתנהגות הסליידר
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // בדיקה למסך מובייל
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // בדיקה ראשונית והוספת האזנה לשינוי גודל החלון
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  // אוטו-פליי עם אפשרות להשהייה
  useEffect(() => {
    let interval;
    
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000); // החלפת סלייד כל 5 שניות
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlay, reviews.length]);

  // פונקציות ניווט
  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };
  
  // טיפול באירועי מגע למכשירים ניידים
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // החלקה שמאלה - המלצה הבאה
      handleNext();
    } else if (touchStart - touchEnd < -100) {
      // החלקה ימינה - המלצה קודמת
      handlePrev();
    }
  };
  
  // עצירת/הפעלת האוטו-פליי
  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };
  
  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };
  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* אלמנטים דקורטיביים */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-purple-200 to-pink-200 rounded-full mix-blend-multiply opacity-10 blur-3xl animate-blob"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-violet-200 to-purple-200 rounded-full mix-blend-multiply opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-20 left-20 w-12 h-12 bg-purple-400 rounded-full opacity-10 animate-ping animation-delay-3000"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-10 animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-indigo-400 rounded-full opacity-10 animate-ping animation-delay-2000"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* כותרת ראשית עם אפקט זוהר */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
              <span className="relative">
                לקוחות ממליצים
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-gradient-to-r from-purple-200 to-pink-200 opacity-60 rounded-full -z-10 transform animate-pulse"></span>
              </span>
            </h2>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4 animated-gradient-text">
            המומחים מספרים על החוויה שלהם בפיתוח אתרים ודפי נחיתה
          </p>
        </div>

        {/* מכלול הסליידר */}
        <div 
          className="relative shadow-2xl rounded-3xl overflow-hidden bg-white/95 backdrop-blur-sm border border-purple-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* כפתורי ניווט */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/90 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 shadow-lg transition-all duration-300 transform hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-purple-200/50"
            aria-label="המלצה קודמת"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-purple-600 transform group-hover:-translate-x-1 transition-all" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/90 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 shadow-lg transition-all duration-300 transform hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-purple-400 hover:shadow-purple-200/50"
            aria-label="המלצה הבאה"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-all" />
          </button>

          {/* קונטיינר הסליידר עם תמיכה ב-RTL */}
          <div dir="rtl" className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="w-full flex-shrink-0 p-4 md:p-8"
                >
                  <div className="max-w-4xl mx-auto h-full">
                    <div 
                      className="bg-white rounded-2xl border border-purple-100 shadow-lg h-full
                              transform transition-all duration-500 hover:shadow-xl hover:shadow-purple-100/50 p-6 md:p-8
                              hover:border-purple-200 backdrop-blur-sm"
                    >
                      {/* מרכאות דקורטיביות */}
                      <div className="absolute top-6 right-6 text-gradient-purple opacity-30">
                        <Quote size={50} strokeWidth={1} className="animate-pulse-slow" />
                      </div>
                      
                      <div className="flex flex-col h-full">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                          {/* פרטי הכותב וכוכבים */}
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-purple-200 shadow-inner p-0.5 bg-gradient-to-r from-purple-100 to-pink-100 transform transition-transform duration-300 hover:scale-105">
                                <img 
                                  src={review.imageUrl} 
                                  alt={review.author} 
                                  className="w-full h-full object-cover rounded-full"
                                  onError={(e) => {
                                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author)}&background=8B5CF6&color=fff`;
                                  }}
                                />
                              </div>
                              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-1 shadow-md">
                                <ThumbsUp size={12} className="fill-white" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
                                {review.author}
                              </h3>
                              <p className="text-gray-500 text-sm">{review.role}</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-1 mt-2 md:mt-0 animate-in slide-in-from-right">
                            {renderStars(review.rating)}
                          </div>
                        </div>

                        {/* סוג הפרויקט */}
                        <div className="inline-block mb-6 self-start px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50
                                    border border-purple-200 rounded-full text-purple-700 text-sm font-medium
                                    hover:from-purple-100 hover:to-pink-100 hover:border-purple-300 transition-all duration-300 shadow-sm">
                          <div className="flex items-center gap-2">
                            <Award size={14} className="text-pink-500" />
                            {review.projectType}
                          </div>
                        </div>

                        {/* תוכן המלצה */}
                        <p className="text-gray-700 text-lg leading-relaxed flex-grow">
                          "{review.content}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* חלק תחתון - מידע וניווט */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-t border-purple-100 p-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* מידע על מספר המלצה */}
              <div className="text-gray-600 font-medium text-sm">
                המלצה {currentIndex + 1} מתוך {reviews.length}
              </div>
              
              {/* נקודות ניווט */}
              <div className="flex justify-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`transition-all duration-300 focus:outline-none ${
                      index === currentIndex 
                        ? 'w-10 h-2 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    } rounded-full hover:scale-110`}
                    aria-label={`המלצה ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* טקסט מעודד */}
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 font-medium">
                <Heart size={14} className="text-pink-500 fill-pink-500 animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 font-bold">100%</span> מהלקוחות מרוצים
              </div>
            </div>
          </div>
        </div>
        
        {/* כפתור קריאה לפעולה */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-purple-300/30 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 group"
          >
            <span className="mr-2">רוצה אתר מקצועי כזה?</span>
            <span className="bg-white text-purple-600 py-1 px-3 rounded-full text-sm font-bold group-hover:bg-purple-100 transition-colors">צור קשר עכשיו</span>
          </a>
        </div>
      </div>
      
      {/* סגנונות CSS */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(147, 51, 234, 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(147, 51, 234, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .text-gradient-purple {
          background: linear-gradient(to right, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .animated-gradient-text {
          background-size: 200% auto;
          background-image: linear-gradient(to right, #8b5cf6, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s ease-in-out infinite;
          display: inline-block;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        
        .animate-in {
          animation: animateIn 0.3s ease-out forwards;
        }
        
        @keyframes animateIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-in-from-right {
          animation: slideInFromRight 0.5s ease-out forwards;
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProfessionalReviews;