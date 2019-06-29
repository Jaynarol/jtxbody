import axios from 'axios'
import { pick, values } from 'lodash'
import { cleanAndPairData, convertData, findSameDate, getAccessToken, output, silentOutput } from './libs'

export const gconf = {
  projectName: 'JTxBody',
  clientId: '868583526084-jg9plqb23mjf393qdegg1aa0gq0tf8j4.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/spreadsheets',
  sheetID: '1btCR4YSDxAElxE_IdhhuEcwyr5vFDIcV48Il37NiQLQ',
  givenName: 'Jaynarol',
  githubRepo: 'https://github.com/Jaynarol/jtxbody',
  facebookLink: 'https://fb.com/akkaradech.sr'
}

const gapi = {
  tokenInfo: 'https://www.googleapis.com/oauth2/v3/tokeninfo',
  publicCsv: `https://docs.google.com/spreadsheets/d/${gconf.sheetID}/pub?gid=0&single=true&output=csv`,
  getSheets: `https://sheets.googleapis.com/v4/spreadsheets/${gconf.sheetID}/values/A1:I100000`,
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

const fetchDataWithAuth = () => (
  axiosWithAuth(gapi.getSheets)
    .then(({ data }) => data)
    .then(({ values: [header = [], ...rows] = [] }) =>(
      rows
        .map(cleanAndPairData(header))
        .map(convertData)
    ))
    .then(output).catch(output)
)

const fetchDataWithPublic = () => (
  axios.get(gapi.publicCsv)
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

export const fetchData = isLogin => (
  isLogin
    ? fetchDataWithAuth()
    : fetchDataWithPublic()
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