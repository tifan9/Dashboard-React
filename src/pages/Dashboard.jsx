import React, { useState, useEffect } from 'react';
import SideBar from '../components/layout/SideBar';
import Header from '../components/layout/Header';
import Barner from '../components/Barner';
import Analytics from '../components/Analytics';
import Product from '../components/Product';
import UserTable from '../components/UserTable';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto close sidebar on desktop
      if (window.innerWidth >= 768) {
        setShowSidebar(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
        {/* Desktop Sidebar - Fixed width, hidden on mobile/tablet */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="w-64">
            <SideBar />
          </div>
        </div>

        {/* Mobile/Tablet Sidebar Overlay */}
        {showSidebar && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 z-40  bg-opacity-50 transition-opacity"
              onClick={closeSidebar}
              aria-hidden="true"
            />
            
            {/* Sidebar Panel */}
            <div className="lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform">
              <div className="h-full overflow-y-auto">
                {/* Close button for mobile */}
                <div className="flex justify-end p-4 border-b">
                  <button
                    onClick={closeSidebar}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close sidebar"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <SideBar />
              </div>
            </div>
          </>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Mobile/Tablet Navigation Header */}
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <button 
              onClick={toggleSidebar} 
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1 transition-colors"
              aria-label="Open sidebar"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Mobile Logo/Brand (optional) */}
            {/* <div className="font-semibold text-lg text-gray-900">
              Dashboard
            </div> */}
            
            {/* Mobile action buttons (optional) */}
            <div className="w-6 h-6"></div> {/* Spacer for centering */}
          </div>

          {/* Header Component */}
          <div className="flex-shrink-0">
            <Header />
          </div>

          {/* Main Content - Scrollable */}
          <main className="flex-1 overflow-y-auto bg-gray-100">
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
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;