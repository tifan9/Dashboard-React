import React from 'react';
import { Users, Package, List } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import ActionCard from './cards/ActionCard';

const Action = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-primarycolor-800' : 'bg-white'}`}>
      <h1 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h1>
      
      <div className="space-y-0">
        <ActionCard
          title="View Users"
          description="View all registered users"
          icon={Users}
          buttonVariant="primary"
        />
        <ActionCard
          title="View Products"
          description="View all registered products"
          icon={Package}
          buttonVariant="primary"
        />
        <ActionCard
          title="View Assignments"
          description="View all product assignments"
          icon={List}
          buttonVariant="purple"
        />
      </div>
    </div>
  );
}

export default Action;