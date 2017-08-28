import configureStore from '../../store';
import actions from '../actions/demoActions';

test('normal action and reducer should work', () => {
  const mockedStore = configureStore();

  expect(mockedStore.getState().demo.firstActionDispatched).toEqual(false);
  expect(mockedStore.getState().demo.secondActionDispatched).toEqual(false);

  const firstActionObj = actions.firstAction(123);
  mockedStore.dispatch(firstActionObj);

  expect(mockedStore.getState().demo.firstActionDispatched).toEqual(true);
  expect(mockedStore.getState().demo.secondActionDispatched).toEqual(false);

  const secondAcitonObj = actions.secondAciton(123, 'abc');
  mockedStore.dispatch(secondAcitonObj);

  expect(mockedStore.getState().demo.firstActionDispatched).toEqual(true);
  expect(mockedStore.getState().demo.secondActionDispatched).toEqual(true);
});

test('redux-thunk action should work', () => {
  const mockedStore = configureStore();
  expect(mockedStore.getState().demo.firstActionDispatched).toEqual(false);
  expect(mockedStore.getState().demo.secondActionDispatched).toEqual(false);

  const thirdActionObj = actions.thirdAction();
  mockedStore.dispatch(thirdActionObj);

  expect(mockedStore.getState().demo.firstActionDispatched).toEqual(true);
  expect(mockedStore.getState().demo.secondActionDispatched).toEqual(true);
});
