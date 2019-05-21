import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counter';
import * as ActionType from './action';

const initialState = {
  inputValue: '',
  repos: [],
  searchInput: '',
  todos: []
};

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case ActionType.INPUT_CHANGED:
      return {
        ...state,
        inputValue: action.text
      };
    case ActionType.SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.search
      };
    case ActionType.SET_REPOS:
      return {
        ...state,
        repos: action.repos
      };
    case ActionType.SET_TODOS:
      return {
        ...state,
        todos: state.todos.concat(action.todos)
      };
    case ActionType.DEL_TODOS:
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

const rootReducer = combineReducers({
  main: reducer,
  counter: counterReducer
});

const store = createStore(rootReducer);

export default store;
