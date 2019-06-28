import React, { Fragment, useEffect, useState } from 'react'
import { capitalize } from 'lodash'
import { ColLabel, ColSlider, RowPanel, RowSave } from './styled'
import { Col, InputNumber, Slider, Switch } from 'antd'
import ButtonAuth from '../ButtonAuth'
import { gapiIsLogin } from '../../libs'

const PanelWeight = () => {

  const [loading, setLoading] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  const checkLogin = async () => {
    setLoading(true)
    const isSignedin = await gapiIsLogin()
    setIsLogin(isSignedin)
    setLoading(false)
  }

  useEffect(() => {
    checkLogin()
  }, [])

  const data = {
    weight: useState(0),
    exercise: useState(0),
    measure: useState(false),
    neck: useState(0),
    chest: useState(0),
    waist: useState(0),
    hip: useState(0),
    sleeve: useState(0)
  }
  const setValue = state => value => data[state][1](value)
  const getValue = state => data[state][0]

  return (
    <Fragment>

      <RowPanel>
        <ColLabel>Weight:</ColLabel>
        <ColSlider>
          <Slider min={0} max={120} step={0.1} onChange={setValue('weight')} value={getValue('weight')} disabled={!isLogin} />
        </ColSlider>
        <Col span={8}>
          <InputNumber
            onChange={setValue('weight')}
            formatter={n => `${n} kg`}
            parser={n => n.replace(/[^0-9.]/g, '')} disabled={!isLogin}
            min={0} max={120} step={0.1} value={getValue('weight')}
          />
        </Col>
      </RowPanel>

      <RowPanel>
        <ColLabel>Exercise:</ColLabel>
        <ColSlider>
          <Slider min={0} max={120} step={5} onChange={setValue('exercise')} value={getValue('exercise')} disabled={!isLogin}  />
        </ColSlider>
        <Col span={8}>
          <InputNumber
            onChange={setValue('exercise')}
            formatter={n => `${n} mins`}
            parser={n => n.replace(/[^0-9.]/g, '')} disabled={!isLogin}
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
            disabled={!isLogin}
          />
        </Col>
      </RowPanel>

      {
        getValue('measure') &&
        ['neck', 'chest', 'waist', 'hip', 'sleeve'].map(v => (
          <RowPanel key={v}>
            <ColLabel>{capitalize(v)}:</ColLabel>
            <ColSlider>
              <Slider min={0} max={60} step={0.1} onChange={setValue(v)} value={getValue(v)} disabled={!isLogin}  />
            </ColSlider>
            <Col span={8}>
              <InputNumber
                onChange={setValue(v)}
                formatter={n => `${n}"`}
                parser={n => n.replace(/[^0-9.]/g, '')} disabled={!isLogin}
                min={0} max={60} step={0.1} value={getValue(v)}
              />
            </Col>
          </RowPanel>
        ))
      }

      <RowSave>
        <ColLabel />
        <Col span={16}>
          <ButtonAuth loading={loading} isLogin={isLogin} checkLogin={checkLogin} />
        </Col>
      </RowSave>
    </Fragment>
  )
}

export default PanelWeight