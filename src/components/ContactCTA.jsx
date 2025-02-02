import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FFF8F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-primary-light">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-20"></div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 font-secular text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            רוצים לשמוע עוד? דברו איתנו!
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-primary-dark/90 mb-8 font-assistant"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            צוות המומחים שלנו ישמח לענות על כל שאלה ולספק לכם ייעוץ מקצועי
            מותאם אישית. <strong className="font-bold">קבלו פתרונות טכנולוגיים מתקדמים</strong> לצרכים שלכם.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120 }}
          >
            <Link
              to="/contact"
              className="bg-primary-dark hover:bg-primary-dark/80 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              צרו קשר לייעוץ טכנולוגי
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;