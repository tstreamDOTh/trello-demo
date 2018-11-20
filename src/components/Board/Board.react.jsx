import React from 'react';
import List from '../List/List.react';
import './Board.css';

const Board = ({ lists, cards, deleteCard }) => (
  <div className='board-container'>
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
  </div>
);

export default Board;
