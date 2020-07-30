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
- Create a reducer component
  ```js
  const initialState = {
    counter: 0
  }

  export default function reducer(state = initialState, action) {
      return state;
  }
  ```
- Create a store and enclose the root component in a provider tag
  ```js
  const store = createStore(reducer);
  
  // Inside render
  <Provider>
    <App store={store}/>
  </Provider>
  ```
- Connect store to react by providijg  dispatcher and state
  ```js
  // After writing component logic
  const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
  }
  const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {
            dispatch({type: 'INCREMENT'})
        }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Counter);
  ```
  - Above line creates a component with states and dispatcher to modify the state a parameter
  - Takes mapStateToProps, mapDispatchToProps as parameter
  - The parameters can then be accessed as props in the container

## Division of reducers
- We hcn create moultiple reducer and combine them to one
- 2 reducers cannot communicate with each other from inside
- Data from one reducer to another must be passed from ouside the reducer
- Combining 2 reducer
  ```js
  import { createStore, combineReducers } from 'redux';
  const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
  })
  const store = createStore(rootReducer);
  ```
- NOTE: Reducer function runs synchronously i.e Any code such as http request or timeout will not give desired result

## When to use redux
- Local UI changes can be performed using normal state management or with redux
- Persitant dta associated to a particulra user can be stored using redux
- User authentication iformation

## Midleware
- Code executed between dispatching action and exuting loginc in reducer store
- Snippet
  ```js
  // Import Statement
  import { createStore, combineReducers, applyMiddleware } from 'redux';
  // Creatinga logger
  const logger = (store) => {
    return next => {
      return action => {
        console.log('[Middleware] Dispatching', action);
        // Ensures dispatcher to execute action in reducer and update state
        const result = next(action);
        console.log('[Middleware next state]', store.getState());
        // to show updated changes in UI
        return result;
      }
    }
  }
  ```


## Redux Entension Guide
- Refer the [link](https://github.com/zalmoxisus/redux-devtools-extension) to set up Redux devtool chorme extension
- Allows us to playback various action
- Allows manipulating values
- Provides flow chart
- Allows running tests
- Add below code after after installing extension
  ```js
  // Import middleware and compose
  import { applyMiddleware, compose } from 'redux';
  // Enhancer constant
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // Create store
  // createStore(reducer, compoeEnhancer(appliMiddleware(middlewareFunction)));
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
  ```

## Action Creator
- Used in synchronous action code eg. http requests from reducer
- Name convection - Camel case with sam name as the action name eg. action: 'INCREMENT' will have creator as 'increment'
- When executed, gives us an action
- Improves code structure
- Snippet
  ```js
  // Creating
  const increment = () => {
    return {
      type: INCREMENT
    };
  }

  // Using
  onIncrementCounter: () => {
    dispatch(increment)
  },
  ```

## Redux Thunk
- Provides a middleware for redux
- Allows executing asynchronous code
- Makes the code wait until asynhrnous code has been executed
- Documentation [link](https://github.com/reduxjs/redux-thunk)
- Snippet
  ```js
  export const storeResultAsynchronously = (res) => {
    return {
      type: STORE_RESULT,
      result: res,
    };
  };
  // Method to be called by the component
  export const storeResult = (res) => {
    // All asynchronous code must be writen in below function
    // Redux thunk provides us with additional parameter i.e current state
    return (dispatch, getState) => {
      setTimeout(() => {
        dispatch(storeResultAsynchronously(res));
      }, 1000);
    };
  };
  ```
  - Here we will call storeResult method, which waits for 1 sec and then calls the actual action creator

### Action Creator
- Can run async code
- Avoid puting too much logic here
- Only use it for async code
### Reducer 
- Only runs sync code
- Where the state is updated
- All state anagement logic mut be stored here

## Redux Extras
- Follow the [link](https://redux.js.org/) for official docs
