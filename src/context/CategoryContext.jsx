import { createContext, useState } from 'react'

export const CategoryContext = createContext()
export const CategoryProvider = ({ children }) => {
    const category = [
        { name: "Laptop" },
        { name: "Mobile" },
        { name: "Tablets" },
    ]
    const [categoryList, setCategoryList] = useState(category)
    return (
        <CategoryContext.Provider value={{ categoryList, setCategoryList }}>
            {children}
        </CategoryContext.Provider>
    )
}