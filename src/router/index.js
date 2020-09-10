import CMDiscovery from '@/pages/discovery';
import CMFriends from '@/pages/friends';
import CMProfile from '@/pages/profile';

const routes = [
  {
    path: "/",
    exact: true,
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