import React, { useState } from 'react';
import { FiPackage } from "react-icons/fi";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { MdOutlineSegment } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { useTheme } from '../../hooks/useTheme';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = ({ isMobile = false, onItemClick }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (onItemClick) {
      onItemClick(itemName);
      
    }
    if (itemName === 'logout') {
      const confirmed = window.confirm('Are you sure you want to logout?');
      if (confirmed) {
        localStorage.removeItem('loginUser');
        navigate('/login');
      }
      return true;
    }
    const item = menuItems.find(item => item.name === itemName);
    if (item && item.path) {
      navigate(item.path);
    }
  };

  const menuItems = [
    {
      name: 'Dashboard',
      icon: MdOutlineLaptopChromebook,
      count: null,
      active: true,
      path: '/'
    },
    {
      name: 'Users',
      icon: LuUsers,
      count: 116,
      path: '/users'

    },
    {
      name: 'Products',
      icon: FiPackage,
      count: 100,
      path: '/products'
    },
    {
      name: 'Categories',
      icon: FiLayers,
      count: null,
      path:'/category'
    }
  ];

  return (
    <div className={`h-full w-full ${isDark ? 'bg-primarycolor-800 border-gray-700' : 'bg-white border-gray-200'} shadow-md flex flex-col`}>
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-4 ">
        <div className="bg-primarycolor-600 text-white rounded-lg h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center flex-shrink-0">
          <FiPackage className="text-xl sm:text-2xl" />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>iHUZA</h1>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>INVENTORY</p>
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
                  ? isDark
                    ? 'bg-primarycolor-800 text-primarycolor-100 shadow-sm'
                    : 'bg-primarycolor-50 text-primarycolor-500 shadow-sm'
                  : isDark
                    ? 'text-gray-300 hover:bg-primarycolor-600 hover:text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }
              `}
            >
              <Icon
                size={20}
                className={`flex-shrink-0 ${isActive
                    ? isDark
                      ? 'text-primarycolor-200'
                      : 'text-primarycolor-600'
                    : isDark
                      ? 'text-gray-500 group-hover:text-white'
                      : 'text-gray-500 group-hover:text-gray-700'
                  }`}
              />
              <span className={`font-medium text-sm sm:text-base min-w-0 flex-1 truncate ${isDark ? 'text-gray-100' : ''}`}>
                {item.name}
              </span>
              {item.count && (
                <span className={`
                  text-xs px-2 py-1 rounded-full font-medium flex-shrink-0
                  ${isActive
                    ? isDark
                      ? 'bg-primarycolor-900 text-primarycolor-100'
                      : 'bg-primarycolor-100 text-primarycolor-700'
                    : isDark
                      ? 'bg-gray-800 text-gray-400'
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
      <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} p-3`}>
        <Link to="/login">
          <button
            onClick={() => handleItemClick('logout')}
            className="
            w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
            text-gray-500 hover:bg-red-50 hover:text-red-600
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
        </Link>

      </div>

      {/* Mobile indicator (optional) */}
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