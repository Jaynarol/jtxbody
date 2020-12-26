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
  const { selectedDate, data } = props
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
            isShowPicture
              ? (
                <>
                  <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/132428253_4949701428405862_4797352813996937605_n.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeFiCocOtW0BeWZbYZyur4V3GuFpPuzYbRsa4Wk-7NhtG60Go2_5kP4U566h8_W6Cvz8v328T4SqJ5N3rvxwubfV&_nc_ohc=ovSeWsH-d44AX9VjT7Q&_nc_ht=scontent.fbkk13-2.fna&oh=16549ea6d2d8110f763f9b8b559f7dee&oe=600B0227" alt="my goal" />
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
  selectedDate: PropTypes.objectOf(PropTypes.any).isRequired
}

Layout.defaultProps = {
  data: []
}

export default Layout
