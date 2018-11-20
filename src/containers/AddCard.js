import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';
const AddCard = ({ dispatch, listID }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addCard(input.value, listID));
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default connect()(AddCard);
