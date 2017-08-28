import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import demoReducers from './demoReducers';

export default combineReducers({
  routing: routerReducer,
  demo: demoReducers,
});
