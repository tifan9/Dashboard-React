import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const statusColors = {
  "In Stock": "bg-green-100 text-green-800",
  "Low Stock": "bg-yellow-100 text-yellow-800",
  "Out of Stock": "bg-red-100 text-red-800",
};

const ProductCard = ({ name, category, date, status }) => {
  const { isDark } = useTheme();
  return (
    <div className={`border rounded-md ${isDark ? 'border-gray-700' : 'border-gray-200'} p-4 mb-4 ${isDark ? 'bg-primarycolor-800' : 'bg-white'}`}>
      <div className="flex justify-between items-start">
        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
        {status && (
          <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
            {status}
          </span>
        )}
      </div>
      
      <div className={`mt-2 flex items-center text-sm  ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        <span className="mr-2 "></span>
        <span>{category}</span>
      </div>
      
      <div className={`mt-1  text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        {date}
      </div>
    </div>
  );
};

export default ProductCard;