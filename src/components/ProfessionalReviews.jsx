import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
            className="text-yellow-400 fill-yellow-400" 
            size={18} 
          />
        );
      } else {
        // כוכב ריק
        stars.push(
          <Star 
            key={i} 
            className="text-gray-300" 
            size={18} 
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
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-gray-100">
      {/* רקע דקורטיבי */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* כותרת ראשית עם אפקט זוהר */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight relative z-10">
              <span className="relative">
                לקוחות ממליצים
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-blue-200 opacity-40 rounded-full -z-10"></span>
              </span>
            </h2>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-300 rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-10 blur-2xl"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            המומחים מספרים על החוויה שלהם בפיתוח אתרים ודפי נחיתה
          </p>
        </div>

        {/* מכלול הסליידר */}
        <div 
          className="relative shadow-xl rounded-2xl overflow-hidden bg-white"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 transform hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="המלצה קודמת"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800 transform group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 transform hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="המלצה הבאה"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800 transform group-hover:translate-x-1 transition-transform" />
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
                      className="bg-white rounded-2xl border border-gray-100 shadow-lg h-full
                              transform transition-all duration-500 hover:shadow-xl p-6 md:p-8"
                    >
                      {/* מרכאות דקורטיביות */}
                      <div className="absolute top-6 right-6 text-blue-100">
                        <Quote size={40} strokeWidth={1} />
                      </div>
                      
                      <div className="flex flex-col h-full">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                          {/* פרטי הכותב וכוכבים */}
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-blue-100">
                                <img 
                                  src={review.imageUrl} 
                                  alt={review.author} 
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author)}&background=0D8ABC&color=fff`;
                                  }}
                                />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                                {review.author}
                              </h3>
                              <p className="text-gray-600 text-sm">{review.role}</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-1 mt-2 md:mt-0">{renderStars(review.rating)}</div>
                        </div>

                        {/* סוג הפרויקט */}
                        <div className="inline-block mb-6 self-start px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100
                                    border border-blue-200 rounded-full text-blue-700 text-sm font-medium
                                    hover:border-blue-300 transition-all duration-300">
                          {review.projectType}
                        </div>

                        {/* תוכן המלצה */}
                        <p className="text-gray-700 text-lg leading-relaxed flex-grow">
                          {review.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* חלק תחתון - מידע וניווט */}
          <div className="bg-gray-50 border-t border-gray-100 p-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* מידע על מספר המלצה */}
              <div className="text-gray-500 font-medium text-sm">
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
                        ? 'w-8 h-2 bg-blue-500'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    } rounded-full hover:scale-110`}
                    aria-label={`המלצה ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* טקסט מעודד */}
              <div className="hidden md:block text-sm text-gray-500 font-medium">
                <span className="text-blue-600">100%</span> מהלקוחות מרוצים
              </div>
            </div>
          </div>
        </div>
        
        {/* כפתור קריאה לפעולה */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            רוצה אתר מקצועי כזה? צור קשר עכשיו
          </a>
        </div>
      </div>
      
      {/* סגנונות CSS */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default ProfessionalReviews;