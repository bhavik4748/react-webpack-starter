import React, { Component } from 'react';


const Stars = function (props) {
    return (
        <div className="col-5">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
    );
}

const Button = function (props) {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    );
}

const Answer = function (props) {
    return (
        <div className="col-5">
            ...
        </div>
    );
}

class Game extends Component {
    render() {
        return (
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
            </div>
        )
    }
}

class App2 extends Component {
    render() {
        return (
            <div>
                <Game />

            </div>
        );
    }
}

export default App2;