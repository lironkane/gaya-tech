import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ closeNavbar }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (closeNavbar) {
      closeNavbar();
    }
  };

  return (
    <Link to="/" className="flex items-center" onClick={handleClick}>
      <img src="/logo.svg" alt="לוגו גאיה טק" className="h-10" />
    </Link>
  );
};

export default Logo;