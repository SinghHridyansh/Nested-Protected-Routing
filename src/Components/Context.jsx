import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProvider({ children }) {
  const [isloggedin, setisloggedin] = useState(false);
  return (
    <AuthContext.Provider value={{ isloggedin, setisloggedin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default CustomProvider;
