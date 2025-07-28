import React from 'react';

const statusColors = {
  "In Stock": "bg-green-100 text-green-800",
  "Low Stock": "bg-yellow-100 text-yellow-800",
  "Out of Stock": "bg-red-100 text-red-800",
};

const ProductCard = ({ name, category, date, status }) => {
  return (
    <div className="border rounded-md border-gray-200 p-4 mb-4 last:border-0 last:pb-0 last:mb-0">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        {status && (
          <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
            {status}
          </span>
        )}
      </div>
      
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <span className="mr-2 "></span>
        <span>{category}</span>
      </div>
      
      <div className="mt-1  text-xs text-gray-400">
        {date}
      </div>
    </div>
  );
};

export default ProductCard;