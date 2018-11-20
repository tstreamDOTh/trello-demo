import React from 'react';
import './Card.css';

const Card = ({ text }) => (
  <div className='card'>
    <p className='card-text'>{text}</p>
  </div>
);

export default Card;
