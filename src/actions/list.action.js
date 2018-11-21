const uuidv1 = require('uuid/v1');

export const ADD_LIST = 'ADD_LIST';

export const addList = text => ({
  type: ADD_LIST,
  text: text,
  listID: uuidv1()
});
