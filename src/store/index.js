import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../redux/reducers'
import DevTools from './devTools'

const configureStore = initialState => {
	const middleWares = [
		applyMiddleware(thunk)
	]

	if(process.env.NODE_ENV === 'development'){
		middleWares.push(DevTools.instrument())
	}

	const storeInstance = createStore(
		rootReducer,
		initialState,
		compose(...middleWares)
	)

	return storeInstance
}

export default configureStore
