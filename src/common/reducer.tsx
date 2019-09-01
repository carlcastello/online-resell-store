import { IStore, IAction, IHandlers } from '../types';

export default (initialState: IStore, handlers: IHandlers) => {
  return function reducer(state = initialState, action: IAction) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
  