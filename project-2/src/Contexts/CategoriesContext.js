import { createContext, useEffect, useState } from "react";

// import { addCollactionAndDocs } from "../Utils/Firebase/Firebase.js";

// import SHOP_DATA from "../shopData.js";

import { getCategoriesAndDocuments } from "../Utils/Firebase/Firebase.js";

export const CategoriesContext = createContext(
    {
        categories: []
    }
)

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     addCollactionAndDocs('categories', SHOP_DATA)
    // },[])

    useEffect(() => {
        const catgoryMap = async () => {
            const cateMap =await getCategoriesAndDocuments()
            setCategories(cateMap)
        }

        catgoryMap();
    },[])
    
    const value = categories
    console.log(categories, "cat");
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}