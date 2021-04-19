import React, { useState } from 'react'
import { Menu, Grid, Drawer } from 'antd'
import { useHistory } from 'react-router-dom'
import Button from '../Button'
import { NavBarStyle, MenuIconStyle, BarsBtnStyle, NavStyle } from './style'

const { useBreakpoint } = Grid

const Navbar = () => {
  const { md } = useBreakpoint()
  const history = useHistory()
  const [visible, setVisible] = useState(false)

  const pageChange = ({ key }) => {
    if (key === '1') {
      history.push('/profile')
    } else if (key === '2') {
      history.push('/gists')
    } else if (key === '3') {
      history.push('/orgs')
    } else if (key === '4') {
      history.push('/')
    }
  }

  const onClose = () => {
    setVisible(false)
  }
  const showDrawer = () => {
    setVisible(true)
  }

  const NavMenu = () => (
    <Menu
      onClick={pageChange}
      theme='light'
      mode={md ? 'horizontal' : 'inline'}
    >
      <Menu.Item key='1'>Profile</Menu.Item>
      <Menu.Item key='2'>Gists</Menu.Item>
      <Menu.Item key='3'>Orgs</Menu.Item>
      <Menu.Item key='4'>Search New User</Menu.Item>
    </Menu>
  )

  return (
    <NavStyle>
      <NavBarStyle>
        <MenuIconStyle>
          <div className='leftMenu'>{NavMenu()}</div>
          <Button className='barsMenu' type='primary' onClick={showDrawer}>
            <BarsBtnStyle />
          </Button>
          <Drawer
            title='Github'
            placement='right'
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            {NavMenu()}
          </Drawer>
        </MenuIconStyle>
      </NavBarStyle>
    </NavStyle>
  )
}

export default Navbar
