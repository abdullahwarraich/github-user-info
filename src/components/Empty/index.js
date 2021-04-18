import React from 'react'
import { EmptyScreen } from './style'

const Empty = ({ text }) => (
  <EmptyScreen>
    <div>{text}</div>
  </EmptyScreen>
)

export default Empty
