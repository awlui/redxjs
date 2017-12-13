const compose = (...fns) => (...args) => {
  return fns.slice(0, -1).reduceRight((res, fn) => fn(res), 
    fns[fns.length -1](...args)
  );
};

const applyMiddleware = (...middleware) => {
  return (createStore) => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error('No dispatching allowed during middleware construction');
    }
    let chain = [];
  let middlewareAPI = {
    getState: store.getState,
    dispatch: (...args) => dispatch(...args)
  }
  chain = middleware.map(middleware => middleware(middlewareAPI));
  dispatch = compose(...chain)(store.dispatch)

  return {
    ...store, 
    dispatch
  }
  }
}

export {
  applyMiddleware
}