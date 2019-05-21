import * as ActionType from '../action';

const initialState = {
  count: 3,
};

const CounterReducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default CounterReducer;
