import { ADD_LIST, DELETE_LIST, UPDATE_LIST } from '../actions';

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

    case DELETE_LIST:
      return state.filter(list => list.listID !== action.listID);

    case UPDATE_LIST:
      return state.map(list =>
        list.listID === action.listID ? { ...list, text: action.text } : list
      );

    default:
      return state;
  }
};

export default lists;
