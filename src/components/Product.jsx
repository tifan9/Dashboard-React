import React from 'react';
import ProductCard from './cards/ProductCard';

const products = [
  { name: "MacBook Pro 16\"", category: "Laptops", date: "Dec 10, 2024", status: "In Stock" },
  { name: "Dell XPS 13", category: "Laptops", date: "Dec 9, 2024", status: "In Stock" },
  { name: "iPhone 15 Pro", category: "Mobile", date: "Dec 8, 2024", status: "Low Stock" },
  { name: "iPad Air", category: "Tablets", date: "Dec 7, 2024", status: "In Stock" },
  { name: "Surface Pro 9", category: "Tablets", date: "Dec 6, 2024", status: "Out of Stock" }
  
];
const Product = () => {
  return (
    <>
      <div className="p-4 mt-5 bg-white shadow rounded-lg">
        <h4 className="text-lg font-bold mb-4">Recent Added Products</h4>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            category={product.category}
            date={product.date}
            status={product.status}
          />
        ))}
      </div>
      </div>
    </>
  );
}

export default Product;
