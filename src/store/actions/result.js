import * as actionTypes from './actionsTypes';

export const storeResultAsynchronously = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => {
  console.log('Store Result');
  return (dispatch) => {
    setTimeout(() => {
      dispatch(storeResultAsynchronously(res));
    }, 1000);
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    elementId: id,
  };
};
