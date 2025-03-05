import React, { createContext, useContext } from "react";
import { useSelector } from "react-redux";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Get the auth state from Redux
  const auth = useSelector((state) => state.auth);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
