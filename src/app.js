import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'src/store'
import Icon from 'src/components/Icon'
import DevTools from 'src/store/devTools'
import App from 'src/app/index'

import './commonEnter.scss'
import './icon.font'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<section>
			<Router history={history}>
				<Route path='/' component={App} />
			</Router>
			{process.env.NODE_ENV === 'development' && <DevTools />}
		</section>
	</Provider>
	,
	document.getElementById('root')
)
