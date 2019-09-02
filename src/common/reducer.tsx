export interface IAction {
  type: string,
  payload: any,
}

export interface IHandlers {
  [key: string]: (state: any, payload: any) => any
}

export default (initialState: any, handlers: IHandlers) => {
  return function reducer(state = initialState, action: IAction) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action.payload);
    } else {
      return state
    }
  }
}
