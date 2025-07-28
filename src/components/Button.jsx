import React from 'react';

const Button = ({ label, variant = 'primary', size = 'sm', onClick }) => {
  const baseClasses = 'px-3 py-1.5 rounded-md font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'text-blue-600 hover:bg-blue-50',
    danger: 'text-red-600 hover:bg-red-50'
  };
  return (
    <>
      <button 
      className={`${baseClasses} ${variants[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
    </>
  );
}

export default Button;
