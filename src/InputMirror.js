import React from 'react';
import { connect } from 'react-redux';

function InputMirror(props) {
  return (
    <div>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.onChangeInput}
      />
      <p>{props.inputValue}</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    inputValue: state.main.inputValue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeInput: (e) => {
      console.log('Changed', e.target.value);
      const action = { type: 'INPUT_CHANGED', text: e.target.value };
      dispatch(action)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMirror);