const uuidv1 = require('uuid/v1');

export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export const addList = text => ({
  type: ADD_LIST,
  text: text,
  listID: uuidv1()
});

export const deleteList = listID => ({
  type: DELETE_LIST,
  listID: listID
});
