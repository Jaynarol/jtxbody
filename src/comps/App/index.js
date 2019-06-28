import React from 'react'
import { Layout } from 'antd'
import { Logo, MainContent, MainLayout } from './styled'
import DateInput from '../DateInput'

function App() {

  return (
    <MainLayout>
      <Layout>
        <MainContent>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Should be a Dashboard</div>
        </MainContent>
      </Layout>
      <Layout.Sider width={320} >
        <Logo />
        <DateInput />
      </Layout.Sider>
    </MainLayout>
  )
}

export default App
