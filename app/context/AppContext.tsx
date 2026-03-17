'use client'
import React, { createContext, useContext } from 'react'
export interface AppContextType {
    m: number;
}

const AppContext = createContext<AppContextType | null>(null);
 export const AppconHook = ()=>{
    return useContext(AppContext);
}
    
export default AppContext
