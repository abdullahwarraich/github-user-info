import React from 'react'
import { Avatar } from 'antd'

const AntAvatar = ({ image }) => (
  <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100
    }}
    src={image}
  />
)

export default AntAvatar
