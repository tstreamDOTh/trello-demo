import React from 'react';
import CardActionInjector from '../../containers/CardActionInjector';
import './CardSettings.css';

const CardSettings = ({ id, deleteCard, updateCard }) => {
  let input;
  return (
    <div className='card-settings'>
      <form
        className='update-card'
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          updateCard(id, input.value);
          input.value = '';
        }}
      >
        <input className='input-box' ref={node => (input = node)} />
        <button className='update-bttn'>Update Card</button>
      </form>

      <button className='delete-card-bttn' onClick={() => deleteCard(id)}>
        Remove
      </button>
    </div>
  );
};

export default CardSettings;
