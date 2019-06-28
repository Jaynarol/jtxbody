import { googleConf } from './comps/config'
import { get } from 'lodash'

export const gapiIsLogin = async () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  const url = `${googleConf.url_check}${get(auth, 'tokenObj.access_token', '')}`
  const { expires_in = 0 } = await fetch(url).then(response => response.json())
  return expires_in > 0
}