import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // Check if user is logged in

  if (!user) {
    // Redirect to Login if user is not authenticated
    return <Navigate to="/login" />;
  }

  return children; // Render the Dashboard if user is authenticated
};

export default ProtectedRoute;