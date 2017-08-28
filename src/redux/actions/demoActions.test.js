import actions from './demoActions';

test('nomal action should behave as actionHelper defined', () => {
  const firstActionResult = {
    payload: { x: 123 },
    type: 'firstAction',
    meta: [123],
  };
  expect(actions.firstAction(123)).toEqual(firstActionResult);

  const secondActionResult = {
    payload: { x: 123, y: 'abc' },
    type: 'secondAciton',
    meta: [123, 'abc'],
  };
  expect(actions.secondAciton(123, 'abc')).toEqual(secondActionResult);
});
