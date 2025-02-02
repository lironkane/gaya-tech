import React from 'react';

const BackButton = ({ handleBack }) => {
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