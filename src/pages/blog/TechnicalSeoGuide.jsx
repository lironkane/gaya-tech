import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../../BackButton'; // עדכון הנתיב

const TechnicalSeoGuide = () => {
  return (
    <div className="bg-[#FFF8F0] py-16">
      <Helmet>
        <title>קידום אתרים טכני: סודות האינדוקס והסריקה של גוגל | גאיה טק</title>
        <meta
          name="description"
          content="המדריך המלא ל-SEO טכני, שיעזור לך להבטיח שגוגל יסרוק ויאנדקס את האתר שלך בצורה יעילה. קידום אתרים טכני הוא הבסיס לכל אסטרטגיית SEO."
        />
        <meta
          name="keywords"
          content="קידום אתרים טכני, SEO טכני, סריקה, אינדוקס, גוגל, מפת אתר XML, Robots.txt, כתובות URL, HTTPS"
        />
        <meta name="author" content="גאיה טק" />
        <meta
          property="og:title"
          content="קידום אתרים טכני: סודות האינדוקס והסריקה של גוגל"
        />
        <meta
          property="og:description"
          content="המדריך המלא ל-SEO טכני, שיעזור לך להבטיח שגוגל יסרוק ויאנדקס את האתר שלך בצורה יעילה."
        />
        <meta property="og:image" content="/images/blog/technical-seo.jpg" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/blog/technical-seo-guide"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="קידום אתרים טכני: סודות האינדוקס והסריקה של גוגל"
        />
        <meta
          name="twitter:description"
          content="המדריך המלא ל-SEO טכני, שיעזור לך להבטיח שגוגל יסרוק ויאנדקס את האתר שלך בצורה יעילה."
        />
        <meta name="twitter:image" content="/images/blog/technical-seo.jpg" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-8 py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-[#124A36] text-center font-secular">
          קידום אתרים טכני: סודות האינדוקס והסריקה של גוגל
        </h1>
        <p className="text-gray-600 mb-6 text-center font-secular">
          המדריך המלא ל-SEO טכני, שיעזור לך להבטיח שגוגל יסרוק ויאנדקס את
          האתר שלך בצורה יעילה. קידום אתרים טכני הוא הבסיס לכל אסטרטגיית
          SEO.
        </p>
        <div className="relative group w-full max-w-sm h-auto rounded-lg mb-10 mx-auto overflow-hidden">
          <img
            src="/images/blog/technical-seo.jpg"
            alt="קידום אתרים טכני"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#124A36]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute left-4 bottom-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-bold text-lg">קידום אתרים טכני</span>
          </div>
        </div>
        <article className="mx-auto font-secular">
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            מהו SEO טכני?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SEO טכני מתייחס לאופטימיזציה של ההיבטים הטכניים של אתר אינטרנט
            כדי לשפר את האופן שבו מנועי החיפוש סורקים ומאנדקסים אותו. זה כולל
            שיפורים בקוד האתר, ארכיטקטורת האתר, מהירות הטעינה, התאמה
            למובייל ועוד.
          </p>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            למה SEO טכני חשוב?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ללא SEO טכני נכון, מנועי החיפוש עשויים להתקשות להבין את מבנה
            האתר ותוכנו, מה שעלול להוביל לדירוג נמוך יותר בתוצאות החיפוש.
            SEO טכני מבטיח שהאתר שלך נגיש וקל לסריקה עבור מנועי החיפוש.
          </p>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            היבטים מרכזיים ב-SEO טכני
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-700 leading-relaxed">
              <strong>סריקה ואינדוקס:</strong> ודא שגוגל יכול לסרוק ולאנדקס
              את כל הדפים החשובים באתר שלך.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>מפת אתר XML:</strong> צור מפת אתר XML ושלח אותה לגוגל
              דרך Search Console.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>קובץ Robots.txt:</strong> השתמש בקובץ Robots.txt כדי
              להנחות את מנועי החיפוש אילו דפים לסרוק ואילו לא.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>כתובות URL ידידותיות:</strong> השתמש בכתובות URL
              קצרות, תיאוריות וקריאות.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>HTTPS:</strong> ודא שהאתר שלך מאובטח באמצעות SSL.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">סיכום</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            SEO טכני הוא חלק חיוני בכל אסטרטגיית קידום אתרים. על ידי שיפור
            ההיבטים הטכניים של האתר שלך, תוכל להבטיח שמנועי החיפוש יסרקו
            ויאנדקסו אותו בצורה יעילה, מה שיוביל לדירוג טוב יותר בתוצאות
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

export default TechnicalSeoGuide;