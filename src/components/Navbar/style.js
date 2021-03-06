import styled from 'styled-components'

export const NavBarStyle = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
`

export const MenuIconStyle = styled.div`
  width: calc(100%);
  float: left;
  .ant-menu-item {
    padding: 0px 5px;
  }
  .ant-menu-submenu-title {
    padding: 10px 20px;
  }
  .ant-menu-item a,
  .ant-menu-submenu-title a {
    padding: 10px 15px;
  }
  .ant-menu-horizontal {
    border-bottom: none;
  }
  .leftMenu {
    float: left;
  }
`

export const BarsMenuStyle = styled.div`
  float: right;
  height: 32px;
  padding: 6px;
  margin-top: 8px;
  display: none;
  background: none;
  > span {
    display: block;
  }
`

export const BarsBtnStyle = styled.span`
  display: block;
  width: 20px;
  height: 2px;
  background: #1890ff;
  position: relative;
  :after,
  :before {
    content: attr(x);
    width: 20px;
    position: absolute;
    top: -6px;
    left: 0;
    height: 2px;
    background: #1890ff;
  }
  :after {
    top: auto;
    bottom: -6px;
  }
`

export const NavStyle = styled.div`
  .barsMenu {
    float: right;
    height: 32px;
    padding: 6px;
    margin-top: 8px;
    display: none;
    background: none;
  }

  .ant-drawer-body {
    padding: 0;
  }

  .barsMenu > span {
    display: block;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
  .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu {
    display: inline-block;
    width: 100%;
  }

  .ant-drawer-body .ant-menu-horizontal {
    border-bottom: none;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom-color: transparent;
  }

  @media (max-width: 767px) {
    .barsMenu {
      display: inline-block;
    }

    .leftMenu {
      display: none;
    }

    .menuCon .ant-menu-item,
    .menuCon .ant-menu-submenu-title {
      padding: 1px 20px;
    }
  }
`
