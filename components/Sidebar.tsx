
import React from 'react';
import { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-bold mb-4 border-b pb-2">دسته‌بندی‌ها</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-right px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-red-100 text-red-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
