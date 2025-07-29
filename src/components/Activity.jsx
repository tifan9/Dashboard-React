import React from 'react';
import { Package, UserPlus, AlertTriangle } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ActivityItem = ({ icon: Icon, iconColor, title, subtitle, date }) => {
  const { isDark } = useTheme();
  
  return (
    <div className="flex items-start gap-3 mb-6 last:mb-0">
      <div className={`p-2 rounded-lg ${iconColor}`}>
        <Icon size={16} className="text-white" />
      </div>
      <div className="flex-1">
        <h3 className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
        <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          {date}
        </p>
      </div>
    </div>
  );
};

const Activity = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-primarycolor-800' : 'bg-white'}`}>
      <div className='flex justify-between items-center mb-6'>
        <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h1>
        <button className={`text-sm hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          View all
        </button>
      </div>
      
      <div>
        <ActivityItem
          icon={Package}
          iconColor="bg-blue-500"
          title="Product added to inventory"
          subtitle='MacBook Pro 16" M3 (PROD2024001)'
          date="Dec 4, 2024"
        />
        
        <ActivityItem
          icon={Package}
          iconColor="bg-blue-500"
          title="Product assigned to Sarah Johnson"
          subtitle="Dell ThinkPad X1 Carbon (PROD2024001)"
          date="Dec 3, 2024"
        />
        
        <ActivityItem
          icon={Package}
          iconColor="bg-blue-500"
          title="Product assigned to Michael Brown"
          subtitle="Apple MacBook Air M2 (PROD2024001)"
          date="Dec 2, 2024"
        />
        
        <ActivityItem
          icon={AlertTriangle}
          iconColor="bg-yellow-500"
          title="Product sent for maintenance"
          subtitle="HP Spectre X360 - Screen replacement required"
          date="Jan 16, 2024"
        />
        
        <ActivityItem
          icon={UserPlus}
          iconColor="bg-green-500"
          title="New user registered"
          subtitle="Amanda White - Staff Member"
          date="Jan 14, 2024"
        />
      </div>
    </div>
  );
}

export default Activity;