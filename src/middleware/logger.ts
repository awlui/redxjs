const logger = (store) => (next) => (action) => {
  console.log('dispatching action', action);
  let result = next(action);
  console.log('state after action', store.getState());
  return result;
}

export {
  logger
}