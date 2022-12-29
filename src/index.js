import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ScreenDekstop from './views/screen-dekstop'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ScreenDekstop} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
