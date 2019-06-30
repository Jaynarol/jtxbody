import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Calendar, Row } from 'antd'
import { findSameDate } from '../../libs'

const dateCellRender = data => dateRender => {
  const date = findSameDate(data, dateRender)
  if(date){
    return <Row type="flex" gutter={0} justify="center">
      {
        date.exercise > 0
          ? <Badge status="processing" />
          : date.weight > 0 && <Badge color="cadetblue" />
      }
      {
        date.measure && <Badge status="success" />
      }
    </Row>
  }

  return null
}

const PanelDate = ({ selectDate, selectedDate, data }) => {

  return (
    <Calendar
      fullscreen={false}
      value={selectedDate}
      onSelect={selectDate}
      dateCellRender={dateCellRender(data)}
    />
  )
}

PanelDate.propTypes = {
  selectDate: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedDate: PropTypes.objectOf(PropTypes.any).isRequired
}

export default PanelDate