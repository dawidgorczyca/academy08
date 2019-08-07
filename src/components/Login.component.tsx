import React, { useState } from 'react'

import useTextInput from '../hooks/useTextInput'
import LoginInfo from './LoginInfo.component'

const Login = () => {
  const { value: username, bind: bindUsername } = useTextInput('')
  const { value: password, bind: bindPassword } = useTextInput('')
  const [error, setError] = useState()
  const showMessage = error && error.length

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setError('')

    if (username.length && password.length) {
      const userObj = {
        username,
        password,
      }
      console.log(userObj)
    } else {
      setError('Please fill out both fields')
    }
  }

  return (
    <div className="login" data-testid="login">
      <div className="login-window">
        <h1>LOGIN</h1>
        {showMessage && <LoginInfo lastLocation={''} error={error} />}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" {...bindUsername} />
          <input type="password" placeholder="Password" {...bindPassword} />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login
