import { ADD_CARD } from '../actions';

const cards = (state = [], action) => {
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
