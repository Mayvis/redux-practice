import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from './Store/action';

function Counter(props) {
  console.log('render', props);
  return (
    <div>
      <h1>I'm a counter!</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
      <button onClick={props.onDecrementClick}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    count: state.counter.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log('click increment');
      const action = { type: INCREMENT };
      dispatch(action);
    },
    onDecrementClick: () => {
      console.log('click decrement');
      const action = { type: DECREMENT };
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);