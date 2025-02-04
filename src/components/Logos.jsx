// components/Logos.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src="/logo.svg" alt="לוגו גאיה טק" className="h-10" />
    </Link>
  );
};

export default Logo;