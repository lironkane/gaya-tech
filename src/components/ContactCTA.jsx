import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-primary-light">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-20"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-secular text-primary">
            מוכנים לקחת את העסק שלכם לשלב הבא?
          </h2>
          <p className="text-base md:text-lg text-primary-dark/90 mb-8 font-assistant">
            צוות המומחים שלנו ישמח לענות על כל שאלה ולספק לכם ייעוץ מקצועי
            מותאם אישית.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-dark hover:bg-primary-dark/80 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
          >
            צור קשר לייעוץ טכנולוגי
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;