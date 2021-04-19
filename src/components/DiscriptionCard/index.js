import React from 'react'
import { Card } from 'antd'
import { cardStyle } from './style'

const DiscriptionCard = ({ children, title }) => (
  <Card title={title} style={cardStyle}>
    {children}
  </Card>
)

export default DiscriptionCard
