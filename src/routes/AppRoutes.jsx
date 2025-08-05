import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Users from '@pages/Users';
import ProductPage from '@pages/ProductPage';
import MainLayout from '../components/MainLayout';
import CategoryPage from '../pages/CategoryPage';



const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MainLayout><Dashboard /> </MainLayout>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<MainLayout><Users /></MainLayout>} />
        <Route path="/products" element={<MainLayout><ProductPage /></MainLayout>} />
        <Route path="/category" element={<MainLayout><CategoryPage /></MainLayout>} />
    </Routes>
    </>
  );
}

export default AppRoutes;
