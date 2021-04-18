import React from 'react'
import { Layout } from 'antd'
import AppFooter from '../Footer'
import Navbar from '../Navbar'
import { ContentDiv } from './style'

const { Content } = Layout

const PageLayout = ({ children }) => (
  <Layout className='layout'>
    <Navbar />
    <Content>
      <ContentDiv>{children}</ContentDiv>
    </Content>
    <AppFooter />
  </Layout>
)

export default PageLayout
