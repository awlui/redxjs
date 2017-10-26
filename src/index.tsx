import { RedxjsStore } from './redxStore';
import {connect} from './redxConnect';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as ReactDOM from 'react-dom';
import { Provider } from './redxProvider';


export { RedxjsStore, Provider, connect };


/*let Foo = (props) => {
    return (
        <div>
            Hi
        </div>

    )
}
let store = new RedxjsStore();

let K = connect({mapState: () => {}})(Foo);

ReactDOM.render(
<Provider store={store}>
    <K />
</Provider>, document.getElementById('root'))

setTimeout(() => {
    ReactDOM.render(
<Provider store={store}>
    <div>
        new
        </div>
</Provider>, document.getElementById('root'))
console.log("YAH")
}, 2000)*/