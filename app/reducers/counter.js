import * as types from '../actions/actionTypes';

const initialState = {
  resultNum: 0,
  operator : '',
  operand : '',
  calMethod : ''
};

export default function counter(state = initialState, action = {}) {

      console.log(action)
  switch (action.type) {
      case types.ADD:
        console.log(action.val)
        return {
                ...state,
                resultNum : action.val
              };
      case types.ADDMETHOD:
        return Object.assign(state ,
           {calMethod : action.calMethod ,
             operator : state.resultNum,
           });
      case types.RESULT:
        return Object.assign({},{
          resultNum: action.resultNum,
          operator : '',
          operand : '',
          calMethod : ''
        })
      case types.CLEAR:
        return Object.assign({},{
          resultNum: 0,
          operator : '',
          operand : '',
          calMethod : ''
        })
      default:
        return state;
    }
}
