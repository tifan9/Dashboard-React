import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const AnalyticCard = ({
    title,
    description,
    icon,
    iconColor,
    bgColor,
}) => {
  const { isDark } = useTheme();
  return (
    <>
      <div className={`${isDark ? 'bg-primarycolor-800' : 'bg-white'} shadow-md rounded-lg p-6 flex items-center sm:items-start`}>
        <div className={`text-4xl mr-4 ${iconColor} ${bgColor} p-3 rounded-md`}>{icon}</div>
        {/* Title and Description Section */}
        <div>
          <h2 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default AnalyticCard;
