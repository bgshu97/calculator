import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = { screen: 'Welcome to the Calculator App!' };
    }

    render() {
        return (
            <React.Fragment>
                <div className="HelloWorld">
                    {this.state.screen}
                    <br />
                    <button onClick={() => this.inputNumber(0)}>0</button>
                    <button onClick={() => this.inputNumber(1)}>1</button>
                    <button onClick={() => this.inputNumber(2)}>2</button>
                    <button onClick={() => this.inputNumber(3)}>3</button>
                    <button onClick={() => this.inputNumber(4)}>4</button>
                    <button onClick={() => this.inputNumber(5)}>5</button>
                    <button onClick={() => this.inputNumber(6)}>6</button>
                    <button onClick={() => this.inputNumber(7)}>7</button>
                    <button onClick={() => this.inputNumber(8)}>8</button>
                    <button onClick={() => this.inputNumber(9)}>9</button>
                    <button onClick={() => this.inputCommand('+')}>+</button>
                    <button onClick={() => this.inputCommand('-')}>-</button>
                    <button onClick={() => this.inputCommand('*')}>*</button>
                    <button onClick={() => this.inputCommand('/')}>/</button>
                    <button onClick={() => this.executeCommand()}>=</button>
                    <button onClick={() => this.clearCommand()}>c</button>
                    <br />
                    {this.state.result}
                </div>
            </React.Fragment>
        );
    }

    inputNumber(number) {
        if (this.state.command) {
            if (this.state.param2) {
                this.setState({ param2: "" + this.state.param2 + number });
            } else {
                this.setState({ param2: number });
            }
        } else {
            if (this.state.param1) {
                this.setState({ param1: "" + this.state.param1 + number });
            } else {
                this.setState({ param1: number });
            }
        }
    }

    inputCommand(command) {
        this.setState({ command: command })
    }

    executeCommand() {
        if (this.state.command === '+') {
            this.setState({ result: parseInt(this.state.param1) + parseInt(this.state.param2) });
        }
        else if (this.state.command === '-') {
            this.setState({ result: parseInt(this.state.param1) - parseInt(this.state.param2) });
        }
        else if (this.state.command === '*') {
            this.setState({ result: parseInt(this.state.param1) * parseInt(this.state.param2) });
        }
        else if (this.state.command === '/') {
            this.setState({ result: parseInt(this.state.param1) / parseInt(this.state.param2) });
        }
    }

    clearCommand() {
        console.log(this.state);
        this.setState({ command: '' });
        console.log(this.state);
    }
}

export default HelloWorld;