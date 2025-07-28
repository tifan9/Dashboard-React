import React, { useState } from 'react';
import { FiPackage } from "react-icons/fi";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { MdOutlineSegment } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const SideBar = ({ isMobile = false, onItemClick }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // Call parent function to close mobile sidebar if needed
    if (onItemClick) {
      onItemClick(itemName);
    }
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: MdOutlineLaptopChromebook,
      count: null,
      active: true
    },
    {
      name: 'Users',
      icon: LuUsers,
      count: 116
    },
    {
      name: 'Products',
      icon: FiPackage,
      count: 100
    },
    {
      name: 'Assignments',
      icon: MdOutlineSegment,
      count: 10
    },
    {
      name: 'Categories',
      icon: FiLayers,
      count: null
    }
  ];

  return (
    <div className="h-full w-full bg-white shadow-md flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <div className="bg-primarycolor-600 text-white rounded-lg h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center flex-shrink-0">
          <FiPackage className="text-xl sm:text-2xl" />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="font-bold text-lg sm:text-xl text-gray-900 leading-tight">iHUZA</h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-tight">INVENTORY</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;
          
          return (
            <button
              key={item.name}
              onClick={() => handleItemClick(item.name)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
                transition-all duration-200 group
                ${isActive 
                  ? 'bg-primarycolor-50 text-primarycolor-700 shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }
              `}
            >
              <Icon 
                size={20} 
                className={`flex-shrink-0 ${
                  isActive 
                    ? 'text-primarycolor-600' 
                    : 'text-gray-500 group-hover:text-gray-700'
                }`} 
              />
              
              <span className="font-medium text-sm sm:text-base min-w-0 flex-1 truncate">
                {item.name}
              </span>
              
              {item.count && (
                <span className={`
                  text-xs px-2 py-1 rounded-full font-medium flex-shrink-0
                  ${isActive 
                    ? 'bg-primarycolor-100 text-primarycolor-700' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="border-t border-gray-100 p-3">
        <button 
          onClick={() => handleItemClick('logout')}
          className="
            w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
            text-gray-700 hover:bg-red-50 hover:text-red-600
            transition-all duration-200 group
          "
        >
          <FiLogOut 
            size={20} 
            className="flex-shrink-0 text-gray-500 group-hover:text-red-500" 
          />
          <span className="font-medium text-sm sm:text-base">
            Logout
          </span>
        </button>
      </div>

      {isMobile && (
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Tap outside to close
          </p>
        </div>
      )}
    </div>
  );
};

export default SideBar;