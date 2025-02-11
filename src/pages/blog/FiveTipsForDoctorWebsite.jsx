import React from 'react';
import { Helmet } from 'react-helmet';
import BackButton from '../../BackButton';

const FiveTipsForDoctorWebsite = () => {
  return (
    <div className="bg-[#FFF8F0] py-16" aria-label="Blog Post: 5 טיפים לשיפור אתר התדמית של רופא - tech-start">
      <Helmet>
        {/* Metadata SEO - Blog Post: 5 Tips for Doctor Website */}
        <title>5 טיפים לשיפור אתר תדמית לרופא | tech-start</title>
        <meta
          name="description"
          content="בעידן הדיגיטלי, אתר אינטרנט הוא כלי חיוני לכל רופא. גלו 5 טיפים שיעזרו לכם לשפר את אתר התדמית שלכם ולמשוך מטופלים חדשים."
        />
        <meta
          name="keywords"
          content="אתר תדמית לרופא, עיצוב אתר רופא, קידום אתר רופא, רופא, מרפאה, אתר אינטרנט, טיפים לאתר רופא"
        />
        <meta name="author" content="tech-start" />
        <meta property="og:title" content="5 טיפים לשיפור אתר תדמית לרופא | tech-start" />
        <meta
          property="og:description"
          content="גלו 5 טיפים מעשיים לשיפור אתר התדמית של הרופא שלך, כדי למשוך מטופלים חדשים ולבסס את הנוכחות הדיגיטלית שלך."
        />
        <meta property="og:image" content="/images/blog/doctor-website.jpg" /> {/* Replace with actual URL */}
        <meta property="og:url" content="https://www.tech-start.co.il/blog/five-tips-doctor-website" /> {/* Replace with actual URL */}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5 טיפים לשיפור אתר תדמית לרופא | tech-start" />
        <meta
          name="twitter:description"
          content="רוצים לשפר את אתר התדמית שלכם כרופאים? הנה 5 טיפים שיעזרו לכם למשוך יותר מטופלים ולבלוט באינטרנט."
        />
        <meta
          name="twitter:image"
          content="/images/blog/doctor-website.jpg" /> {/* Replace with actual URL */}
        {/* סוף Metadata SEO */}
      </Helmet>

      <div className="max-w-4xl mx-auto px-8 py-12 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-[#124A36] font-arimo">
              5 טיפים לשיפור אתר התדמית של רופא
            </h1>
            <p className="font-amatic text-gray-600">
              המדריך המקיף לבניית אתר אינטרנט מצליח לרופאים
            </p>
          </div>
          <BackButton />
        </div>

        <div className="relative group w-full max-w-sm h-auto rounded-lg mb-10 mx-auto overflow-hidden">
          <img
            src="/images/blog/doctor-website.jpg" // תמונה רלוונטית
            alt="רופא מחייך ליד מחשב"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#124A36]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute left-4 bottom-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <span className="font-bold text-lg font-amatic">אתר תדמית לרופא</span>
          </div>
        </div>

        <article className="mx-auto font-arimo">
          <p className="font-amatic text-gray-700 leading-relaxed mb-4">
            בעידן הדיגיטלי, אתר האינטרנט הוא כרטיס הביקור הראשי שלכם.
            עבור רופאים, אתר תדמית מקצועי הוא כלי חיוני לבניית מוניטין,
            משיכת מטופלים חדשים ומתן שירות איכותי למטופלים קיימים.
          </p>

          {/* ... (המשך המאמר עם הכותרות והפסקאות) */}
        </article>
      </div>
    </div>
  );
};

export default FiveTipsForDoctorWebsite;