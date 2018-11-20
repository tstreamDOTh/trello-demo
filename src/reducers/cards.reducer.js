import { ADD_CARD, UPDATE_CARD, DELETE_CARD } from '../actions';

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
      var tempState = state.map(card =>
        card.id === action.id ? { ...card, text: action.text } : card
      );
      return tempState;

    case DELETE_CARD:
      var tempState = state.filter(card => card.id !== action.id);
      return tempState;
    default:
      return state;
  }
};

export default cards;
