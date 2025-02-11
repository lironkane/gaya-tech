import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      setError('אנא הזן את שמך המלא.');
      return;
    }
    if (!formData.email) {
      setError('אנא הזן כתובת אימייל.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('אנא הזן כתובת אימייל תקינה.');
      return;
    }
    if (!formData.message) {
      setError('אנא הזן את תוכן ההודעה.');
      return;
    }

    setIsLoading(true);
    setError('');

    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSubmitted(true);
        } else {
          setError('משהו השתבש. אנא נסה שוב מאוחר יותר.');
        }
      })
      .catch(error => {
        setError('משהו השתבש. אנא בדוק את חיבור האינטרנט שלך ונסה שוב.');
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>צור קשר | גאיה-טק</title>
        <meta
          name="description"
          content="צרו קשר עם גאיה-טק לקבלת ייעוץ ראשוני ללא התחייבות. נשמח לעמוד לרשותכם ולענות על כל שאלה."
        />
        <meta
          name="keywords"
          content="צור קשר, גאיה-טק, פיתוח תוכנה, פתרונות ענן, קידום אתרים, ייעוץ טכנולוגי, יצירת קשר"
        />
        <meta name="author" content="גאיה-טק" />
        <meta property="og:title" content="צור קשר | גאיה-טק" />
        <meta
          property="og:description"
          content="השאירו פרטים ונחזור אליכם בהקדם, או התקשרו אלינו לייעוץ ראשוני."
        />
        <meta property="og:image" content="/path/to/your/contact-image.jpg" />
        <meta
          property="og:url"
          content="https://www.yourwebsite.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="צור קשר | גאיה-טק" />
        <meta
          name="twitter:description"
          content="צרו קשר עם גאיה-טק לכל שאלה או בקשה."
        />
        <meta
          name="twitter:image"
          content="/path/to/your/contact-image.jpg"
        />
      </Helmet>
      <div className="min-h-screen bg-gray-100 pt-12 px-4 sm:px-6 lg:px-8 text-right font-assistant">
        <div className="pt-[15px]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-6 font-arimo">
                צור קשר
              </h1>
              <p className="font-amatic text-lg text-gray-600">
                נשמח לעמוד לרשותך! מלא את הטופס ונחזור אליך בהקדם, או התקשר
                אלינו ישירות.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-200">
                <Phone className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-primary">טלפון</h3>
                <a
                  href="tel:054-6997625"
                  className="text-gray-600 hover:text-primary"
                >
                  054-6997625
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-200">
                <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-primary">אימייל</h3>
                <a
                  href="mailto:lironkane1@gmail.com"
                  className="text-gray-600 hover:text-primary"
                >
                  lironkane1@gmail.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-200">
                <MapPin className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-primary">כתובת</h3>
                <p className="font-amatic text-gray-600">
ישראל
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-200">
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                  <strong className="font-bold">ההודעה נשלחה בהצלחה!</strong>
                  <span className="block sm:inline">
                    {' '}
                    נחזור אליך בהקדם האפשרי.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                      <strong className="font-bold">שגיאה!</strong>
                      <span className="block sm:inline"> {error}</span>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      שם מלא *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      אימייל *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      טלפון
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      הודעה *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? 'שולח...' : 'שלח הודעה'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;