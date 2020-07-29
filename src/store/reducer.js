
const initialState = {
  counter: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }
    case 'ADD':
      return {
        counter: state.counter + 5
      }
    case 'SUB':
      return {
        counter: state.counter -5
      }
  }
    return state;
}
