export interface iStateTree {
  [key: string]: Object
}


export interface iReducerCollection {
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

export interface iSubscribe {
  (value: iStateTree): void
}

export interface iReducer {
  (state: iStateTree, action: iDerivedAction): iStateTree
}