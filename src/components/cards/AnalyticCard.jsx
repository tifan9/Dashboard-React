import React from 'react';

const AnalyticCard = ({
    title,
    description,
    icon,
    iconColor,
    bgColor,
}) => {
  return (
    <>
      <div className={`bg-white shadow-md rounded-lg p-6 flex  items-center sm:items-start ${bgColor}`}>
      <div className={`text-4xl mr-4 ${iconColor} ${bgColor} p-3 rounded-md`}>{icon}</div>
      
      {/* Title and Description Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    </>
  );
}

export default AnalyticCard;
