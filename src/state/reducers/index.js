import signinReducer from '../reducers/signinReducer';
import heroReducer from '../reducers/heroReducer';
import {
  combineReducers
} from 'redux'


export default combineReducers({
  signinReducer,
  heroReducer
})