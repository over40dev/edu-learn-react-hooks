import React, {useState} from 'react';

function CounterEffectHook() {
  const [timer, setTimer] = useState(0);

  const increment = () => {
    setTimer(timer + 1);
  };

  const decrement = () => {
    setTimer(timer - 1);
  };

  return (
    <div>
      <h3>Functional Component - useEffect Hook</h3>
      <button onClick={decrement} style={{marginRight: '20px'}}>
        -
      </button>
      <button style={{fontSize: '24px'}}>{timer}</button>
      <button onClick={increment} style={{marginLeft: '20px'}}>
        +
      </button>
    </div>
  );
}

export default CounterEffectHook;
