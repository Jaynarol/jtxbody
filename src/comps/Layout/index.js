import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Layout as AntLayout, Row } from 'antd'
import { Logo, MainContent, MainLayout, Panel, DividerTop, MainSider } from './styled'
import PanelDate from '../PanelDate'
import PanelWeight from '../PanelWeight'
import { gconf } from '../../gapi'

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
        <Logo>
          <Row type="flex" justify="space-between" >
            <Col span={16}>{gconf.projectName}</Col>
            <Col span={8}>
              <Button type="link" icon="file" href={`https://docs.google.com/spreadsheets/d/${gconf.sheetID}`} target="_blank" />
              <Button type="link" icon="facebook" href={gconf.facebookLink} target="_blank" />
              <Button type="link" icon="github" href={gconf.githubRepo} target="_blank" />
            </Col>
          </Row>
        </Logo>
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
