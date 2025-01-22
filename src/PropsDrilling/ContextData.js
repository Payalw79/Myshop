import { createContext, useState } from "react";


export const ContextData=createContext();

//Create component
export function ContextDataProvider(props){

    let [name,setname]=useState('JavaScript')
    return(
        <ContextData.Provider value={{name,setname}}>
       {props.children}
        </ContextData.Provider>
    )
}

