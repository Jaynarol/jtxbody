import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Card, Col, Row } from 'antd'
import { get, last, first, round, floor } from 'lodash'
import { project } from '../../config'
import { IconGreen, StatisticBlue } from './styled'

const Dashboard = ({ spinning, data }) => {

  const firstWeight = get(first(data), 'weight', 0)
  const currentWeight = get(last(data), 'weight', 0)
  const lossWeight = round(currentWeight - firstWeight, 2)
  const tagetLossWeight = firstWeight - project.goalWeight
  const goal = (Math.abs(lossWeight) / tagetLossWeight * 100) * (lossWeight > 0 ? -1 : 1)
  // const ts7dAgo = moment().endOf('day').subtract(7, 'days').unix()
  // const last7dExercise = sumBy(data, ({ timestamp: ts, exercise: ex }) => ts > ts7dAgo ? ex : 0 )
  const lossWeightIcon = `caret-${lossWeight <= 0 ? 'down' : 'up'}`
  const daysPass = floor((moment().unix() - get(first(data), 'timestamp', 0)) / 86400)

  return (
    <Row gutter={16}>

      <Col xs={12} md={6} >
        <Card loading={spinning} >
          <StatisticBlue
            title="Current Weight"
            value={currentWeight}
            precision={2}
            prefix={<IconGreen type="more" />}
            suffix="kg"
          />
        </Card>
      </Col>

      <Col xs={12} md={6} >
        <Card loading={spinning} >
          <StatisticBlue
            title="Weight Changed"
            value={lossWeight}
            precision={2}
            prefix={<IconGreen type={lossWeightIcon} />}
            suffix="kg"
          />
        </Card>
      </Col>

      <Col xs={12} md={6} >
        <Card loading={spinning} >
          <StatisticBlue
            title="Reach the Goal"
            value={goal}
            precision={2}
            prefix={<IconGreen type="ant-design" />}
            suffix="%"
          />
        </Card>
      </Col>

      <Col xs={12} md={6} >
        <Card loading={spinning} >
          <StatisticBlue
            title="Time Passes"
            value={` ${daysPass}`}
            prefix={<IconGreen type="clock-circle" />}
            suffix=" days"
          />
        </Card>
      </Col>

    </Row>
  )
}

Dashboard.propTypes = {
  spinning: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default Dashboard