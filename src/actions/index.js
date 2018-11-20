let nextCardId = 1;
let nextListId = 1;

export const ADD_CARD = 'ADD_CARD';
export const ADD_LIST = 'ADD_LIST';

export const UPDATE_CARD = 'UPDATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const addCard = (text, listID) => ({
  type: ADD_CARD,
  id: nextCardId++,
  text: text,
  listID: listID
});

export const addList = text => ({
  type: ADD_LIST,
  text: text,
  listID: nextListId++
});

export const updateCard = (id, text) => ({
  type: UPDATE_CARD,
  text: text,
  id: id
});

export const deleteCard = id => ({
  type: DELETE_CARD,
  id: id
});
