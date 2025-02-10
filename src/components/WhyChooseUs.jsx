import React from 'react';
import Lottie from 'lottie-react';
// החלף לנתיבים לאנימציות שלך:
import handshakeAnimation from '../assets/animations/handshake.json';
import targetAnimation from '../assets/animations/target.json';
import communicationAnimation from '../assets/animations/communication.json';
import puzzleAnimation from '../assets/animations/puzzle.json';
import rocketAnimation from '../assets/animations/rocket.json';
import trophyAnimation from '../assets/animations/trophy.json';

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
    <section className="relative pt-5 pb-1 px-3 bg-black">
      {/* מכולה פנימית עם רקע אפור, קצוות מעוגלים וצל */}
      <div className="w-full max-w-7xl mx-auto rounded-3xl shadow-lg bg-[#EAEAEA] p-8">
        <h2 className="font-arimo text-black text-4xl md:text-5xl lg:text-6xl font-black text-center mb-8">
          היתרון הייחודי שלנו
        </h2>

        <p className="font-amatic text-black text-2xl md:text-3xl text-center mb-12 max-w-3xl mx-auto">
          אנחנו לא רק עוד חברה לפיתוח וקידום אתרים;
          אנחנו השותפים שלכם להצלחה דיגיטלית, עם פתרונות טכנולוגיים מתקדמים,
          גישה אישית ותוצאות מוכחות.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center
                         transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              {/* אנימציית לוטי */}
              <div className="w-24 h-24 mb-6">
                <Lottie
                  animationData={feature.animation}
                  loop={true}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* כותרת */}
              <h3 className="font-arimo font-black text-xl md:text-2xl text-black mb-4 text-center">
                {feature.title}
              </h3>
              {/* תיאור */}
              <p className="font-arimo text-base md:text-lg text-black text-center leading-relaxed">
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