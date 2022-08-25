import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { decrement, increment, logout, login } from './actions';

function App() {
  // access states
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello World! {counter.count}</h1>
      <h3>  
        <button onClick={()=>dispatch(increment(5))}>+</button>
        <button onClick={()=>dispatch(decrement(5))}>-</button>
      </h3>
    </div>
  );
}

export default App;
