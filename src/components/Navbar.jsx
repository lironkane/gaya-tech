import React, { useState, useEffect, useRef } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logos';
import { Helmet } from 'react-helmet';

// תוספת של אפקט חלקיקים לרקע
const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // התאמת גודל הקנבס לגודל החלון
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // יצירת מערך חלקיקים
    const particlesArray = [];
    const numberOfParticles = 100;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = '#ffffff';
        this.opacity = Math.random() * 0.5;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    init();
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // חיבור קווים בין חלקיקים
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 0.2;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-10"
      style={{ opacity: 0.2 }}
    />
  );
};

// כפתור המבורגר משודרג עם אנימציה משופרת
const HamburgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex items-center justify-center px-4 py-2 rounded-full bg-primary-dark hover:bg-primary-dark/50 transition-all duration-300 gap-2 border border-white/20 hover:border-white/70 relative overflow-hidden group"
    >
      {/* אפקט גלים בלחיצה */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100">
        <span className="absolute inset-0 transform scale-0 rounded-full bg-white/10 group-hover:scale-150 transition-all duration-500"></span>
        <span className="absolute inset-0 transform scale-0 rounded-full bg-white/5 group-hover:scale-150 transition-all duration-700 delay-100"></span>
      </span>

      <div className="relative w-6 h-5 transition-all duration-300">
        <span className={`absolute right-0 w-full h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'top-1/2 -translate-y-1/2 rotate-45 w-6' : 'top-0 w-5'
        }`}></span>
        <span className={`absolute right-0 w-full h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2 w-4'
        }`}></span>
        <span className={`absolute right-0 w-full h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45 w-6' : 'bottom-0 w-3'
        }`}></span>
      </div>
      <span className="text-white font-medium text-lg relative z-10 font-arimo">Menu</span>

      {/* הוספת אנימציית מעגל זוהר */}
      <span className="absolute inset-0 pointer-events-none">
        <span className={`absolute inset-0 rounded-full bg-white/5 transition-all duration-700 ${
          isOpen ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
        }`}></span>
      </span>
    </button>
  );
};

