import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Users from '@pages/Users';
import ProductPage from '@pages/ProductPage';


const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<ProductPage />} />
    </Routes>
    </>
  );
}

export default AppRoutes;
