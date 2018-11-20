import { combineReducers } from 'redux';
import cards from './cards.reducer';
import lists from './lists.reducer';

export default combineReducers({
  cards,
  lists
});
