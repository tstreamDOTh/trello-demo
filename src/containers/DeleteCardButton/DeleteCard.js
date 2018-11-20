import React from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DeleteCard.css';

const DeleteCard = ({ dispatch, id }) => {
  return (
    <button
      className='delete-card-bttn'
      onClick={() => dispatch(deleteCard(id))}
    >
      Remove
    </button>
  );
};

export default connect()(DeleteCard);
