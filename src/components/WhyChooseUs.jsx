import React from 'react';
import Lottie from 'lottie-react';
// יש להחליף בנתיבים לאנימציות שהורדת
import handshakeAnimation from '../assets/animations/handshake.json';
import targetAnimation from '../assets/animations/target.json';
import communicationAnimation from '../assets/animations/communication.json';
import puzzleAnimation from '../assets/animations/puzzle.json';
import rocketAnimation from '../assets/animations/rocket.json';
import trophyAnimation from '../assets/animations/trophy.json';
import greenBackground from '../assets/background/features-background.jpg';

const WhyChooseUs = () => {
  const features = [
    {
      title: "זמינות ותקשורת אישית",
      description:
        "אנחנו זמינים עבורך לכל שאלה, בקשה או התייעצות. אנו מאמינים בתקשורת שוטפת ושקופה לאורך כל תהליך פיתוח האתר, תוך מתן מענה מהיר ומקצועי.",
      animation: handshakeAnimation,
    },
    {
      title: "תוצאות מוכחות ואיכות ללא פשרות",
      description:
        "אנו מתחייבים לספק לך אתר אינטרנט ברמה הגבוהה ביותר, תוך הקפדה על עיצוב מרשים, חווית משתמש מעולה וקוד נקי ויעיל. בקידום אתרים, אנו מתמקדים בתוצאות מדידות ובהשגת יעדים עסקיים ברורים.",
      animation: targetAnimation,
    },
    {
      title: "שיתוף פעולה פתוח",
      description:
        "אנו רואים בך שותף מלא בתהליך. נשמח לשמוע את הרעיונות שלך, לענות על כל שאלה ולעדכן אותך בכל שלב בפרויקט. אנו מאמינים שעבודה משותפת מובילה לתוצאות הטובות ביותר.",
      animation: communicationAnimation,
    },
    {
      title: "פתרונות מותאמים אישית",
      description:
        "אנו לא מאמינים בתבניות אחידות. כל אתר שאנו מפתחים מותאם באופן אישי לצרכים, למטרות ולקהל היעד שלך. אנו מבצעים מחקר מעמיק כדי להבין את העסק שלך וליצור עבורך אתר ייחודי ואפקטיבי.",
      animation: puzzleAnimation,
    },
    {
      title: "חדשנות וטכנולוגיה מתקדמת",
      description:
        "אנו נלהבים מטכנולוגיה ודואגים להתעדכן בכל הטרנדים והחידושים האחרונים בעולם פיתוח האתרים. אנו משתמשים בכלים המתקדמים ביותר כדי ליצור אתרים חדשניים, יעילים ומהירים.",
      animation: rocketAnimation,
    },
    {
      title: "שותפים להצלחה שלך",
      description:
        "המטרה שלנו היא לעזור לך להצליח בעולם הדיגיטלי. אנו רואים את עצמנו כשותפים שלך לטווח ארוך ונעשה כל שביכולתנו כדי להבטיח שתשיג את היעדים העסקיים שלך.",
      animation: trophyAnimation,
    },
  ];

  return (
    <section className="relative py-20 bg-primary-dark from-gray-1000 via-gray-800 to-gray-900 bg-cover bg-no-repeat">
      {/* רקע עם טקסטורה */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${greenBackground})`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      ></div>

      <div className="relative container mx-auto px-4">
        <h2 className="font-arimo text-center text-6xl font-bold text-white mb-12 animate-fade-slide-in">
          היתרון הייחודי שלנו
        </h2>
        <p className="font-amatic text-center text-3xl text-white mb-16 animate-fade-slide-in animation-delay-200">
          אנחנו לא רק עוד חברה לפיתוח אתרים וקידום אתרים. אנחנו שותפים
          שלך להצלחה, עם פתרונות טכנולוגיים מתקדמים,
          גישה אישית ותוצאות מוכחות.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                bg-gray-800/80 p-8 rounded-xl border border-green-light/20 shadow-md
                flex flex-col items-center transition-all duration-300
                hover:shadow-lg hover:shadow-green-500/20
                animation-delay-${index * 200} animate-card-pop
              `}
              data-parallax
            >
              <div className={`w-24 h-24 mb-6`}>
                <Lottie
                  animationData={feature.animation}
                  loop={true}
                  className="transition-all duration-300 hover:scale-105"
                />
              </div>
              <h3
                className="font-arimo text-3xl font-bold text-green-200 mb-4
                  transition-all duration-300 hover:scale-105"
              >
                {feature.title}
              </h3>
              <p className="font-arimo text-center text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;