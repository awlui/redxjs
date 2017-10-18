import { Observable, Subject } from 'rxjs/Rx';
import { iStateTree, iReducerObj, iAction, iObserver, iDerivedAction, iThunk } from './interfaces';

const noop = function() {}
export class RedxjsStore {
    private _dispatch: Function;
    private _obs: Observable<iAction>;
    get obs() {
      return this._obs;
    }

    constructor() {
      this._obs = this.initActions();
    }
    private initActions<T>(name?: T) {
        var actionObservable = Observable.create((obs: iObserver) => {
          this._dispatch = obs.next.bind(obs); // Actions flow through this callback
        });

        return actionObservable
                    // .startWith('Initiate')
                    // .scan((state: iStateTree, action: iDerivedAction) => {
                    //     this.combineReducer()
                    // }, {});
    }
    private combineReducer(reducers: iReducerObj) {
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

var test = new RedxjsStore()

test.obs.subscribe((data: any) => {
  console.log(data)
})


var k: any = document.querySelector('button');

k.addEventListener("click", test.dispatch.bind(test, { type: "domtest", value: 10000}));
test.dispatch(noop);



