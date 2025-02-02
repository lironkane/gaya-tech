
import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../../BackButton'; // עדכון הנתיב

const SeoContentWriting = () => {
  return (
    <div className="bg-[#FFF8F0] py-16">
      <Helmet>
        <title>מדריך לכתיבת תוכן ידידותי ל-SEO בשנת 2024 | גאיה טק</title>
        <meta
          name="description"
          content="למד איך לכתוב תוכן שגם ימשוך את הגולשים וגם יקודם בצורה אורגנית במנועי החיפוש. תוכן איכותי הוא המפתח לקידום אתרים מוצלח."
        />
        <meta
          name="keywords"
          content="כתיבת תוכן, SEO, תוכן שיווקי, אופטימיזציית תוכן, מילות מפתח, גוגל, קידום אתרים, תוכן ידידותי ל-SEO"
        />
        <meta name="author" content="גאיה טק" />
        <meta
          property="og:title"
          content="מדריך לכתיבת תוכן ידידותי ל-SEO בשנת 2024"
        />
        <meta
          property="og:description"
          content="למד איך לכתוב תוכן שגם ימשוך את הגולשים וגם יקודם בצורה אורגנית במנועי החיפוש."
        />
        <meta property="og:image" content="/images/blog/seo-content.jpg" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/blog/seo-content-writing"
        />{' '}
        {/* עדכן את ה-URL */}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="מדריך לכתיבת תוכן ידידותי ל-SEO בשנת 2024"
        />
        <meta
          name="twitter:description"
          content="למד איך לכתוב תוכן שגם ימשוך את הגולשים וגם יקודם בצורה אורגנית במנועי החיפוש."
        />
        <meta name="twitter:image" content="/images/blog/seo-content.jpg" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-8 py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-[#124A36] text-center font-secular">
          מדריך לכתיבת תוכן ידידותי ל-SEO בשנת 2024
        </h1>
        <p className="text-gray-600 mb-6 text-center font-secular">
          למד איך לכתוב תוכן שגם ימשוך את הגולשים וגם יקודם בצורה אורגנית
          במנועי החיפוש. תוכן איכותי הוא המפתח לקידום אתרים מוצלח.
        </p>
        <div className="relative group w-full max-w-sm h-auto rounded-lg mb-10 mx-auto overflow-hidden">
          <img
            src="/images/blog/seo-content.jpg"
            alt="כתיבת תוכן ידידותי ל-SEO"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#124A36]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute left-4 bottom-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-bold text-lg">כתיבת תוכן SEO</span>
          </div>
        </div>
        <article className="mx-auto font-secular">
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            מהו תוכן ידידותי ל-SEO?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            תוכן ידידותי ל-SEO הוא תוכן שנכתב בצורה שמאפשרת למנועי חיפוש
            להבין בקלות במה הוא עוסק. תוכן כזה משתמש במילות מפתח רלוונטיות,
            כתוב בצורה ברורה ומאורגנת, ומספק ערך אמיתי לגולשים.
          </p>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            טיפים לכתיבת תוכן SEO בשנת 2024
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-700 leading-relaxed">
              <strong>התמקד בנושא מרכזי:</strong> כל מאמר צריך להתמקד בנושא
              אחד מרכזי ולספק מענה מקיף ומעמיק לגולשים.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>כותרות מושכות:</strong> השתמש בכותרות ברורות ותיאוריות
              שמשלבות את מילות המפתח העיקריות.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>מבנה נכון:</strong> חלק את התוכן לפסקאות קצרות, השתמש
              בכותרות משנה ובנקודות תבליט.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>שימוש במילות מפתח:</strong> שלב את מילות המפתח בצורה
              טבעית בכותרות, בפסקאות ובתיאורי התמונות.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>קישורים פנימיים וחיצוניים:</strong> קשר בין עמודים באתר
              שלך וקשר לאתרים חיצוניים רלוונטיים וסמכותיים.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">סיכום</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            כתיבת תוכן ידידותי ל-SEO היא אומנות שמשלבת בין יצירתיות לבין
            הבנה טכנית של מנועי החיפוש. על ידי יישום הטיפים במאמר זה, תוכל
            ליצור תוכן שימשוך את הגולשים וישפר את דירוג האתר שלך בתוצאות
            החיפוש.
          </p>
        </article>
        <div className="mt-8 flex justify-center">
        <BackButton />

        </div>
      </div>
    </div>
  );
};

export default SeoContentWriting;