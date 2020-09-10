import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';

import routes from './router';

import CMAppHeader from '@/components/app-header';
import CMAppFooter from '@/components/app-footer';
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <HashRouter>
      <CMAppHeader/>
      {renderRoutes(routes)}
      <CMAppFooter/>
    </HashRouter>
  )
})
