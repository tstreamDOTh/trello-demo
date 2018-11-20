import React from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/index';
const DeleteCard = ({ dispatch, id }) => {
  return <button onClick={() => dispatch(deleteCard(id))}>Delete Card</button>;
};

export default connect()(DeleteCard);
