import React from 'react';
import '../css/Keyboard.css';

class Keyboard extends React.Component {
  render () {
    return (
      <div className="keyboard">
        <button className="button" onClick={() => this.props.onClearKey()}>C</button>
        <button className="button" onClick={() => this.props.onPlusMinusKey()}>+/-</button>
        <button className="button">%</button>
        <button className="button" onClick={() => this.props.onSignKey('/')}>&divide;</button>
        <br />

        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[6])}>{this.props.keys[6]}</button>
        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[7])}>{this.props.keys[7]}</button>
        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[8])}>{this.props.keys[8]}</button>
        <button className="button" onClick={() => this.props.onSignKey('*')}>x</button>
        <br />

        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[4])}>{this.props.keys[4]}</button>
        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[5])}>{this.props.keys[5]}</button>
        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[6])}>{this.props.keys[6]}</button>
        <button className="button" onClick={() => this.props.onSignKey('-')}>-</button>
        <br />

        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[0])}>{this.props.keys[0]}</button>
        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[1])}>{this.props.keys[1]}</button>
        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[2])}>{this.props.keys[2]}</button>
        <button className="button" onClick={() => this.props.onSignKey('+')}>+</button>
        <br />
        <button className="button" onClick={() => this.props.onKeyPress(this.props.keys[9])}>{this.props.keys[9]}</button>
        <button className="button" onClick={() => this.props.onKeyPress('.')}>.</button>
        <button className="button" onClick={() => this.props.onEqualsKey()}>=</button>
      </div>
    )
  }
}

export default Keyboard;