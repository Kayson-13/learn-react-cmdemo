import React from 'react';

import CMDiscovery from '@/pages/discovery';
import CMAlbum from '@/pages/discovery/c-pages/album';
import CMArtist from '@/pages/discovery/c-pages/artist';
import CMDjradio from '@/pages/discovery/c-pages/djradio';
import CMRanking from '@/pages/discovery/c-pages/ranking';
import CMRecommend from '@/pages/discovery/c-pages/recommend';
import CMSongs from '@/pages/discovery/c-pages/songs';

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
    component: CMDiscovery,
    routes: [
      {
        path: '/discovery',
        exact: true,
        render: () => (
          <Redirect to="/discovery/recommend" />
        )
      },
      {
        path: '/discovery/recommend',
        component: CMRecommend
      },
      {
        path: '/discovery/album',
        component: CMAlbum
      },
      {
        path: '/discovery/artist',
        component: CMArtist
      },
      {
        path: '/discovery/djradio',
        component: CMDjradio
      },
      {
        path: '/discovery/ranking',
        component: CMRanking
      },
      {
        path: '/discovery/songs',
        component: CMSongs
      }
    ]
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