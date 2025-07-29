import { useContext } from "react";
import {ProductThemeContext} from "../context/ProductThemeContext";

export const useProductTheme = () => {
    const context = useContext(ProductThemeContext);
    if (!context) {
        throw new Error('useProductTheme must be used within a ProductProvider');
    }
    return context;
}