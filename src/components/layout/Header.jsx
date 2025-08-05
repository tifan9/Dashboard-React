import React from 'react';
import { LuUser } from "react-icons/lu";
import { useTheme } from '../../hooks/useTheme';
import { 
  Sun, 
  Moon, 
  Bell,
  Settings,
} from 'lucide-react';
import { useLoginUser } from '../../context/LoginUserContext';
const Header = () => {
    const { isDark, toggleTheme } = useTheme();
    const { loginUser } = useLoginUser();

  return (
    <div className={`flex flex-wrap items-center px-6 py-4 shadow-md ${isDark ? 'bg-primarycolor-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      
      <div className="text-left mb-4 sm:mb-0">
        <h2 className={`font-bold text-2xl ${isDark ? 'text-white' : 'text-gray-900'}`}>Dashboard</h2>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Welcome Back, {loginUser?.name || loginUser?.username || 'Guest'}</p>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-xl transition-colors ${
            isDark ? 'bg-primarycolor-800 text-gray-300 hover:bg-primarycolor-800' : ' text-gray-600 hover:bg-gray-200'
          }`}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className={`p-2 rounded-lg transition-colors ${
          isDark ? 'bg-primarycolor-800 text-gray-300 hover:bg-primarycolor-800' : ' text-gray-600 hover:bg-gray-200'
        }`}>
          <Settings className="w-5 h-5" />
        </button>
        <button className={`p-2 rounded-lg transition-colors relative ${
          isDark ? 'bg-primarycolor-800 text-gray-300 hover:bg-primarycolor-800' : ' text-gray-600 hover:bg-gray-200'
        }`}>
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        
        
        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
      {loginUser?.email || ''}
    </span>
    <div className="w-8 h-8 bg-primarycolor-600 rounded-full text-white flex items-center justify-center font-bold">
       <LuUser />
    </div>
      </div>
    </div>
  );
}

export default Header;