
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Replace this with your actual authentication logic
const isAuthenticated = localStorage.getItem('authToken'); 

const PrivateRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/" replace />}
    />
  );
};

export default PrivateRoute;
