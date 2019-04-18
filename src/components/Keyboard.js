import React from 'react'

class Keyboard extends React.Component {
  render () {
    return (
      <div>
        <button onClick={() => this.props.onKeyPress(this.props.keys[0])}>{this.props.keys[0]}</button>
        <button onClick={() => this.props.onKeyPress(this.props.keys[1])}>{this.props.keys[1]}</button>
        <button onClick={() => this.props.onKeyPress(this.props.keys[2])}>{this.props.keys[2]}</button>
        <button onClick={() => this.props.onSignKey('+')}>+</button>
        <br />

        <button onClick={() => this.props.onKeyPress(this.props.keys[3])}>{this.props.keys[3]}</button>
        <button onClick={() => this.props.onKeyPress(this.props.keys[4])}>{this.props.keys[4]}</button>
        <button onClick={() => this.props.onKeyPress(this.props.keys[5])}>{this.props.keys[5]}</button>
        <button onClick={() => this.props.onSignKey('-')}>-</button>
        <br />

        <button onClick={() => this.props.onKeyPress(this.props.keys[6])}>{this.props.keys[6]}</button>
        <button onClick={() => this.props.onKeyPress(this.props.keys[7])}>{this.props.keys[7]}</button>
        <button onClick={() => this.props.onKeyPress(this.props.keys[8])}>{this.props.keys[8]}</button>
        <button onClick={() => this.props.onSignKey('*')}>x</button>
        <br />

        <button onClick={() => this.props.onKeyPress(this.props.keys[9])}>{this.props.keys[9]}</button>
        <button onClick={() => this.props.onKeyPress('.')}>.</button>
        <button onClick={() => this.props.onEqualsKey()}>=</button>
        <button onClick={() => this.props.onSignKey('/')}>/</button>
        <br />

        <button onClick={() => this.props.onClearKey()}>CLEAR</button>
      </div>
    )
  }
}
