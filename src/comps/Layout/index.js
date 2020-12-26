import React from 'react'
import PropTypes from 'prop-types'
import { Layout as AntLayout, Alert } from 'antd'
import { omit } from 'lodash'
import { Logo, ContentStyled, LayoutStyled, Panel, DividerStyled, SiderStyled } from './styled'
import PanelDate from '../PanelDate'
import PanelWeight from '../PanelWeight'
import Dashboard from '../Dashboard'
import Graph from '../Graph'
import { Footer } from './child'
import { project } from '../../config'
import { IconGreen } from '../Dashboard/styled'

const Layout = props => {
  const { selectedDate, data, encouragement } = props
  const propsWithoutData = omit(props, ['data'])
  const cleanData = data.filter(({ weight = 0 }) => weight > 0)

  return (
    <LayoutStyled>
      <AntLayout>
        <ContentStyled>
          <Alert
            message={encouragement || 'Loading...'}
            showIcon type="info" icon={<IconGreen type='heart' />}
            style={{ textAlign: 'center', marginBottom: 10 }}
          />
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
  selectedDate: PropTypes.objectOf(PropTypes.any).isRequired,
  encouragement: PropTypes.string.isRequired
}

Layout.defaultProps = {
  data: []
}

export default Layout
