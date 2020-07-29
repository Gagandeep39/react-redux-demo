import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

export default function reducer(state = initialState, action) {
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
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}) // Substitue of.push method as this is immutable(Creates copy of array)
      }
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(results => results.id != action.elementId)
      return {
        ...state,
        results: updatedArray
      }
  }
    return state;
}
