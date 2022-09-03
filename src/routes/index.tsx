import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home';
import PublicPost from '../pages/PublicPost';
import PersonalPosts from '../pages/PersonalPosts';
import RegisterPost from '../pages/RegisterPost';

const Routers: React.FC = () => (
  <div className="show-container">
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/my-posts" element={<PersonalPosts />} />
        <Route path="/new-post" element={<RegisterPost />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/post/:id" element={<PublicPost />} />
    </Routes>
  </div>
);

export default Routers;
