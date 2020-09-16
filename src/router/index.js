import CMDiscovery from '@/pages/discovery';
import CMFriends from '@/pages/friends';
import CMProfile from '@/pages/profile';

const routes = [
  {
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