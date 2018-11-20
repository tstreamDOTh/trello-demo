import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import BoardContainer from './containers/BoardContainer';
import AddList from './containers/AddList';
const cards = [
  { text: 'card1', listID: 1, id: 1 },
  { text: 'card2', listID: 1, id: 2 },
  { text: 'card3', listID: 1, id: 3 },
  { text: 'card4', listID: 2, id: 4 },
  { text: 'card5', listID: 2, id: 5 },
  { text: 'card6', listID: 2, id: 6 },
  { text: 'card7', listID: 2, id: 7 },
  { text: 'card8', listID: 3, id: 8 },
  { text: 'card9', listID: 3, id: 9 }
];

const lists = [
  { text: 'list1', listID: 1 },
  { text: 'list2', listID: 2 },
  { text: 'list3', listID: 3 }
];

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AddList />
          <BoardContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
