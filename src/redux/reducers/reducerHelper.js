import { handleActions } from 'redux-actions';

export const createReducers = (func, initialState) => {
  const handlersObj = {};

	// place-holder, do nothing here for now, will be changed later
  const funcProxy = {
    apply(target, ctx, args) {
      const [state, action] = args;
      return Reflect.apply(...arguments);
    },
  };

  const on = (actionCreator, handler, errorHandler) => {
    const actionType = actionCreator.toString();
    handlersObj[actionType] = {
      next: new Proxy(handler, funcProxy),
      throw: errorHandler,
    };
  };

  func(on);

  return handleActions(handlersObj, initialState);
};
