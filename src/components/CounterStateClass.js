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

  // option 1 - include as a class method
  increment() {
    this.setState((previousState) => ({
      count1: previousState.count1 + 1,
      count2: {
        value: previousState.count2.value + 1,
      },
    }));
  }

  // option 2 - include as a property set to an arrow function
  decrement = () => {
    this.setState((previousState) => ({
      count1: previousState.count1 - 1,
      count2: {value: previousState.count2.value - 1},
    }));
  }

  render() {
    return (
      <div>
        <h2>State Class</h2>
        <h3>Count1: {this.state.count1}</h3>
        <h3>Count2: {this.state.count2.value}</h3>
        {/* option 1 - call class method using arrow function */}
        <button onClick={() => this.increment()}>+</button>
        {/* option 2 - call class property set to a method by referencing method by name*/}
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
