/* eslint-disable max-len */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Layout as AntLayout, Alert } from 'antd'
import { omit } from 'lodash'
import { Logo, ContentStyled, LayoutStyled, Panel, DividerStyled, SiderStyled } from './styled'
import PanelDate from '../PanelDate'
import PanelWeight from '../PanelWeight'
import Dashboard from '../Dashboard'
import Graph from '../Graph'
import { Encouragement, Footer } from './child'
import { project } from '../../config'

const Layout = props => {
  const { selectedDate, data, photo } = props
  const [isShowPicture, setShowPicture] = useState(false)
  const propsWithoutData = omit(props, ['data'])
  const cleanData = data.filter(({ weight = 0 }) => weight > 0)

  return (
    <LayoutStyled>
      <AntLayout>
        <ContentStyled>
          <Encouragement {...props} />
          <Dashboard data={cleanData} {...propsWithoutData} />
          <Graph data={cleanData} {...propsWithoutData} />
        </ContentStyled>
        <Footer />
      </AntLayout>
      <SiderStyled>
        <Logo onClick={() => setShowPicture(!isShowPicture)} style={{ cursor: 'pointer' }}>{project.projectName}</Logo>
        <Panel>
          {
            isShowPicture && photo
              ? (
                <>
                  <img src={photo} alt="my goal" />
                  <Alert style={{ textAlign: 'center' }} message="My Goal!" />
                </>
              ) : (
                <>
                  <PanelDate {...props} />
                  <DividerStyled>{selectedDate.format('DD MMMM YYYY')}</DividerStyled>
                  <PanelWeight {...props} />
                </>
              )
          }

        </Panel>
      </SiderStyled>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  selectedDate: PropTypes.objectOf(PropTypes.any).isRequired,
  photo: PropTypes.string
}

Layout.defaultProps = {
  data: [],
  photo: null
}

export default Layout
