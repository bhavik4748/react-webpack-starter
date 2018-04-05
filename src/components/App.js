import React, { Component } from 'react';

class Button extends Component {
  // state = { counter: 0 }; 


  render() {
    return (
      <button onClick={this.props.onClickFunction}> +1 </button>
    );
  };
}

/*
const App = function (props) {
  return (
    <button>{props.label}  </button>
        );
}
*/

const Result = function (props) {
  return (
    <div>
      {props.counter}
    </div>
  );

}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  };


  incrementCounter() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div >
        <Button onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div >
    );
  }
}

export default App;