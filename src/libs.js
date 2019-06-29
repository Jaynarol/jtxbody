import moment from 'moment'
import { find, get, toNumber, zipObject } from 'lodash'
import { Modal } from 'antd'

export const convertData = row => ({
  ...row,
  date: zipObject(['year','month','day'], row.date.split('-').map(toNumber)),
  dmoment: moment(row.date, "YYYY-MM-DD"),
  weight: +(row.weight || 0),
  exercise: +(row.exercise || 0),
  measure: row.measure === "TRUE",
  neck: +(row.neck || 0),
  chest: +(row.chest || 0),
  waist: +(row.waist || 0),
  hip: +(row.hip || 0),
  sleeve: +(row.sleeve || 0)
})

export const getAccessToken = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return get(auth, 'tokenObj.access_token', '')
}

const returnOutput = silent => resp => {
  if (resp instanceof Error) {
    if(!silent){
      Modal.error({ title: 'Connection Error', content: resp.message})
    }
    return { data: undefined, isError: true, errMsg: resp.message }
  }
  return { data: resp, isError: false, errMsg: undefined }
}

export const silentOutput = returnOutput(true)
export const output = returnOutput(false)

export const findSameDate = (
  (data, date) => find(data, ({ dmoment }) => dmoment.isSame(date, 'day'))
)

export const cleanAndPairData = header => (row, index) => (
  { rowId: index+2, ...zipObject(header, row)}
)