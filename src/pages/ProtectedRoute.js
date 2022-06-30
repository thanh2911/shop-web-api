import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from '../GlobalState'

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  return children;
};

export default ProtectedRoute;

