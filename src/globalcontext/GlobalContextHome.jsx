import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext();
export const Authcontext = createContext();

const GlobalContextHome = ({children}) => {

  const [loginStatus,setLoginStatus] = useState(false);
  const [current_user,setCurrent_user] = useState(null);

  const token = JSON.parse(localStorage.getItem("authtoken"))
  // console.log(token)

  useEffect(()=>{
    if(!token){
      setLoginStatus(false)
    }else{
      setLoginStatus(true); 
    }
    
  },[])

  return (
    <Authcontext.Provider value={{loginStatus,setLoginStatus,current_user,setCurrent_user}}>
      {children}
    </Authcontext.Provider>
  )
}
 
export default GlobalContextHome