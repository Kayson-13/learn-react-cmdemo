import React, { memo } from 'react'

import { FooterWrapper, FooterLeft, FooterRight } from './style'

export default memo(function CMAppFooter() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <FooterLeft>footerLeft</FooterLeft>
        <FooterRight>footerRight</FooterRight>
      </div>
    </FooterWrapper>
  )
})
