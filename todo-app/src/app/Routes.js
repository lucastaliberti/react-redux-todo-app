import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

export default props => (
  <Switch>
    <Route path='/todos' component={Todo} />
    <Route path='/about' component={About} />
    <Route component={Todo} />
  </Switch>
)
