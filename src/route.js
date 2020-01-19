import React from 'react';
import loadable from '@loadable/component';

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
