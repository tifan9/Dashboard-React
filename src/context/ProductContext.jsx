import { createContext, useState } from 'react'
export const ProductContext = createContext()
export const ProductProvider =({ children }) => {
    const products = [
  { name: "MacBook Pro 16\"", category: "Laptops", date: "Dec 10, 2024", status: "In Stock" },
  { name: "Dell XPS 13", category: "Laptops", date: "Dec 9, 2024", status: "In Stock" },
  { name: "iPhone 15 Pro", category: "Mobile", date: "Dec 8, 2024", status: "Low Stock" },
  { name: "iPad Air", category: "Tablets", date: "Dec 7, 2024", status: "In Stock" },
  { name: "Surface Pro 9", category: "Tablets", date: "Dec 6, 2024", status: "Out of Stock" }
  
];
    const [productList, setProductList] = useState(products);
    
    return (
        <ProductContext.Provider value={{ productList, setProductList }}>
            {children}
        </ProductContext.Provider>
    )
}