import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';

const Routers: React.FC = () => (
  <div className="show-container">
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        /* Private routes
        <Route path="/" element={null} />
        */
      </Route>
      //Public routes
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
);

export default Routers;
