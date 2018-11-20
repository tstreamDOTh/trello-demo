import React from 'react';
import Card from '../Card/Card.react';
import './List.css';
import AddCard from '../../containers/AddCard';
const List = ({ text, cards, listID }) => (
  <div className='card-list-container'>
    {text}
    {cards.map(card => (
      <Card text={card.text} key={card.id} />
    ))}

    <AddCard listID={listID} />
  </div>
);

export default List;
