import moment from 'moment'
import { get, toNumber, zipObject } from 'lodash'
import { Modal } from 'antd'

export const convertData = row => ({
  date: zipObject(['year','month','day'],row.date.split('-').map(toNumber)),
  moment: moment(row.date, "YYYY-MM-DD"),
  weight: +row.weight,
  exercise: +row.exercise,
  measure: row.measure === "TRUE",
  neck: +row.neck,
  chest: +row.chest,
  waist: +row.waist,
  hip: +row.hip,
  sleeve: +row.sleeve
})

export const notiError = (title, content) => {
  Modal.error({ title, content})
}

export const getAccessToken = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return get(auth, 'tokenObj.access_token', '')
}

export const output = resp => {
  if (resp instanceof Error) {
    return { isError: true, errMsg: resp.message }
  }
  return { data: resp, isError: false }
}