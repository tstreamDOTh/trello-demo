import React from 'react';
import './Card.css';
import DeleteCard from '../../containers/DeleteCardButton/DeleteCard';
import UpdateCard from '../../containers/UpdateCardSection/UpdateCard';

const Card = ({ text, id }) => (
  <div className='card'>
    <DeleteCard id={id} />
    <p className='card-text'>{text}</p>
    <UpdateCard id={id} />
  </div>
);

export default Card;
