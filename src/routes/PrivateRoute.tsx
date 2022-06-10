import React from 'react';
import { useAuth } from '../hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  const { pathname } = useLocation();
  const { user } = useAuth(); // determine if authorized, from context or however you're doing it
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user && pathname.length > 1 ? <Outlet /> : <Navigate to="/home" />;
};

export default PrivateRoute;
