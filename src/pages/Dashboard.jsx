import React from 'react';
import Barner from '../components/Barner';
import Analytics from '../components/Analytics';
import Product from '../components/Product';
import UserTable from '../components/UserTable';
import { useTheme } from '../hooks/useTheme';
import Action from '../components/Action';
import Activity from '../components/Activity';

const Dashboard = () => {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? 'bg-primarycolor-900' : 'bg-gray-100'} min-h-screen w-full`}>
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Banner Component */}
        <div className="w-full">
          <Barner />
        </div>
        {/* Analytics Component */}
        <div className="w-full">
          <Analytics />
        </div>
        {/* Product Component */}
        <div className="w-full">
          <Product />
        </div>
        {/* User Table Component */}
        <div className="w-full">
          <UserTable />
        </div>
        <div className="w-full ">
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Activity />
            </div>
            <div className="flex-1">
              <Action />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;