import React from 'react';

import './ListAdder.css';

const ListAdder = ({ addList }) => {
  let input;

  return (
    <div>
      <form
        className='add-list'
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addList(input.value);
          input.value = '';
        }}
      >
        <input className='input-box' ref={node => (input = node)} />
        <button className='add-bttn' type='submit'>
          Add New List +
        </button>
      </form>
    </div>
  );
};

export default ListAdder;
