import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="bg-deep text-gray-700 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-primary-light">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-20"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-secular">
            רוצים לשמוע עוד? דברו איתנו!
          </h2>
          <p className="text-base md:text-lg text-gray-700/90 mb-8 font-assistant">
            צוות המומחים שלנו ישמח לענות על כל שאלה ולספק לכם ייעוץ מקצועי
            מותאם אישית.
          </p>
          <Link
            to="/contact"
            className="bg-primary hover:bg-gray-100 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            צרו קשר
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;