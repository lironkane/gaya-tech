/**
 * קובץ עזר לניהול אנליטיקס ומעקב המרות
 */

/**
 * פונקציה לטיפול בהמרות Google Ads
 * @param {string} conversionType - סוג ההמרה
 */
export const trackConversion = (conversionType) => {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Tag Manager לא נמצא');
    return;
  }

  // קוד ההמרה הספציפי ליצירת קשר
  if (conversionType === 'contact_form_submit' || conversionType === 'contact_page_view') {
    window.gtag('event', 'conversion', {'send_to': 'AW-16893794531/gRzRCNmU66IaEOOxy_c-'});
    console.log('Google Ads conversion tracked: יצירת קשר');
  }
};

/**
 * פונקציה לטיפול באירועי אנליטיקס כלליים
 * @param {string} eventName - שם האירוע
 * @param {Object} eventParams - פרמטרים לאירוע
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined' || !window.gtag) {
    console.warn('Google Tag Manager לא נמצא');
    return;
  }

  // שליחת האירוע לגוגל אנליטיקס
  window.gtag('event', eventName, eventParams);
  console.log(`Event tracked: ${eventName}`, eventParams);
};