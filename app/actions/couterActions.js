import * as types from './actionTypes';

export function add(val) {
  return {
      type: types.ADD,
      val : val
    };
}

export function addMethod(cal) {
  return {
      type: types.ADDMETHOD,
      calMethod : cal
    };
}

export function result() {
  return {
      type: types.RESULT
    };
}

export function clear() {
  return {
      type: types.CLEAR
    };
}
