import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../../BackButton'; // עדכון הנתיב

const GoogleImagesSeo = () => {
  return (
    <div className="bg-[#FFF8F0] py-16">
      <Helmet>
        <title>קידום אתרים בגוגל תמונות | גאיה טק</title>
        <meta
          name="description"
          content="הטמע את הטיפים האלה כדי להביא תנועה אורגנית נוספת לאתר שלך דרך גוגל תמונות. אופטימיזציה של תמונות היא חלק בלתי נפרד מתהליך ה-SEO."
        />
        <meta
          name="keywords"
          content="גוגל תמונות, SEO תמונות, קידום אתרים, חיפוש תמונות, אופטימיזציית תמונות, תנועה אורגנית"
        />
        <meta name="author" content="גאיה טק" />
        <meta
          property="og:title"
          content="קידום אתרים בגוגל תמונות: איך להופיע בתוצאות החיפוש הוויזואלי"
        />
        <meta
          property="og:description"
          content="הטמע את הטיפים האלה כדי להביא תנועה אורגנית נוספת לאתר שלך דרך גוגל תמונות."
        />
        <meta property="og:image" content="/images/blog/google-images.jpg" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/blog/google-images-seo"
        />{' '}
        {/* עדכן את ה-URL */}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="קידום אתרים בגוגל תמונות: איך להופיע בתוצאות החיפוש הוויזואלי"
        />
        <meta
          name="twitter:description"
          content="הטמע את הטיפים האלה כדי להביא תנועה אורגנית נוספת לאתר שלך דרך גוגל תמונות."
        />
        <meta name="twitter:image" content="/images/blog/google-images.jpg" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-8 py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-[#124A36] text-center font-secular">
          קידום אתרים בגוגל תמונות: איך להופיע בתוצאות החיפוש הוויזואלי
        </h1>
        <p className="text-gray-600 mb-6 text-center font-secular">
          הטמע את הטיפים האלה כדי להביא תנועה אורגנית נוספת לאתר שלך דרך
          גוגל תמונות. אופטימיזציה של תמונות היא חלק בלתי נפרד מתהליך
          ה-SEO.
        </p>
        <div className="relative group w-full max-w-sm h-auto rounded-lg mb-10 mx-auto overflow-hidden">
          <img
            src="/images/blog/google-images.jpg"
            alt="קידום אתרים בגוגל תמונות"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#124A36]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute left-4 bottom-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="font-bold text-lg">קידום תמונות</span>
          </div>
        </div>
        <article className="mx-auto font-secular">
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            למה גוגל תמונות חשוב ל-SEO?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            גוגל תמונות הוא מנוע חיפוש התמונות הגדול בעולם. אנשים רבים
            משתמשים בו כדי למצוא תמונות הקשורות למוצרים, שירותים או מידע
            שהם מחפשים. הופעה בתוצאות החיפוש של גוגל תמונות יכולה להביא
            תנועה אורגנית נוספת לאתר שלך.
          </p>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">
            טיפים לאופטימיזציה של תמונות
          </h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-700 leading-relaxed">
              <strong>שמות קבצים:</strong> השתמש בשמות קבצים תיאוריים
              שכוללים מילות מפתח רלוונטיות.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>טקסט אלטרנטיבי (Alt Text):</strong> כתוב תיאור קצר
              ומדויק של התמונה, תוך שימוש במילות מפתח.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>גודל ופורמט:</strong> השתמש בתמונות בגודל המתאים
              ובפורמטים יעילים כמו WebP.
            </li>
            <li className="text-gray-700 leading-relaxed">
              <strong>הקשר:</strong> ודא שהתמונה רלוונטית לתוכן הדף שבו היא
              מופיעה.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-3 text-[#124A36]">סיכום</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            קידום אתרים בגוגל תמונות הוא דרך יעילה נוספת להגדיל את התנועה
            האורגנית לאתר. על ידי יישום הטיפים במאמר זה, תוכל לשפר את
            הנראות של התמונות שלך בתוצאות החיפוש ולהגיע לקהל רחב יותר.
          </p>
        </article>
        <BackButton />
      </div>
    </div>
  );
};

export default GoogleImagesSeo;