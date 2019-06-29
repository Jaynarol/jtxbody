import axios from 'axios'
import { zipObject } from 'lodash'
import { convertData, getAccessToken, output } from './libs'

export const gconf = {
  clientId: '868583526084-jg9plqb23mjf393qdegg1aa0gq0tf8j4.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/spreadsheets.readonly https://www.googleapis.com/auth/spreadsheets',
  sheetID: '1btCR4YSDxAElxE_IdhhuEcwyr5vFDIcV48Il37NiQLQ'
}

const gapi = {
  tokenInfo: 'https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=',
  publicCsv: `https://docs.google.com/spreadsheets/d/${gconf.sheetID}/pub?gid=0&single=true&output=csv`,
  getSheets: `https://sheets.googleapis.com/v4/spreadsheets/${gconf.sheetID}/values/A1:I100000`
}

const fetchWithAuth = (url, method = 'GET') => axios({
  url,
  method,
  headers: {
    'Authorization': `Bearer ${getAccessToken()}`,
    'Content-Type': 'application/json'
  }
})

export const fetchTokenInfo = () => {
  const url = `${gapi.tokenInfo}${getAccessToken()}`
  return axios.get(url)
    .then(({ data }) => data)
    .then(output).catch(output)
}

export const fetchData = isLogin => (
  isLogin
    ? fetchWithAuth(gapi.getSheets)
      .then(({ data }) => data)
      .then(({ values: [header = [], ...rows] = [] }) =>(
        rows
          .map(row => zipObject(header, row))
          .map(convertData)
      ))
      .then(output).catch(output)

    : axios.get(gapi.publicCsv)
      .then(({ data }) => data)
      .then(csv => {
        const [headerRaw, ...dataRaw] = csv.split('\n')
        const header = headerRaw.trim().split(',')
        return dataRaw
          .map(raw => zipObject(header, raw.trim().split(',')))
          .map(convertData)
      })
      .then(output).catch(output)
)