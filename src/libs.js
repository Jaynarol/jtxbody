import moment from 'moment'
import { find, get, zipObject, round } from 'lodash'
import { Modal } from 'antd'

export const convertDate = date => (
  moment(date, 'YYYY-MM-DD')
)

export const convertData = (row, index, data) => {
  const weight = +(row.weight || 0)
  const weightBefore = get(data, index-1, { weight }).weight

  return {
    ...row,
    timestamp: convertDate(row.date).unix(),
    dmoment: convertDate(row.date),
    weight,
    change: round(weight - weightBefore, 2),
    exercise: +(row.exercise || 0),
    measure: row.measure === "TRUE",
    neck: +(row.neck || 0),
    chest: +(row.chest || 0),
    waist: +(row.waist || 0),
    hip: +(row.hip || 0),
    sleeve: +(row.sleeve || 0)
  }
}

export const getAccessToken = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return get(auth, 'tokenObj.access_token', '')
}

export const getTokenExpiresAt = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return get(auth, 'tokenObj.expires_at', 0)
}

export const cleanAccessToken = () => {
  localStorage.removeItem('auth')
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