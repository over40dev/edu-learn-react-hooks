import {useState} from 'react';

function CounterStateHook() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState({name: 'count2', value: 0});

  function increment() {
    setCount1(count1 + 1);
    setCount2({...count2, value: count2.value + 1});
  }

  function decrement() {
    setCount1(count1 - 1);
    setCount2({...count2, value: count2.value - 1});
  }

  return (
    <div>
      <h2>State Hooks</h2>
      <h3>Count1: {count1}</h3>
      <h3>Count2: {count2.value}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterStateHook;
