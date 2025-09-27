
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <div className="w-full md:w-2/5 h-48 md:h-auto">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between w-full md:w-3/5">
        <div>
          <h3 className="font-semibold text-md text-gray-800 mb-2 truncate">{product.title}</h3>
          <p className="text-sm text-gray-500 mb-3">{product.price}</p>
        </div>
        <div className="mt-auto">
            <div className="flex items-center text-xs text-gray-400">
                <LocationIcon className="w-4 h-4 ml-1" />
                <span>{product.location}</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">{product.time}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
