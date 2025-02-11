import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/blog'); // שנה את הנתיב לכתובת של עמוד הבלוג שלך
  };

  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={handleBack}
        className="bg-primary-dark hover:bg-primary-dark/80 text-white font-bold py-2 px-4 rounded-full transition duration-300"
      >
        חזרה
      </button>
    </div>
  );
};

export default BackButton;