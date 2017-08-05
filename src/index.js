import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import App from './app/App'
import reducers from './app/reducers'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, multi, promise)
))

const AppToRender = () => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
ReactDOM.render(<AppToRender />, document.getElementById('root'))
registerServiceWorker()
