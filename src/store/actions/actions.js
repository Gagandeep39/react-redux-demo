export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const add = (val) => {
  return {
    type: ADD,
    value: val,
  };
};
export const sub = (val) => {
  return {
    type: SUBSTRACT,
    value: val,
  };
};
export const storeResultAsynchronously = (res) => {
  return {
    type: STORE_RESULT,
    result: res,
  };
};
export const storeResult = (res) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(storeResult(res));
    }, 1000);
  };
};
export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    elementId: id,
  };
};
