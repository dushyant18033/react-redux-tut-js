import React, { Component } from 'react';
import { connect } from 'react-redux/es/exports';
import { decrement, increment, reset, setValue, login, logout } from './actions';

const mapStateToProps = (state) => {
  return {
     counter: state.counter,
     isLogged: state.isLogged
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
     increment: (value) => dispatch(increment(value)),
     decrement: (value) => dispatch(decrement(value)),
     login: () => dispatch(login()),
     logout: () => dispatch(logout()),
     reset: () => dispatch(reset()),
     setValue: (value) => dispatch(setValue(value)),
  };
};

export class App extends Component {
  render() {    
    const {counter, increment, decrement, reset, setValue, isLogged, login, logout} = this.props;

    return (
      <div className="App">
      <h1>Hello World! {counter.count}</h1>
      {isLogged?
        <h3>
          Welcome
          <br />
          <button onClick={logout}>Logout</button>
          <br />
          <input id="value_input" type="number" placeholder="Value: " defaultValue={1}></input>
          <button onClick={()=>{
            var inp_el = document.getElementById('value_input');
            setValue(Number(inp_el.value));
          }}>SET</button>
          <br />
          <button onClick={()=>increment(5)}>+</button>
          <button onClick={reset}>RESET</button>
          <button onClick={()=>decrement(5)}>-</button>
        </h3>:
        <h3>
          <button onClick={login}>Login</button>
        </h3>
      }
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
