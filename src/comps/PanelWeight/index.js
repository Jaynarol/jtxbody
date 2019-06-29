import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { each, capitalize, keys } from 'lodash'
import { ColLabel, ColSlider, RowPanel, RowSave } from './styled'
import { Col, InputNumber, Slider, Switch } from 'antd'
import ButtonAuth from '../ButtonAuth'
import { findSameDate } from '../../libs'

const PanelWeight = props => {
  const { isLogin, selectedDate, data } = props
  const form = {
    weight: useState(0),
    exercise: useState(0),
    measure: useState(false),
    neck: useState(0),
    chest: useState(0),
    waist: useState(0),
    hip: useState(0),
    sleeve: useState(0)
  }
  const setValue = (label, bypass = false) => value => (isLogin || bypass) && form[label][1](value)
  const getValue = label => form[label][0]

  useEffect(() => {
    const formValue = findSameDate(data, selectedDate)
    each(keys(form), label => setValue(label, true)(label === 'measure' ? false : 0))
    if(formValue){
      each(keys(form), label => setValue(label, true)(formValue[label]))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, data])

  return (
    <>
      <RowPanel>
        <ColLabel>Weight:</ColLabel>
        <ColSlider>
          <Slider min={0} max={120} step={0.1} onChange={setValue('weight')} value={getValue('weight')} />
        </ColSlider>
        <Col span={8}>
          <InputNumber
            onChange={setValue('weight')}
            formatter={n => `${n} kg`}
            parser={n => n.replace(/[^0-9.]/g, '')}
            min={0} max={120} step={0.1} value={getValue('weight')}
          />
        </Col>
      </RowPanel>

      <RowPanel>
        <ColLabel>Exercise:</ColLabel>
        <ColSlider>
          <Slider min={0} max={120} step={5} onChange={setValue('exercise')} value={getValue('exercise')}  />
        </ColSlider>
        <Col span={8}>
          <InputNumber
            onChange={setValue('exercise')}
            formatter={n => `${n} mins`}
            parser={n => n.replace(/[^0-9.]/g, '')}
            min={0} max={120} step={5} value={getValue('exercise')}
          />
        </Col>
      </RowPanel>

      <RowPanel>
        <ColLabel>Measure:</ColLabel>
        <Col span={16}>
          <Switch
            checkedChildren="Yes"
            unCheckedChildren="No"
            checked={getValue('measure')}
            onChange={setValue('measure')}
          />
        </Col>
      </RowPanel>

      {
        getValue('measure') &&
        ['neck', 'chest', 'waist', 'hip', 'sleeve'].map(v => (
          <RowPanel key={v}>
            <ColLabel>{capitalize(v)}:</ColLabel>
            <ColSlider>
              <Slider min={0} max={60} step={0.1} onChange={setValue(v)} value={getValue(v)}  />
            </ColSlider>
            <Col span={8}>
              <InputNumber
                onChange={setValue(v)}
                formatter={n => `${n}"`}
                parser={n => n.replace(/[^0-9.]/g, '')}
                min={0} max={60} step={0.1} value={getValue(v)}
              />
            </Col>
          </RowPanel>
        ))
      }

      <RowSave>
        <ColLabel />
        <Col span={16}>
          <ButtonAuth isLogin={isLogin} {...props} />
        </Col>
      </RowSave>
    </>
  )
}

PanelWeight.propTypes = {
  isLogin: PropTypes.bool,
  selectedDate: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired
}

PanelWeight.defaultProps = {
  isLogin: false
}

export default PanelWeight