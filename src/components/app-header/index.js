import React, { memo } from 'react';

import { headLinks } from '@/common/local-data';

import { NavLink } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function CMAppHeader() {

  const showSelectItem = (item, index) => {
    if(index < 3) {//路由跳转
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {//跳转页面
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <h1>
            <a className="sprite_01 logo" href="/#">
              网易云音乐
            </a>
          </h1>
          <div className="select-list">
            {
              headLinks.map((item, index) => {
                return (
                  <div className="select-item" key={index}>
                    {console.log(item)}
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }            
          </div>
        </HeaderLeft>        
        <HeaderRight>right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
