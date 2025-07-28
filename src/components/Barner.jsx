import React from 'react';
import { FiPackage } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from "react-icons/io"; 

const Barner = () => {
  return (
    <>
      <div className="bg-primarycolor-600 text-white text-left p-4 rounded-2xl shadow-md mb-6 ">
      <div className="flex items-center">
        <div className="bg-blue-400 text-white rounded-md h-12 w-12 flex items-center justify-center mr-4">
          <FiPackage className="text-2xl" size={25} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-white">iHUZA INVENTORY - System Overview</h3>
          <p className="mb-2">Monitor your iHUZA inventory and product assignments in real-time.</p>
          <div>
            <IoMdCheckmarkCircleOutline className="text-green-500 inline-block mr-2" size={20} />
            <span className="text-white font-medium"> All Systems Operational</span>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Barner;
