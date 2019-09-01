export interface IStore {
  
}

export interface IAction {
  type: string,
  payload: any,
}

export interface IHandlers {
  [key: string]: any
}