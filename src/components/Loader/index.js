import React from 'react'
import { Spin } from 'antd'
import { Screen } from './style'

const Loader = () => (
  <Screen>
    <Spin size='large' />
  </Screen>
)

export default Loader
