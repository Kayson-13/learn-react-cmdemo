import styled from "styled-components";

export const HeaderWrapper = styled.div`
  font-size: 14px;
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;

    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;

  .logo {
    display: block;
    width: 176px;
    height: 0px;
    padding-top: 69px;
    overflow: hidden;
    /* background: url('@/assets/img/sprite_01.png') no-repeat left top; */
    background-position: 0 0;
  }

  .select-list {
    display: flex;
    line-height: 70px;
    /* flex-direction: row;
    align-items: center; */

    .select-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color:  #ccc;
      }
      
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }

  /* .select-item {
    font-size: 14px;
    color: #ccc !important;
    width: 94px;
    line-height: 70px;
    text-align: center;
  } */

  /* .select-item:hover {
    background-color: #000;
    color: #fff;
  } */
`

export const HeaderRight = styled.div`

`
