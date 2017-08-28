import { createReducers } from './reducerHelper';
import actions from '../actions/demoActions';

const initialState = {
  firstActionDispatched: false,
  secondActionDispatched: false,
  appName: 'react web Starter test'
};

// is the same as below:
//
// switch(action.type){
//   case 'firstAction':
//   // do something
//     break;
//   case 'secondAction':
//   // do something
//     break;
//   default:
//     break
// }
export default createReducers((on) => {
  on(actions.firstAction, (state, action) => {
    return {
      ...state,
      firstActionDispatched: true,
    };
  });

  on(actions.secondAciton, (state, action) => {
    return {
      ...state,
      secondActionDispatched: true,
    }
  });
}, initialState);
