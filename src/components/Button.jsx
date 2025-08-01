import React from 'react';

// const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
//     const baseClasses = 'font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2';
//     const variants = {
//         primary: 'bg-blue-600 text-white hover:bg-blue-700',
//         secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
//         danger: 'bg-red-600 text-white hover:bg-red-700',
//         ghost: 'text-gray-600 hover:bg-gray-100'
//     };
//     const sizes = {
//         sm: 'px-3 py-1.5 text-sm',
//         md: 'px-4 py-2',
//         lg: 'px-6 py-3 text-lg'
//     };

//     return (
//         <button
//             className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
//             {...props}
//         >
//             {children}
//         </button>
//     );
// };
const Button = ({ label, variant = 'primary', size = 'md', className = '', onClick }) => {
  const baseClasses = 'px-3 py-1.5 rounded-md font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'text-blue-600 hover:bg-blue-50',
    danger: 'text-red-600 hover:bg-red-50'
  };
  const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg'
    };
  return (
    <>
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}

export default Button;
