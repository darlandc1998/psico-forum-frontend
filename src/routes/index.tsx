import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import PersonalPosts from '../pages/PersonalPosts';

const Routers: React.FC = () => (
  <div className="show-container">
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        // Private routes
        <Route path="/my-posts" element={<PersonalPosts />} />
      </Route>
      //Public routes
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
);

export default Routers;
