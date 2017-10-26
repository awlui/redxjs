import { Observable, Subject } from 'rxjs/Rx';
import { iStateTree, iReducerCollection, iObserver, iDerivedAction, iThunk, iSubscribe, iReducer, iCountState } from './interfaces';



const noop = function() {}
export class RedxjsStore {
    private _dispatch: Function;
    private _timeTravel: Boolean;
    private _ttCarousel: Array<iStateTree> = [];
    private _reducerCollection: iReducerCollection;
    private _obs: Observable<iStateTree>;
    public lastState: iStateTree;
    private _unsubObj: { unsubscribe: Function };;


    constructor({ timeTravel: timeTravel = false} = {}) {
      this._timeTravel = timeTravel;
      let subject = new Subject();
      this._obs = subject;

    }

    public get Carousel() {
      return this._ttCarousel;
    };
    public getState = () => {
      return this.lastState;
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
                let newState = this.combineReducer(this._reducerCollection)(state, action);
                this.lastState = newState;
                if (this._timeTravel) {
                  this._ttCarousel.push(newState);
                }
                return newState;
            }, {})
            .subscribe(this._obs);
    }

    
    private combineReducer(reducers: iReducerCollection) : iReducer {
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

    public subscribe(cb: iSubscribe) {
      return this._obs.subscribe(cb);
    }

    public genReducerCollection(reducerCollection: iReducerCollection): void {
      // Combine reducer takes an object of reducers but I collect the reducers as an Array here in order to enforce compile time checking of reducer parameter types
      this._reducerCollection = reducerCollection;
    }
     //Dispatch function will either take an action or a function that accepts a dispatch function
    public dispatch(action: (iDerivedAction | Function)) : void
     {
      if (typeof action === "function") {
        // Thunk logic
        console.log("FUNCTION DISPATCHED")
        return;
      }
      this._dispatch(action);
    }
}
// let fun1 = function(state = { count: 0 }, action: iDerivedAction) : iCountState {
//       if (action.type === "click1") {
//         return {
//           count: state.count + 1
//         }
//       } else {
//         return state;
//       }
//     }
// let fun2 = function(state = { count: 0 }, action: iDerivedAction) {
//       if (action.type === "click2") {
//         return {
//           count: state.count + 1
//         }
//       } else {
//         return state;
//       }
//     }
// var test = new RedxjsStore({ timeTravel: true })
// var k: any = document.querySelector('button.one');
// var k2: any = document.querySelector('button.two');

// k.addEventListener("click", () => {
//   let { fun1 } = test.getState();

//   let count1 = fun1.count;
//   test.dispatch({type: "click1", value: count1 });
// });
// k2.addEventListener("click", () => {
//   let { fun2 } = test.getState();


//   let count2 = fun2.count;
//   test.dispatch({type: "click2", value: count2 });
// });
// test.dispatch(noop);

// test.genReducerCollection({
//   fun1,
//   fun2
// })

// test.subscribe((data) => {
//   console.log(test.Carousel);
// });

// var unsub = test.subscribe((data) => {
//   console.log(test.Carousel);
//   console.log("JOOMP");
// });

// test.init()
// setTimeout(() => {
//   test.unsubscribe();
//   console.log("UNSUBBED")
// }, 2000);