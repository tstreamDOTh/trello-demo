import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import BoardContainer from './containers/BoardContainer';
import './App.css';
import { reHydrateStore, localStorageMiddleware } from './localStorage';

const store = createStore(
  rootReducer,
  reHydrateStore(),
  applyMiddleware(localStorageMiddleware)
);

class App extends Component {
  render() {
    return [
      <h1>
        Trello<i>like</i>
      </h1>,
      <Provider store={store}>
        <BoardContainer />
      </Provider>
    ];
  }
}

export default App;
