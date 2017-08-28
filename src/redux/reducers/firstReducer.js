import { createReducers } from './reducerHelper';
import actions from '../actions/firstAction';

const initialState = {
  firstActionDispatched: false,
  secondActionDispatched: false,
};

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
