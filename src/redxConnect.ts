import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Observable, Subject, Subscription } from 'rxjs/Rx';

import { iStateTree, iContext, iRedxStore } from './interfaces';
const noop = function(dummyFunction: Function): void {}

export const connect = (mapState = noop, mapActions = noop) => {
  if (mapState === noop && mapActions === noop) {
    return (target: any) => {
      let func: any = function(props: any, { store }){
        return React.createElement(target, {
          ...props,
          dispatch: store.dispatch
        })
      }
      func.contextTypes = {
        store: PropTypes.object
      }
      return func;
    }
  }
  return (target: any) => (
    _connect(mapState, mapActions, target)
  );
}


function _connect(mapState: Function, mapActions: Function, target: any) {
  class Connect extends React.Component<any, any> {
    context: iContext;
    private unsubObj: Subscription;
    private _store: any;
    static contextTypes = {
      store: PropTypes.object
    }

     componentDidMount() {
      const { store } = this.context;
      this.unsubObj = store.subscribe(() => {
        this.forceUpdate();
      });
    }
     componentWillUnmount() {
       this.unsubObj.unsubscribe();

    }
     render() {
      const {store} = this.context;
      const state = store.getState();
      const props = this.props;
      const {dispatch} = store;
      return React.createElement(target,
        {
          ...mapState(state),
          ...mapActions(dispatch),
          ...props
        }
      );
    }

  }
  // Connect.contextTypes = {
  //   store: PropTypes.object
  // }

  return Connect;
}
