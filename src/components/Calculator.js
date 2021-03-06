import React from 'react';
import Keyboard from './Keyboard';
import Display from './Display';

import '../css/Calculator.css';

class Calculator extends React.Component {
    state = {
        keys: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 0
        ],
        displayVal: 0,
        previousVal: 0,
        signVal: ''
    }

    handleKeyPress = (val) => {
      let displayVal = this.state.displayVal === 0 ? "" : "" + this.state.displayVal;
      displayVal += val;
      this.setState({ displayVal: displayVal });
    }

    handleClearKey = () => {
        this.setState({ displayVal: 0 });
    }

    handlePlusMinusKey = () => {
      let currentVal = this.state.displayVal;
      currentVal = currentVal > 0 ? -Math.abs(currentVal) : Math.abs(currentVal);
      this.setState({ displayVal: currentVal });
    }

    handleSignKey = (sign) => {
        this.setState({ previousVal: this.state.displayVal, displayVal: 0, signVal: sign });
    }

    handleEqualsKey = () => {
        let pressed = 0;
        switch (this.state.signVal) {
            case "+":
              pressed = parseFloat(this.state.previousVal) + parseFloat(this.state.displayVal);
              break;
            case "-":
              pressed = parseFloat(this.state.previousVal) - parseFloat(this.state.displayVal);
              break;
            case "*":
              pressed = parseFloat(this.state.previousVal) * parseFloat(this.state.displayVal);
              break;
            case "/":
              pressed = parseFloat(this.state.previousVal) / parseFloat(this.state.displayVal);
              break;
            default:
              break;
        }
        this.setState({ displayVal: pressed });
    }

    render() {
        return (
            <div className="calculator">
                <Display val={this.state.displayVal} />
                <Keyboard
                  keys={this.state.keys}
                  onKeyPress={this.handleKeyPress}
                  onClearKey={this.handleClearKey}
                  onSignKey={this.handleSignKey}
                  onEqualsKey={this.handleEqualsKey}
                  onPlusMinusKey={this.handlePlusMinusKey}
                />
            </div>
        )
    }
}

export default Calculator;