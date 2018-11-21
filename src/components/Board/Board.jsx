import React from 'react';
import List from '../List/List';
import './Board.css';
import ListSubscription from '../../containers/ListSubscription';
import ListAdder from '../ListAdder/ListAdder';

const ListAdderWithSubscription = ListSubscription(ListAdder);

const Board = ({ lists, cards, deleteCard }) => (
  <div className='board-container'>
    <div className='lists'>
      {lists.map(list => {
        const filteredCards = cards.filter(card => card.listID === list.listID);
        return (
          <List
            text={list.text}
            cards={filteredCards}
            key={list.listID}
            listID={list.listID}
            deleteCard={deleteCard}
          />
        );
      })}
      <ListAdderWithSubscription />
    </div>
  </div>
);

export default Board;
