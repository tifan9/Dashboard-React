import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const useProductTheme = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductTheme must be used within a ProductProvider');
    }
    return context;
}