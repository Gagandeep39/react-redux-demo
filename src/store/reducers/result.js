import * as actionTypes from '../actions';

const initialState = {
  results: []
}

export default function resultReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result}) // taking value as param on calling
        // results: state.results.concat({id: new Date(), value: state.counter}) // Substitue of.push method as this is immutable(Creates copy of array)
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
