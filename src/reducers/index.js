import { PING, PONG } from '../actions'
import { combineReducers } from 'redux'

export const pingReducer = (state = { isPinging: 'PONG' }, action) => {
    debugger
    switch (action.type) {
      case PING:
        return { isPinging: 'PING' };
  
      case PONG:
        return { isPinging: 'PONG' };
  
      default:
        return state;
    }
  };

  export default combineReducers({
    pingReducer
  });