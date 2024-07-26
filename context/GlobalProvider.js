import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)
 
const GlobalProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  )
  
}
