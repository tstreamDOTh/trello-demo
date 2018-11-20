import React from 'react';
import Card from '../Card/Card.react';
import './List.css';
import AddCard from '../../containers/AddCardSection/AddCard';
const List = ({ text, cards, listID, deleteCard }) => (
  <div className='card-list-container'>
    {text}
    {cards.map(card => (
      <Card
        text={card.text}
        id={card.id}
        deleteCard={deleteCard}
        key={card.id}
      />
    ))}

    <AddCard listID={listID} />
  </div>
);

export default List;
