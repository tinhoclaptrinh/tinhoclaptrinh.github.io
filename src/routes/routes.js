import React from 'react';
import Index from '../pages/HomePage';

const routes = [
  {
    path: '/',
    exact: true,
    main:() => <Index />
  }
];

export default routes;
