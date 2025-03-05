import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

//   if (!allowedRoles || allowedRoles.length === 0) {
//     return element;
//   }

//   if (!allowedRoles.includes(user?.role)) {
//     return <Navigate to="/login" replace />;
//   }

  return element;
};

export default PrivateRoute;
