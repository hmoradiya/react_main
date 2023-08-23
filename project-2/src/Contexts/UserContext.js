import { createContext, useEffect, useState } from "react";

import { onAuthStateChangedListner, createUserDocs } from "../Utils/Firebase/Firebase";

export const UserContext = createContext(
    {
        currentUser:null,
        setCurrentUser: () => null,
    }
)


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    const createUserDocsStore= async (user) => {
        await createUserDocs(user)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListner((user) => {
            setCurrentUser(user)
        })
        return unSubscribe;
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}