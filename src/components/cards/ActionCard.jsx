import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ActionCard = ({
    title,
    description,
    icon: Icon,
    buttonVariant = 'primary'
}) => {
  const { isDark } = useTheme();
  
  const buttonStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    purple: "bg-purple-600 hover:bg-purple-700 text-white"
  };

  return (
    <div className={`flex justify-between items-center p-6 rounded-lg mb-4 last:mb-0 ${isDark ? 'bg-primarycolor-700' : 'bg-gray-50'}`}>
      <div className='flex items-center gap-4'>
        <Icon className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={28}/>
        <div>
          <h1 className={`text-xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h1>
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</span>
        </div>
      </div>
      <button className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${buttonStyles[buttonVariant]}`}>
        Go
      </button>
    </div>
  );
}

export default ActionCard;