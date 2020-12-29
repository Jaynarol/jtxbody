/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'
import { isFinite, round, last, range, get } from 'lodash'
import { Area, Bar, Brush, Cell, ComposedChart, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { convertDate } from '../../libs'
import { AxisTickRotate, MeasureDot } from './child'

const colors = {
  '0.9': '#ff1414',
  '0.8': '#ff2727',
  '0.7': '#ff3b3b',
  '0.6': '#ff4e4e',
  '0.5': '#ff6262',
  '0.4': '#ff7676',
  '0.3': '#ff8989',
  '0.2': '#ff9d9d',
  '0.1': '#ffb1b1',
  '-0.1': '#b9e3f3',
  '-0.2': '#a9dcf1',
  '-0.3': '#98d5ee',
  '-0.4': '#87ceeb',
  '-0.5': '#76c7e8',
  '-0.6': '#65c0e5',
  '-0.7': '#55b9e3',
  '-0.8': '#44b3e0',
  '-0.9': '#33acdd'
}

const domain = type => n => (
  isFinite(n) ? round(n, -1) + (type === 'min' ? -10 : 10) : 0
)

const tooltipsFormatter = (value, label) => {
  const unit = { weight: ' kg', change: ' kg' }
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
          <defs>
            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="lightgreen" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="lightgreen" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Legend verticalAlign="top" height={36} />
          <Tooltip formatter={tooltipsFormatter}/>
          <XAxis dataKey="date" height={60} tick={<AxisTickRotate/>}  />
          <YAxis yAxisId="left" domain={[domain('min'), domain('max')]} label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" domain={[-5, 1]} label={{ value: 'Change (kg)', angle: 90, position: 'insideRight' }} />
          <Area dataKey="weight" yAxisId="left" type="monotone" stroke="#ff7300" fill="url(#colorWeight)" dot={<MeasureDot />} connectNulls={true} isAnimationActive={false} />
          <Bar dataKey="change" yAxisId="right" barSize={5}>
            {data.map(entry => (
              <Cell key={entry.rowId} fill={get(colors, `${entry.change}`, colors[entry.change > 0 ? '0.9' : '-0.9'] )}/>
            ))}
          </Bar>
          <Brush dataKey="date" />
          <ReferenceLine yAxisId="right" y={0} />
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