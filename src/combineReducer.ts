import {
  iReducerCollection,
  iReducer,
  iStateTree
} from './interfaces';
const combineReducer = (reducers: iReducerCollection) : iReducer => {
  return (state: iStateTree = {}, action: {type: string}) => {
    return Object.keys(reducers).reduce(
      function(nextState: iStateTree, key: string) {
        nextState[key] = reducers[key](
          state[key],
          action
          );
        return nextState;
      }, {}
      )
  }
}

export {
  combineReducer
}