import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SET_TODOS, DEL_TODOS } from './Store/action';

function Todos(props) {
  const [todo, setTodo] = useState('');
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => handleTodo(props, setTodo, todo)}
      >Add Todos
      </button>
      <button
        onClick={props.handleDeleteTodos}
      >Delete Todos
      </button>
      <ul>
        {props.todos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function handleTodo(props, setTodo, todo) {
  props.handleSetTodos(todo);
  setTodo('');
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSetTodos(todos) {
      const action = { type: SET_TODOS, todos: todos };
      dispatch(action);
    },
    handleDeleteTodos() {
      const action = { type: DEL_TODOS };
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);