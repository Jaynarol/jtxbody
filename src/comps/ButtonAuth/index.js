import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { pick } from 'lodash'
import { GoogleLogin } from 'react-google-login'
import { Button } from 'antd'
import { googleConf } from '../config'


const ButtonAuth = ({ loading, isLogin, checkLogin }) => {

  const loginSuccess = async data => {
    localStorage.setItem('auth', JSON.stringify(pick(data, ['profileObj', 'tokenObj'])))
    await checkLogin()
  }

  return <Fragment>
    {
      isLogin ?
        <span>test</span>
        : <GoogleLogin
          clientId={googleConf.client_id}
          buttonText="Login"
          onSuccess={loginSuccess}
          scope={googleConf.scope}
          cookiePolicy={'single_host_origin'}
          render={renderProps => (
            <Button onClick={renderProps.onClick} loading={loading} icon="google">Login</Button>
          )}
        />
    }
  </Fragment>
}

ButtonAuth.propTypes = {
  loading: PropTypes.bool,
  isLogin: PropTypes.bool,
  checkLogin: PropTypes.func.isRequired
}

ButtonAuth.defaultProps = {
  loading: true,
  isLogin: false
}

export default ButtonAuth
