import { PING, PONG } from '../actions/index'
import { combineEpics } from 'redux-observable'

import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/mapTo'


const pingEpic = action$ => {
  return action$.ofType(PING).delay(5000).mapTo({type: PONG})
}

export default combineEpics(
    pingEpic
)