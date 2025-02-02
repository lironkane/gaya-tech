import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className="mt-8 flex justify-center">
      <Link
        to="/blog"
        className="bg-primary-dark hover:bg-primary-dark/80 text-white font-bold py-2 px-4 rounded-full transition duration-300"
      >
        חזרה לבלוג
      </Link>
    </div>
  );
};

export default BackButton;