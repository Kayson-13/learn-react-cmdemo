import React, { Fragment, memo } from 'react'

import { footerLinks, footerImages } from '@/common/local-data'

import { FooterWrapper, FooterLeft, FooterRight } from './style'

export default memo(function CMAppFooter() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <FooterLeft>
          <div className="link">
            {
              footerLinks.map(item => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <p className="copyright">
            <span>网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" target="_blank" rel="noopener noreferrer">浙网文[2018]3506-263号</a>
          </p>
          <p className="report">
            <span className="phone">违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <p className="info">
            <span>粤B2-20090191-18</span>
            <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer">工业和信息化部备案管理系统网站</a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target="_blank" rel="noopener noreferrer">
              <span className="police-logo"></span>
              <span className="police-text">浙公网安备 33010902002564号</span>
            </a>
          </p>
        </FooterLeft>
        <FooterRight>
            {
              footerImages.map(item => {
                return (
                  <li className="item" key={item.link}>
                    <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"></a>
                    <span className="title">{item.title}</span>
                  </li>
                )
              })
            }
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
