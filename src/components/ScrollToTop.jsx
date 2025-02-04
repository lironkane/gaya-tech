import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // פתרון שעובד גם ב-Netlify
    const handleScrollToTop = () => {
      try {
        // קודם ננסה את scrollTo
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      } catch (error) {
        // אם זה לא עובד, ננסה את הפתרון הפשוט יותר
        window.scrollTo(0, 0);
      }

      // גיבוי נוסף במקרה שהפתרונות הקודמים לא עבדו
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // הפעלת הפונקציה בכל שינוי נתיב
    handleScrollToTop();

    // להוסיף timeout קצר למקרה שהדף לא נטען מיד
    const timeoutId = setTimeout(handleScrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;