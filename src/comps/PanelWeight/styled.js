import styled from 'styled-components'
import { Col, Row } from 'antd'

export const RowPanel = styled(Row).attrs(() => ({
  type: 'flex',
  justify: 'space-around'
}))`
  align-items: center;
  height: 36px;
`

export const ColLabel = styled(Col).attrs(() => ({
  span: 8
}))`
  text-align: right;
  padding-right: 10px!important;
`

export const ColSlider = styled(Col).attrs(() => ({
  span: 8
}))`
  padding-right: 10px!important;
`

export const RowSave = styled(Row)`
  margin: 20px;
`