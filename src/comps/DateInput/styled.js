import styled from 'styled-components'
import { Col, Divider, Row } from 'antd'

export const CalendarBorder = styled.div`
  width: 288px;
  margin: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #EEE;
`

export const DividerTop = styled(Divider)`
  margin: 3px 0 10px;
`

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