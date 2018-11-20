import React from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/index';

import './AddCard.css';

const AddCard = ({ dispatch, listID }) => {
  let input;

  return (
    <div>
      <form
        className='add-card'
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addCard(input.value, listID));
          input.value = '';
        }}
      >
        <input className='input-box' ref={node => (input = node)} />
        <button className='add-bttn' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default connect()(AddCard);
