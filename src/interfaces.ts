export interface iStateTree {
  [key: string]: Object
}


export interface iReducerObj {
  [key: string]: Function
}

export interface iAction {
  type: string
}

export interface iDerivedAction extends iAction {
  value: any
}

export interface iThunk {
  (dispatch: Function): void
}

export interface iObserver {
  next: Function,
  error?: Function,
  complete?: Function
}
