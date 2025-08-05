import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { useCategory } from '../hooks/useCategory';
import Barner from '../components/Barner';

const CategoryPage = () => {
  const { isDark } = useTheme();
  const { categoryList } = useCategory();
  return (
    <>
      <div className={`flex flex-col min-h-screen w-full overflow-hidden ${isDark ? 'bg-primarycolor-900' : 'bg-gray-100'}`}>
        <Barner />
        <div className="p-4 mt-5">
          <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Categories</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryList.map((cat, idx) => (
              <div
                key={idx}
                className={`rounded-lg shadow p-6 flex items-center justify-center text-lg font-semibold ${isDark ? 'bg-primarycolor-800 text-white border border-gray-700' : 'bg-white text-gray-900 border border-gray-200'}`}
              >
                {cat.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
