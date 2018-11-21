import React from 'react';
import './ListSettings.css';

const ListSettings = ({ listID, deleteList }) => {
  return (
    <div className='list-settings'>
      <button className='delete-list-bttn' onClick={() => deleteList(listID)}>
        Remove
      </button>
    </div>
  );
};

export default ListSettings;
