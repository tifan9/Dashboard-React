import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "John Smith",
      email: "john.smith@huza.com",
      password:"123",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago"
    },
    {
      name: "Sarah Johnson",
      email: "sarah.john.ra.com",
      password:"123",
      role: "Manager",
      status: "Active",
      lastLogin: "5 hours ago"
    },
    {
      name: "Michael Brown",
      email: "m.brown@huza.com",
      password:"123",
      role: "Staff",
      status: "Active",
      lastLogin: "1 day ago"
    },
    {
      name: "Emily Davis",
      email: "emir.y.d@huza.com",
      password:"123",
      role: "Staff",
      status: "Inactive",
      lastLogin: "3 days ago"
    },
    {
      name: "David Wilson",
      email: "d.wilson@huza.com",
      password:"123",
      role: "Staff",
      status: "Active",
      lastLogin: "8 hours ago"
    },
    {
      name: "Lisa Anderson",
      email: "isa.a@huza.com",
      password:"123",
      role: "Manager",
      status: "Active",
      lastLogin: "30 min ago"
    },
    {
      name: "Robert Taylor",
      email: "t.taylor@huza.com",
      password:"123",
      role: "Staff",
      status: "Active",
      lastLogin: "2 days ago"
    },
    {
      name: "Jennifer Miller",
      email: "j.miller@huza.com",
      password:"123",
      role: "Staff",
      status: "Active",
      lastLogin: "4 hours ago"
    },
    {
      name: "Christopher Lee",
      email: "c.lee@huza.com",
      password:"123",
      role: "Admin",
      status: "Active",
      lastLogin: "1 hour ago"
    },
    {
      name: "Amanda White",
      email: "a.wittle@huza.com",
      password:"123",
      role: "Staff",
      status: "Inactive",
      lastLogin: "1 week ago"
    }
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};