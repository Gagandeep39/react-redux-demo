
const initialState = {
  counter: 0,
  results: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
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
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value
      }
    case 'SUB':
      return {
        ...state,
        counter: state.counter -action.value
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter}) // Substitue of.push method as this is immutable(Creates copy of array)
      }
    case 'DELETE_RESULT':
      return {
        
      }
  }
    return state;
}
