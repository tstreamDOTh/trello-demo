import { ADD_LIST } from '../actions';

const lists = (state = [{ listID: 0, text: 'Kubric.io' }], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...state,
        {
          listID: action.listID,
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default lists;
