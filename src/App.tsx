import * as React from 'react'
import { render } from 'react-dom'

import './styles/main.scss'

import Login from './components/Login.component'

function App() {
  return (
    <div>
      <Login />
    </div>
  )
}

render(<App />, document.getElementById('root'))
