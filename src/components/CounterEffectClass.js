import React, {Component} from 'react';

export default class CounterEffectClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }

  increment = () => {
    this.setState((previousState) => ({
      timer: previousState.timer + 1,
    }));
  };

  decrement = () => {
    this.setState((previousState) => ({
      timer: previousState.timer - 1,
    }));
  };

  render() {
    return (
      <div>
        <h3>Class Component - Lifecycle Methods</h3>
        <button onClick={this.decrement} style={{marginRight: '20px'}}>
          -
        </button>
        <button style={{fontSize: '24px'}}>{this.state.timer}</button>
        <button onClick={this.increment} style={{marginLeft: '20px'}}>
          +
        </button>
      </div>
    );
  }
}
