import React from 'react';
import './App.css';
import CounterStateHook from './components/CounterStateHook';
import CounterStateClass from './components/CounterStateClass';

function App() {



  return (
    <div className="App">
      <h1>React Hooks</h1>
      <CounterStateHook/>
      <br />
      <CounterStateClass/>
    </div>
  );
}

export default App;
