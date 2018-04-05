import React, { Component } from 'react';

class Button extends Component {
  // state = { counter: 0 }; 
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
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


  incrementCounter(incrementValue) {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  }

  render() {
    return (
      <div >
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div >
    );
  }
}

export default App;