// פריט תפריט עם אפקט הופעה משודרג
const MenuItem = ({ item, isOpen, onClose, index }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const itemRef = useRef(null);

  // אפקט מיוחד לפריט תפריט כשהוא מופיע
  useEffect(() => {
    if (isOpen && itemRef.current) {
      // אפקט כניסה ויזואלי - נעשה עם CSS
    }
  }, [isOpen]);

  if (item.submenu) {
    return (
      <div
        ref={itemRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setShowSubmenu(true)}
        onMouseLeave={() => setShowSubmenu(false)}
      >
        {/* הכותרת הראשית של קטגוריה עם תת-תפריט */}
        <Link 
          to={item.path}
          onClick={onClose}
          className="rtl-menu-item block text-white text-3xl p-6 w-full font-arimo relative group cursor-pointer"
          dir="rtl"
        >
          <div style={{ direction: 'rtl', textAlign: 'right', position: 'relative', paddingRight: '20px' }}>
            <div style={{ 
              position: 'absolute', 
              right: '0', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%' 
            }} className="bg-white/30 group-hover:bg-white/90 group-hover:scale-150 transition-all duration-300"></div>
            {item.title}
          </div>
          <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-white via-white/80 to-transparent transition-all duration-300 group-hover:w-full"></span>
          <span className="absolute inset-0 bg-white/5 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>

        {/* תת-תפריט */}
        <div className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${showSubmenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="py-2 space-y-1 pr-8">
            {item.submenu.map((subItem, subIndex) => (
              <Link
                key={subItem.title}
                to={subItem.path}
                className="rtl-menu-item block text-white/80 p-4 transition-all duration-300 text-xl font-arimo relative group hover:text-white"
                onClick={onClose}
                dir="rtl"
              >
                <div style={{ direction: 'rtl', textAlign: 'right', position: 'relative', paddingRight: '20px' }}>
                  <div style={{ 
                    position: 'absolute', 
                    right: '0', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%' 
                  }} className="bg-white/30 group-hover:bg-white/90 group-hover:scale-150 transition-all duration-300"></div>
                  {subItem.title}
                </div>
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-white via-white/80 to-transparent transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-white/5 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      ref={itemRef}
      to={item.path}
      className="rtl-menu-item block text-white text-3xl p-6 w-full font-arimo relative group cursor-pointer"
      onClick={onClose}
      dir="rtl"
    >
      <div style={{ direction: 'rtl', textAlign: 'right', position: 'relative', paddingRight: '20px' }}>
        <div style={{ 
          position: 'absolute', 
          right: '0', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          width: '8px', 
          height: '8px', 
          borderRadius: '50%' 
        }} className="bg-white/30 group-hover:bg-white/90 group-hover:scale-150 transition-all duration-300"></div>
        {item.title}
      </div>
      <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-white via-white/80 to-transparent transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute inset-0 bg-white/5 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const menuItems = [
    {
      title: 'שירותים',
      path: '/services',
      submenu: [
        { title: 'בניית אתרים', path: '/services/website-development-page' },
        { title: 'אתרי תדמית', path: '/services/brand-website-page' },
        { title: 'עמודי נחיתה', path: '/services/landing-page-service' },
        { title: 'פיתוח תוכנה', path: '/services/software-development' },
        { title: 'פתרונות ענן', path: '/services/cloud-solutions' },
        { title: 'אבטחת מידע', path: '/services/cyber-security' },
        { title: 'בינה מלאכותית ו-IoT', path: '/services/ai-iot' },
      ],
    },
    { title: 'תיק עבודות', path: '/portfolio' },
    { title: 'בלוג', path: '/blog' },
    { title: 'צור קשר', path: '/contact' },
  ];

  // מעקב אחר סרגל הגלילה
  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollDistance = docHeight - windowHeight;
      const progress = scrollTop / totalScrollDistance;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // תמיד להציג בראש העמוד
      if (currentScrollPos < 10) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }

      const isScrollingUp = prevScrollPos > currentScrollPos;
      setVisible(isScrollingUp);
      setPrevScrollPos(currentScrollPos);
      
      // עדכון התקדמות גלילה
      handleScrollProgress();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const closeNavbar = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Helmet>
        <title>ניווט | Tech-Start - פיתוח אתרים ושיווק דיגיטלי</title>
        <meta name="description" content="ניווט באתר Tech-Start. גישה מהירה לשירותים, תיק עבודות, בלוג וצור קשר. חוויית משתמש נוחה." />
        <meta name="keywords" content="ניווט, תפריט, שירותים, תיק עבודות, בלוג, צור קשר, Tech-Start, פיתוח אתרים, שיווק דיגיטלי, בניית אתרים" />
        <html dir="rtl" lang="he" />
      </Helmet>
      
      {/* סרגל ניווט עם התקדמות גלילה */}
      <nav
        ref={navbarRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 transform ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        aria-label="Main Navigation - Tech Start"
      >
        {/* סרגל התקדמות גלילה */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-300 to-indigo-600" style={{ width: `${scrollProgress * 100}%`, opacity: scrollProgress > 0 ? 1 : 0 }} />
        
        {/* רקע סרגל ניווט עם אפקט זכוכית */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/20 bg-gradient-to-b from-black/30 to-black/10 shadow-lg" />
        
        <div className="w-full h-16 relative z-10">
          <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 transform hover:scale-105 transition-all">
            <div className={`transition-all duration-500 transform ${
              isOpen ? 'opacity-100 scale-100' : 'opacity-100 scale-100 hover:scale-105'
            }`}>
              <Link to="/" className="block relative group" aria-label="לעמוד הבית">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-blue-500/30 to-indigo-600/30 rounded-full blur-lg transition-all duration-300 group-hover:w-16 group-hover:h-16" />
                <div className="relative z-10">
                  <Logo closeNavbar={closeNavbar} />
                </div>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="sr-only">עמוד הבית</span>
              </Link>
            </div>
          </div>
          
          <div className="fixed left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2">
            <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </nav>

      {/* תפריט שפתוח */}
      <div
        className={`fixed inset-0 bg-primary z-40 transition-all duration-500 backdrop-blur-md ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* רקע אפקט חלקיקים */}
        {isOpen && <ParticlesBackground />}
        
        <div className="absolute inset-0 overflow-hidden">
          {/* תוספת אלמנטים גרפיים */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-32 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl transform -rotate-12" />
            <div className="absolute bottom-32 left-40 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-300/10 to-sky-400/10 blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-400/10 to-fuchsia-300/10 blur-3xl" />
          </div>
          
          {/* תוכן התפריט */}
          <div className={`absolute inset-y-0 right-0 w-full max-w-lg transition-all duration-700 transform dir-rtl ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            {/* רקע כפול לאפקט עומק */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary/90 backdrop-blur-lg shadow-2xl" />
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <div className="h-full overflow-y-auto">
              <div className="p-8 pt-32 relative">
                {/* לחצני ניווט */}
                <Link 
                  to="/" 
                  onClick={closeNavbar}
                  className="absolute top-20 right-12 w-8 h-8 border-r-2 border-t-2 border-white/20 hover:border-white/70 transform rotate-45 cursor-pointer transition-all duration-300"
                  aria-label="חזרה לדף הבית"
                />
                <button 
                  onClick={closeNavbar}
                  className="absolute bottom-20 right-12 w-6 h-6 border-r border-b border-white/20 hover:border-white/70 transform -rotate-45 cursor-pointer transition-all duration-300"
                  aria-label="סגירת תפריט"
                />
                
                <div className="space-y-4">
                  {menuItems.map((item, index) => (
                    <div
                      key={item.title}
                      className="transform transition-all duration-500"
                      style={{
                        transitionDelay: `${300 + (index * 100)}ms`,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(40px)'
                      }}
                    >
                      <MenuItem item={item} isOpen={isOpen} onClose={closeNavbar} index={index} />
                    </div>
                  ))}
                </div>
                
                {/* כפתור סגירה נוסף בתחתית התפריט */}
                <div 
                  className={`mt-16 text-center transition-all duration-500 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${menuItems.length * 100 + 400}ms` }}
                >
                  <button
                    onClick={closeNavbar}
                    className="text-white/70 hover:text-white text-sm font-arimo flex flex-row-reverse items-center justify-center mx-auto gap-2 group transition-all duration-300"
                  >
                    <span className="w-8 h-0.5 bg-white/30 transform transition-all duration-300 group-hover:bg-white/90 group-hover:w-10"></span>
                    סגירת תפריט
                    <span className="w-8 h-0.5 bg-white/30 transform transition-all duration-300 group-hover:bg-white/90 group-hover:w-10"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* סגנונות גלובליים */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        /* תמיכה מקיפה בעברית וכיוון RTL */
        html[dir="rtl"], body[dir="rtl"], [dir="rtl"] {
          direction: rtl !important;
          text-align: right !important;
        }
        
        /* סגנונות פריטי תפריט בעברית */
        .rtl-menu-item {
          direction: rtl !important;
          text-align: right !important;
        }
        
        /* מבטיח סידור נכון של פריטי התפריט */
        .menu-item-container {
          display: flex !important;
          flex-direction: row-reverse !important;
          align-items: center !important;
          width: 100% !important;
          direction: rtl !important;
          text-align: right !important;
          justify-content: flex-end !important;
        }
        
        /* מבטיח שהבולט נמצא בצד הנכון */
        .menu-item-container .w-2.h-2 {
          margin-left: 12px !important;
          margin-right: 0 !important;
        }
      `}</style>

      {/* סגנונות גלובליים לתיקון בעיות עם tailwind ותצוגה נכונה בעברית */}
      <style jsx global>{`
        /* תיקון כיוון RTL עם התנגשויות tailwind */
        [dir="rtl"] {
          direction: rtl !important;
          text-align: right !important;
          unicode-bidi: embed !important;
        }
        
        /* מבטיח שהטקסט בעברית יהיה מיושר לימין בכל מקרה */
        .rtl-menu-item,
        .rtl-menu-item * {
          text-align: right !important;
          direction: rtl !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;