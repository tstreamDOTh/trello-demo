let nextCardId = 0;
let nextListId = 0;

export const ADD_CARD = 'ADD_CARD';
export const ADD_LIST = 'ADD_LIST';

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
