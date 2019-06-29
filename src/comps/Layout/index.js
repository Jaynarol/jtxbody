import React from 'react'
import { Layout as AntLayout } from 'antd'
import { Logo, MainContent, MainLayout, Panel, DividerTop } from './styled'
import PanelDate from '../PanelDate'
import PanelWeight from '../PanelWeight'

const Layout = props => {

  return (
    <MainLayout>
      <AntLayout>
        <MainContent>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Should be a Dashboard</div>
        </MainContent>
      </AntLayout>
      <AntLayout.Sider width={320} >
        <Logo />
        <Panel>
          <PanelDate />
          <DividerTop />
          <PanelWeight {...props} />
        </Panel>
      </AntLayout.Sider>
    </MainLayout>
  )
}

export default Layout
