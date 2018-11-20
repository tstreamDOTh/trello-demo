import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions/index';
const AddList = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addList(input.value));
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type='submit'>Add New List +</button>
      </form>
    </div>
  );
};

export default connect()(AddList);
