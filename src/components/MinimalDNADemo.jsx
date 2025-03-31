// src/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import DNAAnimation from '../components/DNAAnimation';
import './MinimalDNADemo.css';

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // עדכון התקדמות הגלילה
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="landing-page">
      {/* רקע האנימציה */}
      <div className="background-animation">
        <DNAAnimation 
          scrollProgress={scrollProgress}
          backgroundColor="#0a0c30"  // כחול כהה אך בהיר יותר מהמקורי
          connectorColor="#5a8aff"   // כחול בהיר יותר למחברים
          backboneColor="#3a4bbf"    // כחול בהיר יותר לשדרה
          glowColor="#8abdff"        // צבע זוהר עם גוון תכלת
          scale={1.2}                // סליל גדול יותר
          interactive={true}
        />
      </div>
      
      {/* תוכן העמוד */}
      <div className="content">
        <header className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="main-title">אתרי תדמית <span className="highlight">לרופאים</span></h1>
              <p className="subtitle">נעצב עבורך אתר מקצועי שיעביר את המומחיות שלך לחולים פוטנציאליים</p>
              <div className="cta-buttons">
                <button className="primary-button">צור קשר</button>
                <button className="secondary-button">הדגמות</button>
              </div>
            </div>
            
            <div className="hero-image">
              <img src="/images/doctor-tablet.png" alt="רופא עם טאבלט" />
            </div>
          </div>
        </header>
        
        <section className="benefits-section">
          <div className="container">
            <h2 className="section-title">היתרונות שלנו</h2>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>מותאם לנייד</h3>
                <p>האתר שלך יראה מצוין בכל מכשיר - מחשב, טאבלט או טלפון</p>
              </div>
              
              <div className="benefit-card">
                <div className="icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>אופטימיזציה לגוגל</h3>
                <p>נבנה את האתר שלך כך שיופיע בתוצאות החיפוש הראשונות</p>
              </div>
              
              <div className="benefit-card">
                <div className="icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>מערכת תורים</h3>
                <p>אינטגרציה חלקה עם מערכות זימון תורים מובילות</p>
              </div>
              
              <div className="benefit-card">
                <div className="icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h3>אבטחה ופרטיות</h3>
                <p>האתר שלך יהיה מאובטח ועומד בכל דרישות פרטיות המידע הרפואי</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="process-section">
          <div className="container">
            <h2 className="section-title">תהליך העבודה שלנו</h2>
            
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
                <p>נשיק את האתר ונספק תמיכה מתמשכת כדי להבטיח שהכל פועל כמצופה</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="portfolio-section">
          <div className="container">
            <h2 className="section-title">הלקוחות שלנו</h2>
            
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <img src="/images/portfolio-1.jpg" alt="ד״ר כהן - כירורג" />
                <div className="portfolio-overlay">
                  <h3>ד״ר כהן</h3>
                  <p>מנתח בכיר</p>
                  <a href="#" className="portfolio-link">צפה באתר</a>
                </div>
              </div>
              
              <div className="portfolio-item">
                <img src="/images/portfolio-2.jpg" alt="מרפאת שיניים ד״ר לוי" />
                <div className="portfolio-overlay">
                  <h3>ד״ר לוי</h3>
                  <p>רופאת שיניים</p>
                  <a href="#" className="portfolio-link">צפה באתר</a>
                </div>
              </div>
              
              <div className="portfolio-item">
                <img src="/images/portfolio-3.jpg" alt="המרכז הרפואי גולדשטיין" />
                <div className="portfolio-overlay">
                  <h3>מרכז גולדשטיין</h3>
                  <p>מרכז רפואי</p>
                  <a href="#" className="portfolio-link">צפה באתר</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">מה הלקוחות אומרים</h2>
            
            <div className="testimonials-slider">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"האתר החדש העלה את מספר המטופלים החדשים שלי ב-40%. המטופלים מדווחים שקל להם לקבוע תור ולמצוא מידע."</p>
                </div>
                <div className="testimonial-author">
                  <img src="/images/testimonial-1.jpg" alt="ד״ר רון שמיר" />
                  <div className="author-info">
                    <h4>ד״ר רון שמיר</h4>
                    <p>קרדיולוג</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"העיצוב המקצועי והנקי של האתר משקף את הסטנדרטים הגבוהים של המרפאה שלי. צוות הפיתוח היה קשוב לכל הדרישות שלי."</p>
                </div>
                <div className="testimonial-author">
                  <img src="/images/testimonial-2.jpg" alt="ד״ר מיכל אברהם" />
                  <div className="author-info">
                    <h4>ד״ר מיכל אברהם</h4>
                    <p>רופאת עור</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <h2 className="section-title">צור קשר</h2>
                <p>מעוניינים לדעת איך נוכל לעזור לכם ליצור נוכחות דיגיטלית מרשימה?</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <p>03-1234567</p>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <p>info@medicalwebsites.co.il</p>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>רחוב הרופאים 15, תל אביב</p>
                  </div>
                </div>
              </div>
              
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="שם מלא" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="אימייל" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="טלפון" required />
                </div>
                <div className="form-group">
                  <select>
                    <option value="" disabled selected>סוג התמחות</option>
                    <option value="רפואת משפחה">רפואת משפחה</option>
                    <option value="רפואת שיניים">רפואת שיניים</option>
                    <option value="רפואת עור">רפואת עור</option>
                    <option value="קרדיולוגיה">קרדיולוגיה</option>
                    <option value="אחר">אחר</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="הודעה" rows="4"></textarea>
                </div>
                <button type="submit" className="primary-button">שלח פנייה</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Medical Websites</h3>
              <p>פתרונות דיגיטליים לרופאים ולמרפאות</p>
            </div>
            
            <div className="footer-links">
              <h4>קישורים מהירים</h4>
              <ul>
                <li><a href="#">דף הבית</a></li>
                <li><a href="#">אודות</a></li>
                <li><a href="#">שירותים</a></li>
                <li><a href="#">תיק עבודות</a></li>
                <li><a href="#">בלוג</a></li>
                <li><a href="#">צור קשר</a></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h4>עקבו אחרינו</h4>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
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