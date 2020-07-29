// Contains code independent of React
// Must be executed as a standalone JS file
// Demo of basic working of reduz

// Importing redux package
const redux = require('redux');
// Storing a function reference of create store function
const createStore = redux.createStore;

// An initial state to prvide to the reducer
const initialState = {
  counter: 4
}
// 1. Creating Reducer****************************************
// Assigning a default state
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      // return state.counter++;
      //  Must never try to mutate data
      return {
        ...state, // Copy all state as it is
        counter: state.counter + 1 // Ovverride the counter value
      }

    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.value
      }
      // default: 
      // throw new Error('Lol');
  }
  return state;
}
// 2. Creating Store and assigning a reducer***********************************
const store  = createStore(rootReducer);
// 3. Subscribe to Store changes **********************************************8
// Execute whenever data changes
store.subscribe(() => {
  console.log('Subscription: ' + store.getState());
})

console.log(store.getState());

// 4. Dispach****************************************
// Passing a new state to the store
// First parmeter must be `type` which cannot change, other than that we can pas anything
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 2});
console.log(store.getState());

