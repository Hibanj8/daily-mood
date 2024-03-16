// SubmitButton.jsx
import React from 'react';

const SubmitButton = ({ onSubmit }) => {
  return (
    <>
    <br /> <br />
    <button
      className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
      onClick={onSubmit} // Utiliser onSubmit à la place de onClick
    >
      Soumettre
    </button>
    </>
  );
};

export default SubmitButton;