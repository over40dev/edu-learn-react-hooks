import React from 'react';
import './App.css';
// import CounterStateHook from './components/CounterStateHook';
// import CounterStateClass from './components/CounterStateClass';
import CounterEffectHook from './components/CounterEffectHook';
import CounterEffectClass from './components/CounterEffectClass';

function App() {
  


  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>Component Lifecycle</h2>
      <CounterEffectHook/>
      <br />
      <CounterEffectClass/>
    </div>
  );
}

export default App;
