import React from 'react';
import List from '../List/List.react';
import './Board.css';

const Board = ({ lists, cards }) => (
  <div className='board-container'>
    {lists.map(list => {
      const filteredCards = cards.filter(card => card.listID === list.listID);
      return <List text={list.text} cards={filteredCards} />;
    })}
  </div>
);

export default Board;
