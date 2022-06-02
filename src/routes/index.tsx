import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';

const Routers: React.FC = () => (
  <Routes>
    <Route path="/" element={<PrivateRoute />}>
      /* Private routes
      <Route path="/" element={null} />
      */
    </Route>
    //Public routes
    <Route path="/home" element={<Home />} />
  </Routes>
);

export default Routers;
