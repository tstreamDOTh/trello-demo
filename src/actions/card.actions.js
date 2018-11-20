let nextCardId = 1;

export const ADD_CARD = 'ADD_CARD';

export const UPDATE_CARD = 'UPDATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const addCard = (text, listID) => ({
  type: ADD_CARD,
  id: nextCardId++,
  text: text,
  listID: listID
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
