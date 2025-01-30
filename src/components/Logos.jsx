// components/Logos.jsx
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => {
  const location = useLocation();

  useEffect(() => {
    // גלול לראש הדף רק אם אנחנו בעמוד הראשי
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [location]);

  return (
    <Link to="/" className="flex items-center">
      <img src="/logo.svg" alt="לוגו גאיה טק" className="h-10" />
    </Link>
  );
};

export default Logo;