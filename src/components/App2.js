import React, { Component } from 'react';


const Stars = function (props) {
    return (
        <div>
            ...
        </div>
    );
}

const Button = function (props) {
    return (
        <div>
            ...
        </div>
    );
}

const Answer = function (props) {
    return (
        <div>
            ...
        </div>
    );
}

class Game extends Component {
    render() {
        return (
            <div>
                <h3>Play Nine</h3>
            </div>
        )
    }
}

class App2 extends Component {
    render() {
        return (
            <div>
                <Game />
                <Stars />
            </div>
        );
    }
}

export default App2;