import { createStore } from 'redux';

const initialState = {
  count: 3,
  inputValue: '',
  repos: [],
  searchInput: '',
  todos: []
};

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    case 'INPUT_CHANGED':
      return {
        ...state,
        inputValue: action.text
      };
    case 'SEARCH_INPUT':
      return {
        ...state,
        searchInput: action.search
      };
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.repos
      };
    case 'SET_TODOS':
      return {
        ...state,
        todos: state.todos.concat(action.todos)
      };
    case 'DEL_TODOS':
      const cloneTodo = [...state.todos];
      const updateTodo = cloneTodo.splice(1);
      return {
        ...state,
        todos: updateTodo
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
