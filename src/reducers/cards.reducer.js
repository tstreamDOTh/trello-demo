import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  MOVE_CARD,
  DELETE_LIST
} from '../actions';
import { request } from 'http';

const cards = (
  state = [{ id: 0, listID: 0, text: 'My first awesome assignment! 🎉' }],
  action
) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        {
          id: action.id,
          listID: action.listID,
          text: action.text
        }
      ];

    case UPDATE_CARD:
      return state.map(card =>
        card.id === action.id ? { ...card, text: action.text } : card
      );

    case DELETE_CARD:
      return state.filter(card => card.id !== action.id);

    case MOVE_CARD:
      return state.map(card =>
        card.id === action.id ? { ...card, listID: action.listID } : card
      );

    case DELETE_LIST:
      return state.filter(card => card.listID !== action.listID);
    default:
      return state;
  }
};

export default cards;
