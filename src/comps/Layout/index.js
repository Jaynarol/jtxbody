import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Layout as AntLayout, Row } from 'antd'
import { omit } from 'lodash'
import { Logo, MainContent, MainLayout, Panel, DividerTop, MainSider } from './styled'
import PanelDate from '../PanelDate'
import PanelWeight from '../PanelWeight'
import Dashboard from '../Dashboard'
import { gconf, project } from '../../config'
import Graph from '../Graph'

const Layout = props => {
  const { selectedDate, data } = props
  const propsWithoutData = omit(props, ['data'])
  const cleanData = data.filter(({ weight = 0 }) => weight > 0)

  return (
    <MainLayout>
      <AntLayout>
        <MainContent>
          <Dashboard data={cleanData} {...propsWithoutData} />
          <Graph data={cleanData} {...propsWithoutData} />
        </MainContent>
      </AntLayout>
      <MainSider>
        <Logo>
          <Row type="flex" justify="space-between" >
            <Col span={16}>{project.projectName}</Col>
            <Col span={8}>
              <Button type="link" icon="file" href={`https://docs.google.com/spreadsheets/d/${gconf.sheetID}`} target="_blank" />
              <Button type="link" icon="facebook" href={project.facebookLink} target="_blank" />
              <Button type="link" icon="github" href={project.githubRepo} target="_blank" />
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
