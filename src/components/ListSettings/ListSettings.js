import React from 'react';
import './ListSettings.css';

const ListSettings = ({ listID, updateList, deleteList }) => {
  let input;
  return (
    <div className='list-settings'>
      <form
        className='update-list'
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          updateList(listID, input.value);
          input.value = '';
        }}
      >
        <input
          className='input-box'
          ref={node => (input = node)}
          placeholder=' Enter the new list name'
        />
        <button className='update-bttn'>Update </button>
      </form>

      <button className='delete-list-bttn' onClick={() => deleteList(listID)}>
        Remove
      </button>
    </div>
  );
};

export default ListSettings;
