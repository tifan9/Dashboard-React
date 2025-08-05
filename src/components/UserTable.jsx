import React from 'react';
import Table from './Table';
import Button from './Button';
import { useTheme } from '../hooks/useTheme';
import { useUser } from '../hooks/useUser';

const RoleBadge = ({ role }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-medium ${role === 'Admin' ? 'bg-purple-100 text-purple-700' : role === 'Manager' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
    {role}
  </span>
);

const StatusBadge = ({ status }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-medium ${status === 'Active' ? 'bg-green-100 text-green-700' : status === 'Inactive' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
    {status}
  </span>
);

const UserTable = () => {
  const { users } = useUser();
  const { isDark } = useTheme();

  const columns = [
    { label: 'User', className: `px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-500'}` },
    { label: 'Role', className: `px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-500'}` },
    { label: 'Status', className: `px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-500'}` },
    { label: 'Last Login', className: `px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-500'}` },
    { label: 'Actions', className: `px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-500'}` }
  ];

  const renderRow = (user, idx) => (
    <tr key={idx} className={`${isDark ? 'bg-primarycolor-800 hover:bg-primarycolor-700' : 'bg-white hover:bg-gray-50'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div>
          <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{user.name}</div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{user.email}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <RoleBadge role={user.role} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge status={user.status} />
      </td>
      <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}> 
        {user.lastLogin}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <div className="flex space-x-2">
          <Button label="Edit" variant="secondary" onClick={() => {}} />
          <Button label="Delete" variant="danger" onClick={() => {}} />
        </div>
      </td>
    </tr>
  );

  return (
    <div
      className={`rounded-lg shadow-sm border ${isDark ? 'bg-primarycolor-800 border-gray-700' : 'bg-white border-gray-200'}`}
    >
      <div
        className={`flex justify-between items-center p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
      >
        <h1 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Users</h1>
        <Button className="" size="sm" label="Add User" onClick={() => {}} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={`border-b ${isDark ? 'bg-primarycolor-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}> 
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={col.className}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className={`${isDark ? 'bg-primarycolor-800 divide-gray-800' : 'bg-white divide-gray-200'} divide-y`}>
            {users.map(renderRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;