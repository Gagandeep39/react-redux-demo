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

## When to use redux
- Local UI changes can be performed using normal state management or with redux
- Persitant dta associated to a particulra user can be stored using redux
- User authentication iformation