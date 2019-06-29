import React from 'react'
import PropTypes from 'prop-types'
import { Layout as AntLayout } from 'antd'
import { Logo, MainContent, MainLayout, Panel, DividerTop, MainSider } from './styled'
import PanelDate from '../PanelDate'
import PanelWeight from '../PanelWeight'

const Layout = props => {
  const { selectedDate } = props

  return (
    <MainLayout>
      <AntLayout>
        <MainContent>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Should be a Dashboard</div>
        </MainContent>
      </AntLayout>
      <MainSider>
        <Logo />
        <Panel>
          <PanelDate {...props} />
          <DividerTop>{selectedDate.format('DD MMMM YYYY')}</DividerTop>
          <PanelWeight {...props} />
        </Panel>
      </MainSider>
    </MainLayout>
  )
}

Layout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  selectedDate: PropTypes.objectOf(PropTypes.any).isRequired
}

Layout.defaultProps = {
  data: []
}

export default Layout
