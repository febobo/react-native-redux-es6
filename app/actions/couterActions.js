import * as types from './actionTypes';

export function add(val) {
  return (dispatch , getState) => {
    const {counter} = getState();
    // console.log(counter)
    if(!counter.calMethod){
      counter.resultNum = counter.operator += val;
    }else{
      counter.resultNum = counter.operand += val;
    }
    return dispatch({
      type: types.ADD,
      val : counter.resultNum
    });
  }
}

export function addMethod(cal) {
  return (dispatch , getState) => {
    const {counter} = getState();
    if(counter.calMethod && counter.operand){
      switch (counter.calMethod) {
        case '+':
          counter.resultNum = parseFloat(counter.operator) + parseFloat(counter.operand);
          break;
        case '-':
          counter.resultNum = parseFloat(counter.operator) - parseFloat(counter.operand);
          break;
        case '*':
          counter.resultNum = parseFloat(counter.operator) * parseFloat(counter.operand);
          break;
        case '/':
          counter.resultNum = parseFloat(counter.operator) / parseFloat(counter.operand);
          break;
        default:
      }
    }
    return dispatch({
        type: types.ADDMETHOD,
        calMethod : cal,
        resultNum : counter.resultNum,
        operator : counter.resultNum
      });
  }
}

export function result() {
  return (dispatch , getState) => {
    const {counter} = getState();
    if(!counter.operand) return;
    switch (counter.calMethod) {
      case '+':
        counter.resultNum = parseFloat(counter.operator) + parseFloat(counter.operand);
        break;
      case '-':
        counter.resultNum = parseFloat(counter.operator) - parseFloat(counter.operand);
        break;
      case '*':
        counter.resultNum = parseFloat(counter.operator) * parseFloat(counter.operand);
        break;
      case '/':
        counter.resultNum = parseFloat(counter.operator) / parseFloat(counter.operand);
        break;
      default:
    }
    return dispatch({
        type: types.RESULT,
        resultNum : counter.resultNum,
        operand : '',
        operator : counter.resultNum,
      });
  }
}

export function clear() {
  return {
      type: types.CLEAR
    };
}
