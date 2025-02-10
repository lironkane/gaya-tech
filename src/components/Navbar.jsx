import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logos';

const HamburgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex items-center justify-center px-4 py-2 rounded-full bg-primary-dark hover:bg-primary-dark/50 transition-all duration-300 gap-2 border border-white/20 hover:border-white/40 relative overflow-hidden group"
    >
      <div className="relative w-6 h-5 transition-all duration-300">
        <span className={`absolute right-0 w-full h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
        }`}></span>
        <span className={`absolute right-0 w-full h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
        }`}></span>
        <span className={`absolute right-0 w-full h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
        }`}></span>
      </div>
      <span className="text-white font-medium text-lg relative z-10 font-arimo">Menu</span>
    </button>
  );
};

const MenuItem = ({ item, isOpen, onClose }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  if (item.submenu) {
    return (
      <div 
        className="relative"
        onMouseEnter={() => setShowSubmenu(true)}
        onMouseLeave={() => setShowSubmenu(false)}
      >
        <div className="block text-white text-3xl p-6 text-right w-full font-arimo relative group">
          <span className="relative">
            {item.title}
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </span>
        </div>
        
        <div className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${showSubmenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="py-2 space-y-1">
            {item.submenu.map((subItem, index) => (
              <Link
                key={subItem.title}
                to={subItem.path}
                className="block text-white/90 p-4 pr-8 transition-all duration-300 text-xl font-arimo relative group"
                onClick={onClose}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="relative">
                  {subItem.title}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className="block text-white text-3xl p-6 text-right font-arimo relative group"
      onClick={onClose}
    >
      <span className="relative">
        {item.title}
        <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 10) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setVisible(isScrollingUp);
      setPrevScrollPos(currentScrollPos);
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
      <nav
        className={`fixed inset-x-2 top-8 z-50 transition-all duration-500 transform ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 h-8 flex justify-between items-center">
          <div className={`transition-all duration-500 transform ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}>
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white" />
              <div className="relative z-10">
                <Logo closeNavbar={closeNavbar} />
              </div>
            </div>
          </div>
          <div className="mr-auto">
            <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-primary z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Shadow Container */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Top Half */}
            <div className={`absolute top-0 right-0 w-full h-1/2 bg-primary shadow-xl transition-all duration-500 ease-in-out transform origin-bottom ${
              isOpen ? 'translate-y-0' : '-translate-y-full'
            }`} style={{ clipPath: 'inset(0 0 -1px 0)' }} />
            
            {/* Bottom Half */}
            <div className={`absolute bottom-0 right-0 w-full h-1/2 bg-primary shadow-xl transition-all duration-500 ease-in-out transform origin-top ${
              isOpen ? 'translate-y-0' : 'translate-y-full'
            }`} style={{ clipPath: 'inset(-1px 0 0 0)' }} />

            {/* Content Shadow */}
            <div className={`absolute inset-y-0 right-0 w-full max-w-md shadow-2xl transition-opacity duration-700 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>

          {/* Content Container */}
          <div className={`absolute inset-y-0 right-0 w-full max-w-md transition-all duration-300 ${
            isOpen ? 'opacity-100 delay-300' : 'opacity-0'
          }`}>
            <div className="h-full overflow-y-auto">
              <div className="p-8 pt-32">
                <div className="space-y-8">
                  {menuItems.map((item, index) => (
                    <div
                      key={item.title}
                      className="transform transition-all duration-300"
                      style={{
                        transitionDelay: `${300 + (index * 30)}ms`,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
                      }}
                    >
                      <MenuItem item={item} isOpen={isOpen} onClose={closeNavbar} />
                    </div>
                  ))}
                </div>
                <button
                  className="w-full bg-primary-dark/30 text-white p-6 rounded-lg border border-white/20 text-2xl mt-12 font-arimo relative group"
                  onClick={closeNavbar}
                  style={{
                    transitionDelay: `${300 + (menuItems.length * 30)}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <span className="relative">
                    דבר איתנו
                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;