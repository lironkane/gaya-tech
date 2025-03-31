// /Users/lironcohen/Code/gaya-tech/src/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/landing-page/HeroSection';
import './LandingPage.css';

const LandingPage = () => {  
  // פונקציה לחיוג ישיר
  const callPhone = () => {
    window.location.href = 'tel:0546997625';
  };

  return (
    <div className="medical-page modern">
      {/* תוכן העמוד */}
      <div className="page-content">
        {/* סקשן Hero בסגנון רפואי מודרני */}
        <HeroSection 
          callPhone={callPhone} 
          phoneNumber="054-699-7625" 
        />
        
        {/* סקשן היתרונות */}
        <section className="benefits-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">השירותים המקצועיים שלנו</h2>
              <p className="section-subtitle">פתרונות דיגיטליים בהתאמה אישית לרופאים ולמרפאות</p>
            </div>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src="/images/icon-responsive.svg" alt="אתרים מותאמים לכל מכשיר" />
                </div>
                <h3>אתרים רספונסיביים</h3>
                <p>אתר מקצועי המותאם לכל מכשיר - מחשב, טאבלט וסמארטפון, לחוויית משתמש מושלמת בכל מסך.</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src="/images/icon-seo.svg" alt="קידום בגוגל" />
                </div>
                <h3>אופטימיזציה לגוגל</h3>
                <p>נבנה את האתר שלך כך שיופיע בתוצאות החיפוש הראשונות כדי שמטופלים חדשים ימצאו אותך בקלות.</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src="/images/icon-appointment.svg" alt="מערכת זימון תורים" />
                </div>
                <h3>מערכת זימון תורים</h3>
                <p>אינטגרציה חלקה עם מערכות זימון תורים מובילות לניהול יעיל של יומן הפגישות של המרפאה שלך.</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img src="/images/icon-security.svg" alt="אבטחת מידע" />
                </div>
                <h3>אבטחה ופרטיות</h3>
                <p>האתר שלך יהיה מאובטח ועומד בכל דרישות פרטיות המידע הרפואי והגנה על פרטי המטופלים שלך.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* סקשן אודות */}
        <section className="about-section">
          <div className="section-container">
            <div className="about-content">
              <div className="about-image">
                <img src="/images/about-medical.jpg" alt="צוות המומחים שלנו" />
                <div className="experience-badge">
                  <span className="years">10+</span>
                  <span className="text">שנות ניסיון</span>
                </div>
              </div>
              
              <div className="about-text">
                <h2 className="about-title">למה לבחור בנו?</h2>
                <p className="about-subtitle">אנחנו מספקים פתרונות דיגיטליים מותאמים אישית לתחום הרפואי</p>
                
                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>מומחיות בתחום הרפואי</h4>
                      <p>אנחנו מבינים את הצרכים הייחודיים של רופאים ומרפאות</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>תמיכה מקצועית</h4>
                      <p>ליווי צמוד ותמיכה שוטפת לאורך כל הדרך</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">
                      <h4>עיצוב מותאם אישית</h4>
                      <p>עיצוב ייחודי שמשקף את הזהות המקצועית שלך</p>
                    </div>
                  </div>
                </div>
                
                <button className="about-cta" onClick={callPhone}>צור קשר עכשיו</button>
              </div>
            </div>
          </div>
        </section>
        
        {/* סקשן תהליך העבודה */}
        <section className="process-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">תהליך העבודה שלנו</h2>
              <p className="section-subtitle">תהליך עבודה מובנה ויעיל להצלחת הפרויקט שלך</p>
            </div>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>פגישת ייעוץ</h3>
                <p>נכיר אותך ואת המרפאה, נבין את הצרכים והמטרות שלך</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>עיצוב ואפיון</h3>
                <p>נעצב את האתר בהתאם לזהות המותג שלך ולצרכי המטופלים</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>פיתוח ובנייה</h3>
                <p>נבנה את האתר עם הטכנולוגיות המתקדמות ביותר</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>השקה ותמיכה</h3>
                <p>נשיק את האתר ונספק תמיכה מתמשכת להבטחת ביצועים מיטביים</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* סקשן צור קשר */}
        <section className="contact-section" id="contact">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">צור קשר</h2>
              <p className="section-subtitle">נשמח לענות לכל שאלה ולעזור לך להקים את האתר המושלם</p>
            </div>
            
            <div className="contact-container">
              <div className="contact-info">
                <h3>פרטי התקשרות</h3>
                <p>מעוניינים לדעת איך נוכל לעזור לכם ליצור נוכחות דיגיטלית מרשימה?</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <span className="contact-icon">📞</span>
                    </div>
                    <div className="contact-text">
                      <h4>טלפון</h4>
                      <p><a href="tel:0546997625">054-699-7625</a></p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <span className="contact-icon">✉️</span>
                    </div>
                    <div className="contact-text">
                      <h4>אימייל</h4>
                      <p>info@medicalwebsites.co.il</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon-wrapper">
                      <span className="contact-icon">📍</span>
                    </div>
                    <div className="contact-text">
                      <h4>כתובת</h4>
                      <p>רחוב הרופאים 15, תל אביב</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">שם מלא*</label>
                    <input type="text" id="fullName" placeholder="השם שלך" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">טלפון*</label>
                    <input type="tel" id="phone" placeholder="מספר הטלפון שלך" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">אימייל*</label>
                    <input type="email" id="email" placeholder="כתובת האימייל שלך" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="specialty">התמחות רפואית</label>
                    <select id="specialty" defaultValue="">
                      <option value="" disabled>בחר התמחות</option>
                      <option value="רפואת משפחה">רפואת משפחה</option>
                      <option value="רפואת שיניים">רפואת שיניים</option>
                      <option value="רפואת עור">רפואת עור</option>
                      <option value="קרדיולוגיה">קרדיולוגיה</option>
                      <option value="אחר">אחר</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">הודעה</label>
                  <textarea id="message" rows="4" placeholder="איך נוכל לעזור לך?"></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  שלח פנייה
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      
      {/* כפתור צף לשיחת טלפון */}
      <div className="floating-cta" onClick={callPhone}>
        <div className="floating-phone-icon">📞</div>
        <div className="floating-text">התקשר עכשיו</div>
      </div>
      
      {/* פוטר */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-logo">
              <h3>Medical Websites</h3>
              <p>פתרונות דיגיטליים מותאמים לענף הרפואה</p>
            </div>
            
            <div className="footer-links">
              <h4>קישורים מהירים</h4>
              <ul>
                <li><a href="#">דף הבית</a></li>
                <li><a href="#">השירותים שלנו</a></li>
                <li><a href="#">אודות</a></li>
                <li><a href="#contact">צור קשר</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>צור קשר</h4>
              <p><a href="tel:0546997625">054-699-7625</a></p>
              <p>info@medicalwebsites.co.il</p>
              <p>תל אביב, ישראל</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Medical Websites. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;