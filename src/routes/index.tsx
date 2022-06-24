import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import PersonalPosts from '../pages/PersonalPosts';
import PublicPost from '../pages/PublicPost';

const Routers: React.FC = () => (
  <div className="show-container">
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        // Private routes
        <Route path="/my-posts" element={<PersonalPosts />} />
      </Route>
      //Public routes
      <Route path="/home" element={<Home />} />
      <Route path="/post/:id" element={<PublicPost />} />
    </Routes>
  </div>
);

export default Routers;
