import React from 'react';
import Counter from './Counter';
import './App.css';
import store from './Store';

function App() {
  return (
    <div className="App">
      <Counter store={store}/>
    </div>
  );
}

export default App;
