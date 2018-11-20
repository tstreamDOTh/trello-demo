import React from 'react';
import './Card.css';
import UpdateCard from '../../containers/UpdateCard';
import DeleteCard from '../../containers/DeleteCard';

const Card = ({ text, id }) => (
  <div className='card'>
    <p className='card-text'>{text}</p>
    <DeleteCard id={id} />
    <UpdateCard id={id} />
  </div>
);

export default Card;
