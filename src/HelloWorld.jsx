import React, { Component } from 'react';
import './HelloWorld.css';
import CalculatorButton from './CalculatorButton';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = { screen: 'Welcome to the Calculator App!' };
    }

    buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    commands = ['+', '-', '*', '/']

    render() {
        return (
            <React.Fragment>
                <div className="HelloWorld">
                    {this.state.screen}
                    <br />
                    {this.buttons.map((button) => 
                        (<CalculatorButton 
                        buttonEvent={() => this.inputNumber(button)}
                        value={button}
                        key={button}/>)
                    )}
                    {this.commands.map((command) => 
                        (<CalculatorButton 
                        buttonEvent={() => this.inputCommand(command)}
                        value={command}
                        key={command}/>)
                    )}
                    <CalculatorButton buttonEvent={() => this.executeCommand()} value='='></CalculatorButton>
                    <CalculatorButton buttonEvent={() => this.clearCommand()} value='c'></CalculatorButton>
                    <br />
                    {this.state.result}
                </div>
            </React.Fragment>
        );
    }

    inputNumber(number) {
        if (this.state.command) {
            if (this.state.param2) {
                this.setState({ param2: "" + this.state.param2 + number, result: "" + this.state.param2 + number });
            } else {
                this.setState({ param2: number, result: number });
            }
        } else {
            if (this.state.param1) {
                this.setState({ param1: "" + this.state.param1 + number, result: "" + this.state.param1 + number });
            } else {
                this.setState({ param1: number, result: number });
            }
        }
    }

    inputCommand(command) {
        this.setState({ command: command });
        if (this.state.param2) {
            this.executeCommand();
        }
    }

    executeCommand() {
        var result;
        if (this.state.command === '+') {
            result = parseInt(this.state.param1) + parseInt(this.state.param2);
        }
        else if (this.state.command === '-') {
            result = parseInt(this.state.param1) - parseInt(this.state.param2);
        }
        else if (this.state.command === '*') {
            result = parseInt(this.state.param1) * parseInt(this.state.param2);
        }
        else if (this.state.command === '/') {
            result = parseInt(this.state.param1) / parseInt(this.state.param2);
        }
        this.setState({ param1: result, param2: '', result: result });
    }

    clearCommand() {
        this.setState({ command: '', param1: '', param2: '', result: '' });
    }
}

export default HelloWorld;