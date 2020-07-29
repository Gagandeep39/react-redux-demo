# React Redux

## Deployment
Application demo available at https://gagandeep39.github.io/react-redux-demo

## Steps to use redux (generic)
1. Create initial State
   ```js
   const initialState = {
       counter: 4
   }
   ```
2. Create a Store
   ```js
   const redux = require('redux');
   const createStore = redux.createStore;
   ```
3. Create a Reducer that modifies state
   ```js
   const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INC_COUNTER':
      return {
        ...state, // Copy all state as it is
        counter: state.counter + 1 // Ovverride specific state 
      }
    case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter + action.value
      }
    }
    return state;
   }
   ```
3. Initialize store with reducer
   ```js
   const store  = createStore(rootReducer);
   ```
4. Create a store subscriber
   ```js
   store.subscribe(() => {
      console.log('Subscription: ' + store.getState());
   })
   ```
5. Execute Operations using Dispatcher
   ```js
   store.dispatch({type: 'INC_COUNTER'});
   store.dispatch({type: 'ADD_COUNTER', value: 2});
   ```

### Steps to use React with redux
- Install package `react-redux` using `npm install --save react-redux`