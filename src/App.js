import React, { Component } from 'react';
import { connect } from 'react-redux/es/exports';
import { decrement, increment, login, logout } from './actions';

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
     logout: () => dispatch(logout())
  };
};

export class App extends Component {
  render() {
    const {counter, increment, decrement, isLogged, login, logout} = this.props;
    return (
      <div className="App">
      <h1>Hello World! {counter.count}</h1>
      {isLogged?
        <h3>
          Welcome
          <br />
          <button onClick={logout}>Logout</button>
          <br />
          <button onClick={()=>increment(5)}>+</button>
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
