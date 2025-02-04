import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'אופטימיזציית אתרים למנועי חיפוש: המדריך המלא ל-2024',
      slug: 'seo-optimization-guide-2024',
      excerpt:
        'למד כיצד לשפר את דירוג האתר שלך במנועי החיפוש עם טיפים מעשיים ועדכניים ל-SEO.',
      keywords: ['קידום אתרים', 'אופטימיזציה למנועי חיפוש', 'SEO', 'דירוג אתרים'],
      imageUrl: '/images/blog/seo-optimization.jpg',
    },
    {
      id: 2,
      title: 'בניית קישורים: איך להשיג קישורים איכותיים לאתר שלך',
      slug: 'link-building-strategies',
      excerpt:
        'גלה את השיטות היעילות ביותר לבניית פרופיל קישורים חזק שיקפיץ את האתר שלך למעלה.',
      keywords: ['בניית קישורים', 'קישורים חיצוניים', 'קידום אתרים', 'אסטרטגיית SEO'],
      imageUrl: '/images/blog/link-building.jpg',
    },
    {
      id: 3,
      title: 'מחקר מילות מפתח: מצא את הביטויים הנכונים לקידום האתר שלך',
      slug: 'keyword-research-tips',
      excerpt:
        'המדריך המלא למציאת מילות המפתח הרווחיות ביותר, שימשכו תנועה רלוונטית לאתר שלך.',
      keywords: ['מחקר מילות מפתח', 'מילות מפתח', 'SEO', 'תנועה אורגנית'],
      imageUrl: '/images/blog/keyword-research.jpg',
    },
    {
      id: 4,
      title: 'מדריך לכתיבת תוכן ידידותי ל-SEO בשנת 2024',
      slug: 'seo-content-writing',
      excerpt:
        'למד איך לכתוב תוכן שגם ימשוך את הגולשים וגם יקודם בצורה אורגנית במנועי החיפוש.',
      keywords: ['כתיבת תוכן', 'SEO', 'תוכן שיווקי', 'אופטימיזציית תוכן'],
      imageUrl: '/images/blog/seo-content.jpg',
    },
    {
      id: 5,
      title: 'מהירות אתר: איך לשפר את ביצועי האתר ולהשפיע על הקידום',
      slug: 'website-speed-optimization',
      excerpt:
        'גלה כיצד מהירות טעינת האתר משפיעה על הדירוג שלך ואיך לשפר אותה.',
      keywords: ['מהירות אתר', 'אופטימיזציית אתרים', 'SEO', 'חווית משתמש'],
      imageUrl: '/images/blog/website-speed.jpg',
    },
    {
      id: 6,
      title: 'קידום אתרים מקומי: מדריך לעסקים קטנים ובינוניים',
      slug: 'local-seo-guide',
      excerpt:
        'הגדל את הנוכחות שלך בתוצאות החיפוש המקומיות ומשוך לקוחות מהאזור שלך.',
      keywords: ['קידום אתרים מקומי', 'SEO מקומי', 'עסקים קטנים', 'גוגל לעסק שלי'],
      imageUrl: '/images/blog/local-seo.jpg',
    },
    {
      id: 7,
      title: 'שימוש נכון בתגיות מטא: כותרות ותיאורים שמושכים קליקים',
      slug: 'meta-tags-optimization',
      excerpt:
        'למד איך לכתוב תגיות מטא אפקטיביות שישפרו את שיעור ההקלקה ויקדמו את האתר שלך.',
      keywords: ['תגיות מטא', 'SEO', 'כותרות', 'תיאורים', 'שיעור הקלקה'],
      imageUrl: '/images/blog/meta-tags.jpg',
    },
    {
      id: 8,
      title: 'קידום אתרים בגוגל תמונות: איך להופיע בתוצאות החיפוש הוויזואלי',
      slug: 'google-images-seo',
      excerpt:
        'הטמע את הטיפים האלה כדי להביא תנועה אורגנית נוספת לאתר שלך דרך גוגל תמונות.',
      keywords: ['גוגל תמונות', 'SEO תמונות', 'קידום אתרים', 'חיפוש תמונות'],
      imageUrl: '/images/blog/google-images.jpg',
    },
    {
      id: 9,
      title: 'קידום אתרים טכני: סודות האינדוקס והסריקה של גוגל',
      slug: 'technical-seo-guide',
      excerpt:
        'המדריך המלא ל-SEO טכני, שיעזור לך להבטיח שגוגל יסרוק ויאנדקס את האתר שלך בצורה יעילה.',
      keywords: ['קידום אתרים טכני', 'SEO טכני', 'סריקה', 'אינדוקס', 'גוגל'],
      imageUrl: '/images/blog/technical-seo.jpg',
    },
    {
      id: 10,
      title: 'קידום אתרים בוורדפרס: טיפים וטריקים לשיפור הדירוג',
      slug: 'wordpress-seo-tips',
      excerpt:
        'למד איך לשפר את ה-SEO של אתר הוורדפרס שלך עם כלים וטכניקות יעילות.',
      keywords: ['קידום אתרים', 'וורדפרס', 'SEO', 'תוספי וורדפרס'],
      imageUrl: '/images/blog/wordpress-seo.jpg',
    },
  ];

  return (
    <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-[#FFF8F0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-secular text-center text-[#124A36] mb-8">
          בלוג קידום אתרים
        </h1>
        <p className="font-amatic text-xl text-center text-gray-700 mb-12">
          כל מה שרציתם לדעת על קידום אתרים אורגני, בניית אסטרטגיה, ושיפור
          הנוכחות הדיגיטלית שלכם.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              ></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#124A36] font-secular">
                  {post.title}
                </h2>
                <p className="font-amatic text-gray-600 mb-4 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="bg-primary-light text-primary-dark px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </motion.div>

  );
};

export default BlogPage;