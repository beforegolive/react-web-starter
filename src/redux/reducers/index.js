import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import firstReducer from './firstReducer';

export default combineReducers({
  routing: routerReducer,
  firstReducer,
});
