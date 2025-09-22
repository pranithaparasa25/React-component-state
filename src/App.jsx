import React from 'react';
import Counter from './Counter';

function App() {
  function abc(c){
    alert(c)
  }
  return (
    <div className='border border-2 border-danger p-3 m-2'>
      <h1>App Component</h1>
      <Counter a={100} b={5} s={abc}></Counter>
      <Counter a={200} b={10} s={abc}></Counter>
    </div>
  );
}

export default App;