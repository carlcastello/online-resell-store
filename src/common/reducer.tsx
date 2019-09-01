export interface IStore {
  
}

export interface IAction {
  type: string,
  payload: any,
}

export interface IHandlers {
  [key: string]: any
}

export default (initialState: IStore, handlers: IHandlers) => {
  return function reducer(state = initialState, action: IAction) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
  