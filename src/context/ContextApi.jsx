import { createContext, useContext, useState } from "react";
import subLinks from "../data/data";
import { useEffect } from "react";

 const GlobalContext=createContext(null)

export const GlobalProvider = ({children})=>{
    const[location,setLocation]=useState({})
    const[onePage,setOnePage]=useState("")
    const[oneObject,setOneObject]=useState({})
    const[subMenu,setSubMenu]=useState(false)




    

    return <GlobalContext.Provider value={{subMenu,location,setLocation,setOnePage,oneObject,setOneObject,setSubMenu}}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobalState = ()=>{
    return useContext(GlobalContext)
}