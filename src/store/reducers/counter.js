import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  counter: 0
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // Different from constNewState = state as it creates a clone instead of providing referece
      // We must always make a copy i.e update objects immutably
      // const newState = Object.assign({}, state);
      // newState.counter = state.counter + 1
      // return newState;
      // ******* OR *****
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter -action.value
      }
  }
    return state;
}
