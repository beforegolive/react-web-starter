import test from 'ava'
import  * as actions from './componentData'

test('first test', t => {
	t.deepEqual(actions.normalAction, {type:'MyTest', payload:123, meta:[123]})
	t.deepEqual(actions.errorAction,{type:'MyTest', payload:new Error(123), meta:[new Error(123)], error:true})
	t.pass()
})
