import React from 'react';
import { connect } from 'react-redux';

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
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => {
      console.log('click');
      const action = { type: 'INCREMENT' };
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = { type: 'DECREMENT' };
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);