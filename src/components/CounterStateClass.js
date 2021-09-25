import React, {Component} from 'react';

export default class CounterStateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: {
        name: 'count2',
        value: 0,
      },
    };
  }

  increment() {
    this.setState({
      count1: this.state.count1 + 1,
      count2: {value: this.state.count2.value + 1},
    });
  }

  decrement() {
    this.setState({
      count1: this.state.count1 - 1,
      count2: {value: this.state.count2.value - 1},
    });
  }

  render() {
    console.log(this);
    return (
      <div>
        <h2>State Class</h2>
        <h3>Count1: {this.state.count1}</h3>
        <h3>Count2: {this.state.count2.value}</h3>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
      </div>
    );
  }
}
