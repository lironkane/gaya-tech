import React from 'react';
import BackButton from '../../BackButton'; // עדכון הנתיב
import { Helmet } from 'react-helmet';


const LocalSeoGuide = () => {
  return (
    <div className="bg-[#FFF8F0] py-16">
      <Helmet>
        <title>קידום אתרים מקומי: מדריך לעסקים קטנים ובינוניים | גאיה טק</title>
        <meta
          name="description"
          content="הגדל את הנוכחות שלך בתוצאות החיפוש המקומיות ומשוך לקוחות מהאזור שלך. קידום אתרים מקומי הוא קריטי לעסקים עם נוכחות פיזית."
        />
        <meta
          name="keywords"
          content="קידום אתרים מקומי, SEO מקומי, עסקים קטנים, גוגל לעסק שלי, מילות מפתח מקומיות, ביקורות, נוכחות מקוונת"
        />
        <meta name="author" content="גאיה טק" />
        <meta
          property="og:title"
          content="קידום אתרים מקומי: מדריך לעסקים קטנים ובינוניים"
        />
        <meta
          property="og:description"
          content="הגדל את הנוכחות שלך בתוצאות החיפוש המקומיות ומשוך לקוחות מהאזור שלך."
        />
        <meta property="og:image" content="/images/blog/local-seo.jpg" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/blog/local-seo-guide"
        />{' '}
        {/* עדכן את ה-URL */}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="קידום אתרים מקומי: מדריך לעסקים קטנים ובינוניים"
        />
        <meta
          name="twitter:description"
          content="הגדל את הנוכחות שלך בתוצאות החיפוש המקומיות ומשוך לקוחות מהאזור שלך."
        />
        <meta name="twitter:image" content="/images/blog/local-seo.jpg" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-8 py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-[#124A36] text-center font-secular">
          קידום אתרים מקומי: מדריך לעסקים קטנים ובינוניים
        </h1>
        <p className="text-gray-600 mb-6 text-center font-secular">
          הגדל את הנוכחות שלך בתוצאות החיפוש המקומיות ומשוך לקוחות מהאזור
          שלך. קידום אתרים מקומי הוא קריטי לעסקים עם נוכחות פיזית.
        </p>
        <div className="relative group w-full max-w-sm h-auto rounded-lg mb-10 mx-auto overflow-hidden">
          <img
            src="/images/blog/local-seo.jpg"
            alt="קידום אתרים מקומי"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#124A36]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute left-4 bottom-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-bold text-lg">קידום אתרים מקומי</span>
          </div>
        </div>
        <article className="mx-auto font-secular">
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            מהו קידום אתרים מקומי (Local SEO)?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            קידום אתרים מקומי הוא תהליך אופטימיזציה של הנוכחות המקוונת של
            העסק שלך כדי להופיע בתוצאות החיפוש המקומיות. כאשר אנשים מחפשים
            עסקים או שירותים באזור מסוים, מנועי החיפוש מציגים תוצאות
            רלוונטיות בהתבסס על מיקום, תחום פעילות ופרמטרים נוספים.
          </p>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            למה קידום אתרים מקומי חשוב?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            קידום אתרים מקומי מאפשר לעסקים קטנים ובינוניים להתחרות בעסקים
            גדולים יותר על ידי התמקדות בקהל יעד מקומי. זה עוזר להגדיל את
            הנראות של העסק במנועי החיפוש, למשוך לקוחות פוטנציאליים, ולהגדיל
            את המכירות.
          </p>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            טיפים לקידום אתרים מקומי
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-700 leading-relaxed">
              <strong>Google My Business:</strong> צור ונהל פרופיל עסקי בגוגל
              לעסק שלי. ודא שכל הפרטים מדויקים ומעודכנים.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>ציטוטים מקומיים (Citations):</strong> רשום את העסק שלך
              באינדקסים מקומיים ובאתרים רלוונטיים אחרים.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>מילות מפתח מקומיות:</strong> השתמש במילות מפתח שכוללות
              את שם העיר או האזור שלך.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>ביקורות מקומיות:</strong> עודד לקוחות להשאיר ביקורות
              חיוביות על העסק שלך בפלטפורמות כמו גוגל, פייסבוק ו-TripAdvisor.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">סיכום</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            קידום אתרים מקומי הוא כלי רב עוצמה שיכול לעזור לעסקים קטנים
            ובינוניים להצליח בעידן הדיגיטלי. על ידי יישום הטיפים במאמר זה,
            תוכל לשפר את הנוכחות המקוונת שלך ולמשוך לקוחות חדשים לעסק שלך.
          </p>
        </article>
        <div className="mt-8 flex justify-center">
        <BackButton />

        </div>
      </div>
    </div>
  );
};

export default LocalSeoGuide;