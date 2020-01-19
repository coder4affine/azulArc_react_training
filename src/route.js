import React from 'react';
import loadable from '@loadable/component';

const AsyncLogin = loadable(() => import('./pages/Login'), {
  fallback: <div>Loading...</div>,
});
const AsyncHome = loadable(() => import('./pages/Home'), {
  fallback: <div>Loading...</div>,
});
const AsyncAbout = loadable(() => import('./pages/About'), {
  fallback: <div>Loading...</div>,
});
const AsyncSettings = loadable(() => import('./pages/Settings'), {
  fallback: <div>Loading...</div>,
});

const routes = [
  {
    path: '/',
    exact: true,
    component: AsyncLogin,
  },
  {
    path: '/home',
    component: AsyncHome,
  },
  {
    path: '/about',
    component: AsyncAbout,
  },
  {
    path: '/settings',
    component: AsyncSettings,
  },
];

export default routes;
