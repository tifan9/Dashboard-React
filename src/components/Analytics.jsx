import React from 'react';
import AnalyticCard from './cards/AnalyticCard';
import { LuUsers } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io"; 
import { FaExclamationTriangle } from "react-icons/fa";
const Analytics = () => {
  return (
    <>
      <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticCard
          icon={<LuUsers/>}
      title='116'
      description='Total User'
      iconColor="text-blue-500"
      bgColor="bg-blue-100"
        />
        <AnalyticCard
          icon={<FiPackage/>}
      title='100'
      description='Total Products'
      iconColor='text-primarycolor-600'
      bgColor='bg-blue-100'
        />
        <AnalyticCard
          icon={< IoMdCheckmarkCircleOutline />}
      title='116'
      description='Total User'
          iconColor='text-green-500 '
      bgColor='bg-green-100'
        />
        <AnalyticCard
          icon={<FaExclamationTriangle/>}
      title='116'
      description='Total User'
      iconColor='text-yellow-500'
      bgColor='bg-orange-100'
        />
      </div>
    </>
  );
}

export default Analytics;
