import { createActions } from './actionHelper';
export default createActions({
	// here is the same as below:
	// function firstAction(x){
	// 	return {
	// 		type: 'firstAction',
	// 		payload: { x }
	// 	}
	// }
  firstAction: x => ({ x }),

  secondAciton: (x, y) => ({ x, y }),

	// use this kind function declaration, if you want to reference current object by 'this'
  thirdAction() {
    return (dispatch) => {
	    dispatch(this.firstAction(123));
      dispatch(this.secondAciton(123, 'abc'));
	  };
  },
});
