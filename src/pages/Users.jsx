import React from 'react';
import UserTable from '../components/UserTable';
import { useTheme } from '../hooks/useTheme';

const Users = () => {

  const { isDark } = useTheme();




  return (
    <>
      <div className={`flex h-screen w-full overflow-hidden ${isDark ? 'bg-primarycolor-900' : 'bg-gray-100'}`}>
        <div className="w-full">
          <UserTable />
        </div>
      </div>
    </>
  );
}

export default Users;
