import React from 'react';

import './CardAdder.css';

const CardAdder = ({ addCard, listID }) => {
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
          addCard(input.value, listID);
          input.value = '';
        }}
      >
        <input
          className='input-box'
          ref={node => (input = node)}
          placeholder='Add another Card'
        />
        <button className='add-bttn' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default CardAdder;
