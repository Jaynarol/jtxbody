import React from 'react'
import { Layout } from 'antd'
import { Logo, MainContent, MainLayout } from './styled'
import PanelDate from '../PanelDate'

const App = () => {

  return (
    <MainLayout>
      <Layout>
        <MainContent>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Should be a Dashboard</div>
        </MainContent>
      </Layout>
      <Layout.Sider width={320} >
        <Logo />
        <PanelDate />
      </Layout.Sider>
    </MainLayout>
  )
}

export default App
