import React, { memo } from 'react';

import { headLinks } from '@/common/local-data';

import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd';
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
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <button className="center">创作者中心</button>
          <a href="/#">登录</a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
