import { createAction } from 'redux-actions'

const firstActionCreator = createAction('MyTest',a => a, (...rest) => rest)
const normalAction = firstActionCreator(123)
const errorAction = firstActionCreator(new Error(123))
const metaAction = firstActionCreator(456,()=>({name:123}))
export {
	firstActionCreator as default,
	normalAction,
	errorAction,
	metaAction
}
