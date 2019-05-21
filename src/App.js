import React from 'react';
import './App.css';
import Counter from './Counter';
import InputMirror from './InputMirror';
import store from './Store';

function App() {
  return (
    <div className="App">
      <Counter store={store}/>
      <InputMirror store={store}/>
    </div>
  );
}

export default App;
