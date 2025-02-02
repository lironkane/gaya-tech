import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../../BackButton'; // עדכון הנתיב

const WordpressSeoTips = () => {
  return (
    <div className="bg-[#FFF8F0] py-16">
      <Helmet>
        <title>קידום אתרים בוורדפרס: טיפים וטריקים לשיפור הדירוג | גאיה טק</title>
        <meta
          name="description"
          content="למד איך לשפר את ה-SEO של אתר הוורדפרס שלך עם כלים וטכניקות יעילות. וורדפרס היא פלטפורמה מצוינת לקידום אתרים, אך יש להגדיר אותה נכון."
        />
        <meta
          name="keywords"
          content="קידום אתרים, וורדפרס, SEO, תוספי וורדפרס, Yoast SEO, Rank Math, אופטימיזציה, טיפים, טריקים"
        />
        <meta name="author" content="גאיה טק" />
        <meta
          property="og:title"
          content="קידום אתרים בוורדפרס: טיפים וטריקים לשיפור הדירוג"
        />
        <meta
          property="og:description"
          content="למד איך לשפר את ה-SEO של אתר הוורדפרס שלך עם כלים וטכניקות יעילות."
        />
        <meta property="og:image" content="/images/blog/wordpress-seo.jpg" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/blog/wordpress-seo-tips"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="קידום אתרים בוורדפרס: טיפים וטריקים לשיפור הדירוג"
        />
        <meta
          name="twitter:description"
          content="למד איך לשפר את ה-SEO של אתר הוורדפרס שלך עם כלים וטכניקות יעילות."
        />
        <meta name="twitter:image" content="/images/blog/wordpress-seo.jpg" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-8 py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-[#124A36] text-center font-secular">
          קידום אתרים בוורדפרס: טיפים וטריקים לשיפור הדירוג
        </h1>
        <p className="text-gray-600 mb-6 text-center font-secular">
          למד איך לשפר את ה-SEO של אתר הוורדפרס שלך עם כלים וטכניקות
          יעילות. וורדפרס היא פלטפורמה מצוינת לקידום אתרים, אך יש להגדיר
          אותה נכון.
        </p>
        <div className="relative group w-full max-w-sm h-auto rounded-lg mb-10 mx-auto overflow-hidden">
          <img
            src="/images/blog/wordpress-seo.jpg"
            alt="קידום אתרים בוורדפרס"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#124A36]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute left-4 bottom-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-bold text-lg">קידום אתרי וורדפרס</span>
          </div>
        </div>
        <article className="mx-auto font-secular">
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            למה וורדפרס טובה ל-SEO?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            וורדפרס היא מערכת ניהול תוכן (CMS) פופולרית וידידותית למשתמש
            שמציעה יתרונות רבים לקידום אתרים. היא מאפשרת לך ליצור ולנהל
            בקלות תוכן, להתקין תוספים ייעודיים ל-SEO, וליהנות ממבנה אתר
            שמנועי החיפוש אוהבים.
          </p>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            טיפים לקידום אתרים בוורדפרס
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-700 leading-relaxed">
              <strong>התקן תוסף SEO:</strong> תוספים כמו Yoast SEO או Rank
              Math יעזרו לך לבצע אופטימיזציה לתוכן שלך ולשפר את הנראות של
              האתר במנועי החיפוש.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>הגדר מבנה קישורים קבוע:</strong> בחר מבנה קישורים קבוע
              (Permalinks) ידידותי למנועי החיפוש ולמשתמשים.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>צור מפת אתר XML:</strong> מפת אתר עוזרת למנועי החיפוש
              לסרוק ולאנדקס את האתר שלך בצורה יעילה.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>השתמש בתגיות וכותרות:</strong> ודא שכל דף באתר שלך כולל
              תגיות מטא מתאימות וכותרות H1-H6.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>בצע אופטימיזציה לתמונות:</strong> השתמש בטקסט אלטרנטיבי
              (Alt Text) תיאורי עבור כל התמונות באתר.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>התמקד בתוכן איכותי:</strong> כתוב תוכן מקורי, מעמיק ובעל
              ערך שעונה על הצרכים של קהל היעד שלך.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">סיכום</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            קידום אתרים בוורדפרס הוא תהליך מתמשך שדורש תשומת לב לפרטים. על
            ידי יישום הטיפים במאמר זה ושימוש בכלים הנכונים, תוכל לשפר
            משמעותית את דירוג האתר שלך בתוצאות החיפוש ולהגיע לקהל רחב
            יותר.
          </p>
        </article>
        <div className="mt-8 flex justify-center">
        <BackButton />
        </div>
      </div>
    </div>
  );
};

export default WordpressSeoTips;