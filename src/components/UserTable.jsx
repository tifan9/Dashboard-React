import React from 'react';
import { User } from 'lucide-react';
import Button from './Button';


const users = [
  {
    name: "John Smith", 
    email: "john.smith@ihuza.com", 
    role: "Admin", 
    status: "Active", 
    lastLogin: "2 hours ago",
  },
  {
    name: "Sarah Johnson", 
    email: "sarah.j@ihuza.com", 
    role: "Manager", 
    status: "Active", 
    lastLogin: "5 hours ago",
  },
  {
    name: "Michael Brown", 
    email: "m.brown@ihuza.com", 
    role: "Staff", 
    status: "Active", 
    lastLogin: "1 day ago",
  },
  {
    name: "Emily Davis", 
    email: "emily.d@ihuza.com", 
    role: "Staff", 
    status: "Inactive", 
    lastLogin: "3 days ago",
  },
  {
    name: "David Wilson", 
    email: "d.wilson@ihuza.com", 
    role: "Staff", 
    status: "Active", 
    lastLogin: "6 hours ago",
  },
  {
    name: "Lisa Anderson", 
    email: "lisa.a@ihuza.com", 
    role: "Manager", 
    status: "Active", 
    lastLogin: "30 min ago",
  },
  {
    name: "Robert Taylor", 
    email: "r.taylor@ihuza.com", 
    role: "Staff", 
    status: "Active", 
    lastLogin: "2 days ago",
  },
  {
    name: "Jennifer Miller", 
    email: "j.miller@ihuza.com", 
    role: "Staff", 
    status: "Active", 
    lastLogin: "4 hours ago",
  },
];

const RoleBadge = ({ role }) => {
  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-700';
      case 'Manager':
        return 'bg-blue-100 text-blue-700';
      case 'Staff':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(role)}`}>
      {role}
    </span>
  );
};

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Inactive':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

const UserTable = () => {
  const handleEdit = (user) => {
    console.log('Edit user:', user);
  };

  const handleDelete = (user) => {
    console.log('Delete user:', user);
  };

  const handleAddUser = () => {
    console.log('Add new user');
  };

  return (
    <div className=" pt-5 ">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <Button label="Add User" onClick={handleAddUser} />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <RoleBadge role={user.role} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <Button 
                        label="Edit" 
                        variant="secondary" 
                        onClick={() => handleEdit(user)}
                      />
                      <Button 
                        label="Delete" 
                        variant="danger" 
                        onClick={() => handleDelete(user)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;