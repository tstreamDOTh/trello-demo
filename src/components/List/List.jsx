import React from 'react';
import Card from '../Card/Card';
import './List.css';
import CardSubscription from '../../containers/CardSubscription';
import CardAdder from '../CardAdder/CardAdder';

const AddCardWithSubscription = CardSubscription(CardAdder);
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

    <AddCardWithSubscription listID={listID} />
  </div>
);

export default List;
