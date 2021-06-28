
import React from 'react';

const Home = React.lazy(() => import('../containers/Posts/Posts'));
const Post = React.lazy(() => import('../containers/Post/Post'));

// every object will be a route and there are no nested objects, just nested paths
const Routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: Home,
  },
  {
    path: '/posts/:id',
    key: 'POST',
    exact: true,
    component: Post,
  },
];

export default Routes;