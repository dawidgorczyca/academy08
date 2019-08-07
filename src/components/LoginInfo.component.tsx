import React from 'react'
import LoginInfoInterface from '../interfaces/LoginInfo.interface'

const LoginInfo = (props: LoginInfoInterface) => {
  const { lastLocation, error } = props

  return (
    <div className="login-info">
      {lastLocation && <p>You must log in to view the page at {lastLocation}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default LoginInfo
