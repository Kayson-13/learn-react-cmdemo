import React, { memo, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';

import { DiscoveryWrapper, TopMenu } from './style';
import request from '@/services/request'

import { dicoveryMenu } from '@/common/local-data';
import { NavLink } from 'react-router-dom';

export default memo(function CMDiscovery(props) {

  useEffect(() => {
    request({
      url: "/banner"
    }).then( res => {
      console.log(res);
    })
  }, [])

  const { route } = props;

  return (
    <DiscoveryWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoveryMenu.map(item => {
              return (
                <div key={item.title} className="item">
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )  
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoveryWrapper>
  )
})
