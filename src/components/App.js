import React, { Component } from 'react';

class App extends Component {
  // state = { counter: 0 };
  constructor(props) {
    super(props);
    this.state = { counter: 9 };
  }
  render() {
    return (

      <button>{this.state.counter}</button>

    );
  }
}

/*
const App = function (props) {
  return (
    <button>{props.label}  </button>
  );
}
*/
export default App;
