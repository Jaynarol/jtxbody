/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { isFinite, round, last, range } from 'lodash'
import { Area, Bar, Brush, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { convertDate } from '../../libs'
import { AxisTickRotate, MeasureDot } from './child'

const domain = type => n => (
  isFinite(n) ? round(n, -1) + (type === 'min' ? -10 : 10) : 0
)

const tooltipsFormatter = (value, label) => {
  const unit = { weight: ' kg', exercise: ' mins' }
  return `${value} ${unit[label]}`
}

const addFormat = (dmoment, far) => (
  dmoment.clone().add(far, 'day').format('YYYY-MM-DD')
)

const Graph = ({ data, selectDate }) => {

  const onChartClick = event => {
    if(event && event.activeLabel){
      selectDate(convertDate(event.activeLabel))
    }
  }

  const [firstData = {}, ...restData] = data
  const dataWithDateStream = restData.reduce((result, current) => {
    const { dmoment: lastdate } = last(result)
    const diffDate = current.dmoment.diff(lastdate, 'days')
    const insertNullDate = diffDate === 1
      ? []
      : range(1, diffDate).map(far => ({ date: addFormat(lastdate, far), weight: null, exercise: null, measure: null }))
    return [...result, ...insertNullDate, current]
  }, [firstData])

  return (
    <Card style={{ marginTop: 16 }}>
      <ResponsiveContainer width="95%" height={400}>
        <ComposedChart data={dataWithDateStream} onClick={onChartClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="lightgreen" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="lightgreen" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Legend verticalAlign="top" height={36} />
          <Tooltip formatter={tooltipsFormatter}/>
          <XAxis dataKey="date" height={60} tick={<AxisTickRotate/>} />
          <YAxis yAxisId="left" domain={[domain('min'), domain('max')]} label={{ value: 'Weight  (kg)', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" domain={[0, 120]} label={{ value: 'Exercise (mins)', angle: 90, position: 'insideRight' }} />
          <Area dataKey="weight" yAxisId="left" type="monotone" stroke="#ff7300" fill="url(#colorWeight)" dot={<MeasureDot />} connectNulls={true} isAnimationActive={false} />
          <Bar dataKey="exercise" yAxisId="right" barSize={10} fill="#1890ff"  />
          <Brush dataKey="date" />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  )
}


Graph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectDate: PropTypes.func.isRequired
}

export default Graph