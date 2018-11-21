const uuidv1 = require('uuid/v1');

export const ADD_CARD = 'ADD_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const MOVE_CARD = ' MOVE_CARD';

export const addCard = (text, listID) => ({
  type: ADD_CARD,
  id: uuidv1(),
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

export const moveCard = (id, listID) => ({
  type: MOVE_CARD,
  id: id,
  listID: listID
});
