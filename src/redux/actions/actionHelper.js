import _ from 'lodash';

const actionMap = {};

export const createActions = (obj) => {
  const funcHandler = {
    apply(target, ctx, args) {
      const actionResult = Reflect.apply(...arguments);

			// here is for being compatible with redux-thunk
      if (_.isFunction(actionResult)) {
        return actionResult;
      }

      const result = {
        type: target.name,
        payload: actionResult,
        meta: args,
      };

      return result;
    },
  };

  const objProxy = {};

  Object.keys(obj).forEach((e) => {
    if (_.isFunction(obj[e])) {
      if (actionMap.hasOwnProperty(e)) {
        throw new Error(`action - '${e}' is duplicated`);
      } else {
        actionMap[e] = true;
      }

      objProxy[e] = new Proxy(obj[e], funcHandler);
      objProxy[e].toString = () => e;
    }
  });

  return objProxy;
};
