import './App.css';
import React from 'react';
import { createContext, useReducer } from 'react';
                                                   // example of useContext + useReducer = Global state Management
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

import DataFetching from './DataFetching';

export const CountContext=createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {

  const [count,dispatch]=useReducer(reducer,initialState);

  return (
  <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
    Count -  {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    <DataFetching />
  </CountContext.Provider>

  )
}

export default App;
