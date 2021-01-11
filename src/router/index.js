import CMDiscovery from '@/pages/discovery';
import CMProfile from '@/pages/profile';
import CMFriends from '@/pages/friends';

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
]

export default routes;
