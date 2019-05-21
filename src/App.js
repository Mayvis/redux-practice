import React from 'react';
import store from './Store';
import './App.css';
import Counter from './Counter';
import InputMirror from './InputMirror';
import RepoSearch from './RepoSearch';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <Counter store={store}/>
      <InputMirror store={store}/>
      <RepoSearch store={store}/>
      <Todos store={store}/>
    </div>
  );
}

export default App;
