import React, { Component } from 'react';
import Board from './components/Board/Board.react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const cards = [
  { text: 'card1', listID: '1' },
  { text: 'card2', listID: '1' },
  { text: 'card3', listID: '1' },
  { text: 'card4', listID: '2' },
  { text: 'card5', listID: '2' },
  { text: 'card6', listID: '2' },
  { text: 'card7', listID: '2' },
  { text: 'card8', listID: '3' },
  { text: 'card9', listID: '3' }
];

const lists = [
  { text: 'list1', listID: '1' },
  { text: 'list2', listID: '2' },
  { text: 'list3', listID: '3' }
];

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div>
        <Board cards={cards} lists={lists} cards={cards} />
      </div>
    );
  }
}

export default App;
