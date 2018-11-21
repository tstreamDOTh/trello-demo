export const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('trelloDemoState', JSON.stringify(getState()));
    return result;
  };
};

export const reHydrateStore = () => {
  if (localStorage.getItem('trelloDemoState') !== null) {
    return JSON.parse(localStorage.getItem('trelloDemoState'));
  }
};
