import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../../actions/index';

import './AddList.css';

const AddList = ({ dispatch }) => {
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
          dispatch(addList(input.value));
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

export default connect()(AddList);
