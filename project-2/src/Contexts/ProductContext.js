import { createContext, useState } from "react";

import Products from "../shopData.json";

export const ProductContext = createContext(
    {
        productsList: []
    }
)

export const ProductProvider = ({children}) => {
    const [productsList, setProductsList] = useState(Products)
    const value = productsList
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}