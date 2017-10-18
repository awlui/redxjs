import { Observable, Subject } from 'rxjs/Rx';
import { iStateTree, iReducerCollection, iObserver, iDerivedAction, iThunk, iSubscribe, iReducer } from './interfaces';

const noop = function() {}
export class RedxjsStore {
    private _dispatch: Function;
    public _reducerCollection: iReducerCollection;
    private _obs: Observable<iStateTree>;
    public lastState: iStateTree;
    private obsWrapper = {
      subscribe: (cb: iSubscribe) => {
        this._obs.subscribe(cb);
      }
    };
    get obs() {
      return this.obsWrapper;
    }

    constructor() {

    }
    public init() {
      this._obs = this.genActionObservable();
    }
    private genActionObservable() {
        var actionObservable = Observable.create((obs: iObserver) => {
          this._dispatch = obs.next.bind(obs); // Actions flow through this callback
        });

        return actionObservable
                    .startWith('Initiate')
                    .scan((state: iStateTree, action: iDerivedAction) => {
                        let newState = this.combineReducer(this._reducerCollection)(state, action);
                        this.lastState = newState;
                        return newState;
                    }, {});
    }
    // public reducerProto(state = {}, action: iDerivedAction) {
    //   if (action.type === "click") {
    //     return {
    //       ...state, value: action.value
    //     }
    //   } else {
    //     return state;
    //   }
    // }

    private combineReducer(reducers: iReducerCollection) {
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
    public genReducerCollection(reducerCollection: iReducerCollection): void {
      // Combine reducer takes an object of reducers but I collect the reducers as an Array here in order to enforce compile time checking of reducer parameter types
      this._reducerCollection = reducerCollection;
    }
     //Dispatch function will either take an action or a function that accepts a dispatch function
    public dispatch(action: (iDerivedAction | Function))
     {
      if (typeof action === "function") {
        // Thunk logic
        console.log("FUNCTION DISPATCHED")
        return;
      }
      this._dispatch(action);
    }
}
let fun1 = function(state = {}, action: iDerivedAction) {
      if (action.type === "click1") {
        return {
          ...state, value: action.value
        }
      } else {
        return state;
      }
    }
let fun2 = function(state = {}, action: iDerivedAction) {
      if (action.type === "click2") {
        return {
          ...state, value: action.value
        }
      } else {
        return state;
      }
    }
var test = new RedxjsStore()
var k: any = document.querySelector('button.one');
var k2: any = document.querySelector('button.two');
let count1 = 0;
let count2 = 0;
k.addEventListener("click", () => {
  test.dispatch({type: "click1", value: count1 });
  count1++
});
k2.addEventListener("click", () => {
  test.dispatch({type: "click2", value: count2 });
  count2++
});
test.dispatch(noop);

test.genReducerCollection({
  fun1,
  fun2
})
test.init()
test.obs.subscribe((data) => {
  console.log(data);
});


