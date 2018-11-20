import React from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../../actions/index';

import './UpdateCard.css';

const UpdateCard = ({ dispatch, id }) => {
  let input;

  return (
    <div>
      <form
        className='update-card'
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(updateCard(id, input.value));
          input.value = '';
        }}
      >
        <input className='input-box' ref={node => (input = node)} />
        <button className='update-bttn'>Update Card</button>
      </form>
    </div>
  );
};

export default connect()(UpdateCard);
