import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import pingEpic from '../epics/index'
import reducer from '../reducers/index'
import { ping } from '../actions';

console.log('Ping epic :: ', pingEpic.toString())
console.log('Ping reducer :: ', reducer.toString())

const epicMiddleWare = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, applyMiddleware(epicMiddleWare))

epicMiddleWare.run(pingEpic)

console.log('Store :: ', store)
window.store = store

export default store