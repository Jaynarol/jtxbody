import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { pick, get } from 'lodash'
import { GoogleLogin } from 'react-google-login'
import { Button, Modal, message } from 'antd'
import { gconf, updateOrCreateRow } from '../../gapi'


const ButtonAuth = ({ refetchAuth, refetchData, form, data, selectedDate, isLogin }) => {

  const [loading, setLoading] = useState(false)

  const loginSuccess = async resp => {
    const givenName = get(resp, 'profileObj.givenName')
    if(givenName === gconf.givenName){
      localStorage.setItem('auth', JSON.stringify(pick(resp, ['profileObj', 'tokenObj'])))
      await refetchAuth()
      message.success(`Welcome back ${gconf.givenName}.`)
    }else{
      Modal.error({ title: 'Permission Denied', content: `I'm glad to hear that you are interested, But This area for ${gconf.givenName} only.`})
    }
    setLoading(false)
  }

  const saveData = async () => {
    setLoading(true)
    const { isError } = await updateOrCreateRow(data, form, selectedDate)
    if(isError){
      await refetchAuth()
      message.info('Session timeout.')
    }else{
      await refetchData()
      message.success('Data successfully saved.')
    }
    setLoading(false)
  }

  return isLogin
    ? <Button loading={loading} onClick={saveData} icon="save">Save</Button>
    : <GoogleLogin
      clientId={gconf.clientId}
      buttonText="Login"
      onRequest={() => setLoading(true)}
      onSuccess={loginSuccess}
      onFailure={() => setLoading(false)}
      scope={gconf.scope}
      cookiePolicy={'single_host_origin'}
      render={renderProps => (
        <Button onClick={renderProps.onClick} loading={loading} icon="google">Login</Button>
      )}
    />
}

ButtonAuth.propTypes = {
  refetchAuth: PropTypes.func.isRequired,
  refetchData: PropTypes.func.isRequired,
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedDate: PropTypes.objectOf(PropTypes.any).isRequired,
  isLogin: PropTypes.bool
}

ButtonAuth.defaultProps = {
  isLogin: false
}

export default ButtonAuth
