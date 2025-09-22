import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div className='border border-2 border-success p-3 m-2'>
      <h1>React Component</h1>
      <Counter a={100} b={5}></Counter>
      <Counter a={200} b={10}></Counter>
    </div>
  );
}

export default App;