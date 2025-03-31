// /Users/lironcohen/Code/gaya-tech/src/components/landing-page/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

/**
 * קומפוננטת Hero Section בסגנון רפואי מודרני עם רקע משופר
 * 
 * @param {Object} props
 * @param {Function} props.callPhone - פונקציה להפעלה בעת לחיצה על כפתור התקשרות
 * @param {string} props.phoneNumber - מספר הטלפון להצגה ולחיוג
 */
const HeroSection = ({ callPhone, phoneNumber = "054-699-7625" }) => {
  return (
    <header className="hero-section">
      {/* רקע מושך עם צורות וגרדיאנטים */}
      <div className="hero-background">
        <div className="bg-gradient"></div>
        <div className="bg-pattern"></div>
        <div className="bg-shapes">
          <div className="shape shape-circle-1"></div>
          <div className="shape shape-circle-2"></div>
          <div className="shape shape-blob-1"></div>
          <div className="shape shape-blob-2"></div>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="content-frame">
              <div className="badge-wrapper">
                <span className="badge-icon">⚕️</span>
                <span className="badge-text">פתרונות דיגיטליים לתחום הרפואה</span>
              </div>
              
              <h1 className="main-title">
                <span className="title-first-part">אתרים מקצועיים</span>
                <span className="title-second-part">לרופאים ומרפאות</span>
              </h1>
              
              <p className="subtitle">
                פתרונות דיגיטליים מותאמים אישית שיגדילו את הנראות המקצועית שלך
                ויעזרו למטופלים חדשים למצוא אותך.
              </p>
              
              <div className="cta-buttons">
                <button className="main-cta-button" onClick={callPhone}>
                  <span className="button-text">צור קשר עכשיו</span>
                  <span className="button-arrow">→</span>
                </button>
                <button className="secondary-cta-button">
                  <span className="button-text">עבודות לדוגמה</span>
                </button>
              </div>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div className="feature-text">עיצוב מותאם אישית</div>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div className="feature-text">תמיכה מקצועית</div>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div className="feature-text">מערכת זימון תורים</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="image-frame">
              <div className="doctor-image">
                <img src="/images/doctor-portrait.jpg" alt="רופא מקצועי" />
              </div>
              
              <div className="floating-card card-trust">
                <div className="card-icon">⭐</div>
                <div className="card-content">
                  <h3>מקצועיות ואיכות</h3>
                  <p>משנת 2010</p>
                </div>
              </div>
              
              <div className="pulse-circle"></div>
              <div className="decorative-element element-cross">+</div>
              <div className="decorative-element element-blob"></div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default HeroSection;