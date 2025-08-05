import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import Product from '../components/Product';
import Header from '../components/layout/Header';
import SideBar from '../components/layout/SideBar';

const ProductPage = () => {
  const { isDark } = useTheme();

  return (
    <>
      <div className={`flex h-screen w-full overflow-hidden ${isDark ? 'bg-primarycolor-900' : 'bg-gray-100'}`}>
        <div className="w-full">
          <Product />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
