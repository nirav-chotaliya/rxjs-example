import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index'
import App from './App'
import { Provider } from 'react-redux'


const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, root)