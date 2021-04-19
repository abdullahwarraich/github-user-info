import React from 'react'
import { Card } from 'antd'
import { CardDiv } from './style'

const LoginCard = ({ children, title }) => (
  <CardDiv>
    <Card title={title}>{children}</Card>
  </CardDiv>
)

export default LoginCard
