import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Card, Col, Row } from 'antd'
import { get, last, first, sumBy } from 'lodash'
import { project } from '../../config'
import { IconGreen, StatisticBlue } from './styled'

const Dashboard = ({ spinning, data }) => {

  const firstWeight = get(first(data), 'weight', 0)
  const currentWeight = get(last(data), 'weight', 0)
  const lossWeight = currentWeight - firstWeight
  const tagetLossWeight = firstWeight - project.goalWeight
  const goal = Math.abs(lossWeight) / tagetLossWeight * 100
  const ts7dAgo = moment().endOf('day').subtract(7, 'days').unix()
  const last7dExercise = sumBy(data, ({ timestamp: ts, exercise: ex }) => ts > ts7dAgo ? ex : 0 )
  const lossWeightIcon = `caret-${lossWeight <= 0 ? 'down' : 'up'}`

  return (
    <Row gutter={16}>

      <Col span={6}>
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

      <Col span={6}>
        <Card loading={spinning} >
          <StatisticBlue
            title="Weight Loss"
            value={lossWeight}
            precision={2}
            prefix={<IconGreen type={lossWeightIcon} />}
            suffix="kg"
          />
        </Card>
      </Col>

      <Col span={6}>
        <Card loading={spinning} >
          <StatisticBlue
            title="Reach my Goal"
            value={goal}
            precision={2}
            prefix={<IconGreen type="ant-design" />}
            suffix="%"
          />
        </Card>
      </Col>

      <Col span={6}>
        <Card loading={spinning} >
          <StatisticBlue
            title="Last 7d Exercise"
            value={last7dExercise}
            prefix={<IconGreen type="heart" />}
            suffix=" mins"
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