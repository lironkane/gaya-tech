import React from 'react';

const mockPosts = [
  {
    id: 1,
    title: 'איך לבחור פלטפורמת בניית אתרים',
    excerpt: 'בכתבה זו נסקור את היתרונות והחסרונות של מספר פלטפורמות מובילות...',
    image: '/images/blog1.jpg',  // החלף לנתיב אמיתי
    date: '20/01/2025'
  },
  {
    id: 2,
    title: '10 טיפים לקידום אורגני יעיל',
    excerpt: 'קידום אורגני (SEO) הוא מפתח להצלחה מקוונת. הנה כמה עצות שיעזרו...',
    image: '/images/blog2.jpg',
    date: '15/01/2025'
  },
  {
    id: 3,
    title: 'מהפכת הבינה המלאכותית',
    excerpt: 'איך AI משנה את עולם הפיתוח והעיצוב? סקירה על הכלים העדכניים ביותר...',
    image: '/images/blog3.jpg',
    date: '10/01/2025'
  },
  // אפשר להוסיף עוד פוסטים בהתאם
];

const BlogPage = () => {
  return (
    <main className="bg-white text-text-primary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-arimo mb-4">
            הבלוג שלנו
          </h1>
          <p className="font-amatic text-xl sm:text-2xl">
            חדשות, טיפים ועדכונים מעולם הדיגיטל והפיתוח
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <div 
              key={post.id}
              className="overflow-hidden rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* תמונת פוסט */}
              {post.image && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              {/* תוכן הפוסט */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-secondary font-arimo">
                  {post.title}
                </h2>
                <p className="text-sm text-text-secondary mb-2">
                  {post.excerpt}
                </p>
                <p className=" font-amatic text-xs text-text-tertiary mb-4">
                  פורסם בתאריך: {post.date}
                </p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-accent hover:text-primary font-medium transition-colors"
                >
                  קרא עוד →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* כפתור טעינה/צפיה בעוד פוסטים */}
        <div className="mt-8 text-center">
          <button
            onClick={() => alert('עוד פוסטים...')}
            className="
              bg-accent text-white rounded-lg px-6 py-3
              hover:bg-accent/90 transition-colors
              text-lg font-semibold font-amatic
            "
          >
            עוד פוסטים
          </button>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;