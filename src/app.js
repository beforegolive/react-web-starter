import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'src/store'
import cssStyles from './style.css'
import scssStyles from './style.scss'
import Icon from 'src/components/Icon'
import FirstGridLayout from 'src/components/GridLayout'
import DevTools from 'src/store/devTools.js'

import './commonEnter.scss'
import './icon.font'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

const App = () => {
	return (
		<div>
			<h1>React Web Starter - 首页</h1>
			<div className={cssStyles.containerCss}>
				css style
				<a href=''>Link</a>
				icon-back:
				<Icon icon='back' />
			</div>
			<div className={scssStyles.containerScss}>scss style</div>
			{process.env.NODE_ENV === 'development' && <DevTools />}
		</div>
	)
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App} />
		</Router>
	</Provider>
	,
	document.getElementById('root')
)
