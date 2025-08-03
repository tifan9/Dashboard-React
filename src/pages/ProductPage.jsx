import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import Product from '../components/Product';
import Header from '../components/layout/Header';
import SideBar from '../components/layout/SideBar';

const ProductPage = () => {
      const [showSidebar, setShowSidebar] = useState(false);
      const [isMobile, setIsMobile] = useState(false);
        const { isDark, toggleTheme } = useTheme();
    
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
      <div className={`flex h-screen w-full overflow-hidden ${isDark ? 'bg-primarycolor-900' : 'bg-gray-100'}`}>
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="w-64">
            <SideBar isMobile={false} />
          </div>
        </div>
        {/* Mobile/Tablet Sidebar Overlay */}
        {showSidebar && (
          <>
            {/* Backdrop */}
            <div
              className={`lg:hidden fixed inset-0 z-40 transition-opacity ${isDark ? 'bg-primarycolor-950 bg-opacity-40' : 'bg-black bg-opacity-10'}`}
              onClick={closeSidebar}
              aria-hidden="true"
            />
            {/* Sidebar Panel */}
            <div className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 shadow-xl transform transition-transform ${isDark ? 'bg-primarycolor-900 border-r border-gray-700' : 'bg-white'}`}>
              <div className="h-full overflow-y-auto">
                {/* Close button for mobile */}
                <div className={`flex justify-end p-4 border-b ${isDark ? 'border-gray-700' : ''}`}> 
                  <button
                    onClick={closeSidebar}
                    className={`transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'}`}
                    aria-label="Close sidebar"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <SideBar isMobile={true} />
              </div>
            </div>
          </>
        )}
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Mobile/Tablet Navigation Header */}
          <div className={`lg:hidden px-4 py-3 flex items-center justify-between border-b ${isDark ? 'bg-primarycolor-900 border-gray-700' : 'bg-white border-gray-200'}`}>
            <button
              onClick={toggleSidebar}
              className={`rounded-md p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
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
            {/* Mobile action buttons (optional) */}
            <div className="w-6 h-6"></div>
          </div>
          {/* Header Component - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Header />
          </div>
          {/* Main Content - Scrollable */}
          <main className={`flex-1 overflow-y-auto ${isDark ? 'bg-primarycolor-900' : 'bg-gray-100'}`}>
            {/* Header Component - Mobile */}
            <div className="block lg:hidden">
              <Header />
            </div>
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
              {/* Product Component */}
              <div className="w-full">
                <Product />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
