import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Users, Target, Sparkles, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet'; // ייבוא react-helmet

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const features = [
    {
      icon: Lightbulb,
      title: "פתרונות חכמים",
      description: "טכנולוגיות מתקדמות שיעזרו לך לצמוח",
      color: "from-amber-400/20 to-orange-400/20"
    },
    {
      icon: Target,
      title: "ליווי מותאם אישית",
      description: "נבנה יחד את הפתרון המושלם בשבילך",
      color: "from-rose-400/20 to-pink-400/20"
    },
    {
      icon: Users,
      title: "צוות מקצועי ותומך",
      description: "מומחים שתמיד כאן בשבילך",
      color: "from-violet-400/20 to-purple-400/20"
    }
  ];

  return (
    <section className="py-16 relative bg-gray-900 overflow-hidden" aria-label="Contact CTA Section - Tech Start: צור קשר להתחלת הצמיחה העסקית שלך">
      <Helmet>
        {/* Metadata SEO - Contact CTA */}
        <title>צרו קשר | Tech-Start - פיתוח אתרים וייעוץ שיווקי</title>
        <meta name="description" content="צרו קשר עם Tech-Start לקבלת פתרונות פיתוח אתרים ושיווק דיגיטלי חכמים ומותאמים אישית. צוות מקצועי זמין לליווי צמיחת העסק שלך." />
        <meta name="keywords" content="צור קשר, פיתוח אתרים, שיווק דיגיטלי, ייעוץ שיווקי, פתרונות חכמים, ליווי אישי, צוות מקצועי, קליניקות, רופאים, רופאי שיניים, בניית אתרים לרופאים, בניית אתרים לרופאי שיניים" />
        {/* סוף Metadata SEO */}
      </Helmet>
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px]"></div>

      {/* Soft floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Soft gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" onMouseMove={handleMouseMove}>
        <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Main Card */}
          <div className="rounded-[2.5rem] bg-white/80 backdrop-blur-xl shadow-2xl border-2 border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12 relative">
              {/* Animated light effect */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.1) 0%, transparent 60%)`
                }}
              ></div>

              {/* Header Section */}
              <div className="text-center max-w-4xl mx-auto mb-16 relative">
                <span className="inline-flex items-center gap-2 text-gray-800 bg-purple-50 px-6 py-3 rounded-2xl mb-8 border border-purple-100">
                  <Heart className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">
                    בואו נצמח יחד לגבהים חדשים
                  </span>
                </span>

                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  <span className="text-gray-900">
                    נלווה אותך
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-rose-500 text-transparent bg-clip-text">
                    בדרך להצלחה
                  </span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  הצוות המקצועי שלנו כאן כדי לעזור לך לצמוח ולהתפתח
                  עם פתרונות טכנולוגיים מותאמים בדיוק בשבילך
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveFeature(index)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <div className="relative bg-white rounded-2xl p-8 text-center transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:shadow-xl">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <div className="relative z-10">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <feature.icon className="w-8 h-8 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 group-hover:text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center relative">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-600 to-rose-500 text-white rounded-xl text-xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                  <span className="relative z-10">בוא נתחיל יחד</span>
                  <ArrowLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-2" />
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>

                <p className="mt-6 text-gray-600 text-lg">
                  פגישת היכרות וייעוץ ללא עלות
                </p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-100 bg-purple-50/50 backdrop-blur-xl p-8 rounded-b-[2.5rem]">
              <div className="flex justify-center items-center gap-16 text-center">
                <div className="group">
                  <span className="block text-4xl font-bold text-gray-900 mb-2">15+</span>
                  <span className="text-gray-600">שנות מומחיות</span>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="group">
                  <span className="block text-4xl font-bold text-gray-900 mb-2">24/7</span>
                  <span className="text-gray-600">תמיכה אישית</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
      `}</style>
    </section>
  );
};

export default ContactCTA;