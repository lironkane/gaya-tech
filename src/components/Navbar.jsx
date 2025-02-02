import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logos';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

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
    setIsOpen(false); // סגירת התפריט בעת ניווט
  }, [location]);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 transform ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <Logo closeNavbar={closeNavbar} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center px-6 py-2 rounded-full bg-primary-dark hover:bg-primary-dark/50 transition-all duration-300 gap-2 border border-white/20 hover:border-white/40"
          >
            <MenuIcon className="w-6 h-6 text-white" />
            <span className="text-white font-medium text-lg">Menu</span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-primary z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >


        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
          <div className="p-4 space-y-4">
            {menuItems.map((item) => (
              <div key={item.title} className="space-y-2">
                {item.submenu ? (
                  <>
                    {/* כותרת תת-תפריט */}
                    <div
                      className="block text-white text-xl font-medium p-4 rounded-lg transition-all duration-300 text-center w-full flex items-center justify-center gap-2"
                    >
                      {item.title}
                    </div>
                    {/* פריטי תת-תפריט */}
                    <div className="space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path}
                          className="block text-white/90 hover:text-white p-3 pl-8 rounded-lg hover:bg-primary-dark/20 transition-all duration-200 text-base"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-white text-xl font-medium p-4 rounded-lg hover:bg-primary-dark/30 transition-all duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            {/* כפתור "דבר איתנו" */}
            <button
              className="w-full bg-primary-dark/30 text-white p-4 rounded-lg transition-all duration-300 hover:bg-primary-dark/50 border border-white/20 text-lg font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              דבר איתנו
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;