/* eslint-disable react/prop-types */
import moment from 'moment'
import React from 'react'

export const AxisTickRotate = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
      {moment(payload.value, "YYYY-MM-DD").format('DD MMM')}
    </text>
  </g>
)

export const MeasureDot = ({ cx, cy, payload: { measure } }) => (
  measure === null
    ? null
    : <circle
      cx={cx} cy={cy}
      strokeWidth={measure ? 1 : 1}
      r={measure ? 4 : 2}
      stroke={measure ? '#23540B' : 'cadetblue'}
      fill={measure ? '#52c41a' : 'cadetblue'}
    />
)