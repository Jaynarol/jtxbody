import React from 'react'
import { Calendar } from 'antd'
import { CalendarBorder, DividerTop } from './styled'
import PanelWeight from '../PanelWeight'


const PanelDate = () => {

  return (
    <CalendarBorder>
      <Calendar fullscreen={false} />
      <DividerTop />
      <PanelWeight />
    </CalendarBorder>
  )
}

export default PanelDate