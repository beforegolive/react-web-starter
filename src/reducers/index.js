import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import componentDataReducer from './componentData'

export default combineReducers({
	routing: routerReducer,
	componentData: componentDataReducer
})
