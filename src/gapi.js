import axios from 'axios'
import { pick, sortBy, values } from 'lodash'
import { cleanAndPairData, convertData, findSameDate, getAccessToken, output, silentOutput } from './libs'
import { gconf } from './config'


const gapi = {
  tokenInfo: 'https://www.googleapis.com/oauth2/v3/tokeninfo',
  publicCsv: tabID => `https://docs.google.com/spreadsheets/d/${gconf.sheetID}/pub?gid=${tabID}&single=true&output=csv`,
  getSheets: tabID => `https://sheets.googleapis.com/v4/spreadsheets/${gconf.sheetID}/values/'${tabID}'!A1:I100000`,
  updateSheets: `https://sheets.googleapis.com/v4/spreadsheets/${gconf.sheetID}/values:batchUpdate`
}

const axiosWithAuth = (url, method = 'GET', data = {}) => axios({
  url, method, data,
  headers: {
    'Authorization': `Bearer ${getAccessToken()}`,
    'Content-Type': 'application/json'
  }
})

export const fetchTokenInfo = () => (
  axiosWithAuth(gapi.tokenInfo)
    .then(({ data }) => data)
    .then(output).catch(silentOutput)
)

const fetchDataWithAuth = tab => (
  axiosWithAuth(gapi.getSheets(tab))
    .then(({ data }) => data)
    .then(({ values: [header = [], ...rows] = [] }) =>(
      rows
        .map(cleanAndPairData(header))
        .map(convertData)
    ))
    .then(output).catch(output)
)

const fetchDataWithPublic = tab => (
  axios.get(gapi.publicCsv(tab))
    .then(({ data }) => data)
    .then(csv => {
      const [headerRaw, ...dataRaw] = csv.split('\n')
      const header = headerRaw.trim().split(',')
      return dataRaw
        .map(raw => raw.trim().split(','))
        .map(cleanAndPairData(header))
        .map(convertData)
    })
    .then(output).catch(output)
)

export const fetchData = async isLogin => {
  const tab = 'db'
  const resp = isLogin
    ? await fetchDataWithAuth(tab)
    : await fetchDataWithPublic(gconf.tabsId[tab])
  const data = sortBy(resp.data, ['timestamp'])

  return { ...resp, data }
}

const fetchAnotherSheetWithAuth = tab => (
  axiosWithAuth(gapi.getSheets(tab))
    .then(({ data }) => data.values.map(texts => texts[0]))
    .catch(output)
)

const fetchAnotherSheetWithPublic = tab => (
  axios.get(gapi.publicCsv(tab))
    .then(({ data }) => data.split('\n'))
    .catch(output)
)

export const fetchAnotherSheet = async (isLogin, tab) => (
  isLogin
    ? await fetchAnotherSheetWithAuth(tab)
    : await fetchAnotherSheetWithPublic(gconf.tabsId[tab])
)

export const updateOrCreateRow = (data, form, selectedDate) => {
  const { rowId } = findSameDate(data, selectedDate) || { rowId: data.length + 2 }
  return axiosWithAuth(gapi.updateSheets, 'POST', {
    valueInputOption: 'USER_ENTERED',
    data: [{
      range: `A${rowId}`,
      majorDimension: 'ROWS',
      values: [[
        selectedDate.format('YYYY-MM-DD'),
        ...values(pick(form, ['weight', 'exercise', 'measure', 'neck', 'chest', 'waist', 'hip', 'sleeve']))
      ]]
    }]
  })
    .then(({ data }) => data)
    .then(output).catch(output)
}