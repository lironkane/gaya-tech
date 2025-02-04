// components/Logos.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ closeNavbar }) => {
  const handleClick = () => {
    if (closeNavbar) {
      closeNavbar();
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  };

  return (
    <Link 
      to="/" 
      onClick={handleClick}
      className="cursor-pointer"
      aria-label="לדף הבית"
    >
      <img src="/logo.svg" alt="לוגו גאיה טק" className="h-10" />
      </Link>
  );
};

export default Logo;