import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import 'font-awesome/css/font-awesome.css'

import App from './app/App'
import reducers from './app/reducers'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducers)

const AppToRender = () => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
ReactDOM.render(<AppToRender />, document.getElementById('root'))
registerServiceWorker()
