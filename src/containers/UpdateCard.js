import React from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../actions/index';
const UpdateCard = ({ dispatch, id }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(updateCard(id, input.value));
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type='submit'>Update Card</button>
      </form>
    </div>
  );
};

export default connect()(UpdateCard);
