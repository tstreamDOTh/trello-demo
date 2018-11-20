import React from 'react';
import Card from '../Card/Card.react';
import './List.css';
const List = ({ text, cards }) => (
  <div className='card-list-container'>
    {text}
    {cards.map(card => (
      <Card text={card.text} />
    ))}
  </div>
);

export default List;
