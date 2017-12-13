import * as PropTypes from 'prop-types';
import * as React from 'react';
export class Provider extends React.Component<any,any> {
    static childContextTypes = {
        store: PropTypes.object
    }
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    render() {
        return this.props.children;
    }
}
