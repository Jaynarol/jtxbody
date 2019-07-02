import React from 'react'
import PropTypes from 'prop-types'
import { Layout as AntLayout } from 'antd'
import { omit } from 'lodash'
import { Logo, ContentStyled, LayoutStyled, Panel, DividerStyled, SiderStyled } from './styled'
import PanelDate from '../PanelDate'
import PanelWeight from '../PanelWeight'
import Dashboard from '../Dashboard'
import Graph from '../Graph'
import { Footer } from './child'
import { project } from '../../config'

const Layout = props => {
  const { selectedDate, data } = props
  const propsWithoutData = omit(props, ['data'])
  const cleanData = data.filter(({ weight = 0 }) => weight > 0)

  return (
    <LayoutStyled>
      <AntLayout>
        <ContentStyled>
          <Dashboard data={cleanData} {...propsWithoutData} />
          <Graph data={cleanData} {...propsWithoutData} />
        </ContentStyled>
        <Footer />
      </AntLayout>
      <SiderStyled>
        <Logo>{project.projectName}</Logo>
        <Panel>
          <PanelDate {...props} />
          <DividerStyled>{selectedDate.format('DD MMMM YYYY')}</DividerStyled>
          <PanelWeight {...props} />
        </Panel>
      </SiderStyled>
    </LayoutStyled>
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
