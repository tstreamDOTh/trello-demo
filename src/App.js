import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import BoardContainer from './containers/BoardContainer';
import './App.css';
import AddList from './containers/AddListSection/AddList';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='bg'>
          <AddList />
          <BoardContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
