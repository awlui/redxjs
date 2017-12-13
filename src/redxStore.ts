import { Observable, Subject } from 'rxjs/Rx';
import { iStateTree, iObserver, iDerivedAction, iThunk, iSubscribe, iReducer, iCountState } from './interfaces';

const noop = function() {}

export let createStore = function(reducer: Function, initialState?: (iStateTree | Function), applyMiddleware?: Function) {
  if (typeof initialState === 'function') {
    let temp = applyMiddleware;
    applyMiddleware = initialState;
   initialState = temp;
  }
  if (applyMiddleware) {
    return applyMiddleware(createStore)(reducer, initialState);
  }
  let store = new RedxjsStore();
  store.initialState = initialState;
  store.setReducer(reducer);
  store.init();
  return store;
}
class RedxjsStore {
    private _dispatch: Function;
    private _timeTravel: Boolean;
    private _ttCarousel: Array<iStateTree> = [];
    private rootReducer: Function;
    private _obs: Observable<iStateTree>;
    private _currentState: iStateTree = {};
    private _unsubObj: { unsubscribe: Function };

    constructor({ timeTravel = false} = {}) {
      this._timeTravel = timeTravel;
      let subject = new Subject<iStateTree>();
      this._obs = subject;
    }
    public get initialState() {
      return this._currentState;
    }
    public set initialState(state: iStateTree) {
      this._currentState = state;
    }
    public get Carousel() {
      return this._ttCarousel;
    };
    public getState = () => {
      return this._currentState;
    }
    public init(): void {
      this._unsubObj = this.genActionObservable();
    }
    public unsubscribe() {
      this._unsubObj.unsubscribe();
    }
    private genActionObservable() {
        var actionObservable = Observable.create((obs: iObserver) => {
          this._dispatch = obs.next.bind(obs); // Actions flow through this callback
        });

        return actionObservable
            .startWith('Initiate')
            .scan((state: iStateTree, action: iDerivedAction) => {
                let newState = this.rootReducer(state, action);
                this._currentState = newState;
                if (this._timeTravel) {
                  this._ttCarousel.push(newState);
                }
                return newState;
            }, this._currentState)
            .subscribe(this._obs);
    }




    public subscribe = (cb: iSubscribe) => {
      return this._obs.subscribe(cb);
    }

    public setReducer(reducer: Function): void {
      this.rootReducer = reducer;
    }
     //Dispatch function will either take an action or a function that accepts a dispatch function
     //Will eventually convert to a redxjs to a middleware implementation
    public dispatch = (action: (iDerivedAction | Function)) : void =>
     {
      if (typeof action === "function") {
        // Thunk logic
        action(this.dispatch);
        return;
      }
      if (typeof action === undefined) {
        return;
      }
      this._dispatch(action);
    }
}
