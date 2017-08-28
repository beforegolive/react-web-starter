import configureStore from '../../store';
import actions from '../actions/firstAction';

test('normal action and reducer should work', () => {
  const mockedStore = configureStore();
  expect(mockedStore.getState().firstReducer).toEqual({
    firstActionDispatched: false,
    secondActionDispatched: false,
  });

  const firstActionObj = actions.firstAction(123);
  mockedStore.dispatch(firstActionObj);

  expect(mockedStore.getState().firstReducer).toEqual({
    firstActionDispatched: true,
    secondActionDispatched: false,
  });

  const secondAcitonObj = actions.secondAciton(123, 'abc');
  mockedStore.dispatch(secondAcitonObj);

  expect(mockedStore.getState().firstReducer).toEqual({
    firstActionDispatched: true,
    secondActionDispatched: true,
  });
});

test('redux-thunk action should work', () => {
  const mockedStore = configureStore();
  expect(mockedStore.getState().firstReducer).toEqual({
    firstActionDispatched: false,
    secondActionDispatched: false,
  });

  const thirdActionObj = actions.thirdAction();
  mockedStore.dispatch(thirdActionObj);

  expect(mockedStore.getState().firstReducer).toEqual({
    firstActionDispatched: true,
    secondActionDispatched: true,
  });
});
