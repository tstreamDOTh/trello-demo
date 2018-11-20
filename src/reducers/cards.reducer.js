import { ADD_CARD } from '../actions';

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
    default:
      return state;
  }
};

export default cards;
