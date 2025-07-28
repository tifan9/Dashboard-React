import React from 'react';
import { CiSettings } from "react-icons/ci";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuUser } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center px-6 py-4 shadow-md bg-white">
      
      <div className="text-left mb-4 sm:mb-0">
        <h2 className="font-bold text-2xl text-black">Dashboard</h2>
        <p className="text-gray-600">Welcome Back, Admin</p>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-4">
        <MdOutlineDarkMode className="text-2xl text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300" />
        <CiSettings className="text-2xl text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300" />
        <MdNotificationsNone className="text-2xl text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300" />

        <span className="text-gray-700 text-sm sm:text-base">Admin@ihuza.com</span>
        <div className="w-8 h-8 bg-primarycolor-600 rounded-full text-white flex items-center justify-center font-bold"><LuUser/></div>
      </div>
    </div>
  );
}

export default Header;