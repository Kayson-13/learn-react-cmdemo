import React from 'react';

import CMDiscovery from '@/pages/discovery';
import CMFriends from '@/pages/friends';
import CMProfile from '@/pages/profile';
import { Redirect } from 'react-router-dom';

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discovery"/>
    )
  },{
    path: "/discovery",
    component: CMDiscovery
  },
  {
    path: '/profile',
    component: CMProfile
  },
  {
    path: '/friends',
    component: CMFriends
  }
];

export default routes;