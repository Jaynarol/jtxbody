import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { pick } from 'lodash'
import { GoogleLogin } from 'react-google-login'
import { Button } from 'antd'
import { gconf } from '../../gapi'


const ButtonAuth = ({ isLogin, refetchAuth }) => {

  const [loading, setLoading] = useState(false)

  const loginSuccess = async data => {
    localStorage.setItem('auth', JSON.stringify(pick(data, ['profileObj', 'tokenObj'])))
    await refetchAuth()
    setLoading(false)
  }

  return <>
    {
      isLogin ?
        <Button loading={loading} icon="save">Save</Button>
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
  </>
}

ButtonAuth.propTypes = {
  isLogin: PropTypes.bool,
  refetchAuth: PropTypes.func.isRequired
}

ButtonAuth.defaultProps = {
  isLogin: false
}

export default ButtonAuth
