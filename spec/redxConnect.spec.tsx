import * as React from 'react';
import {Provider} from '../src/index';
import * as PropTypes from 'prop-types';

import * as renderer from 'react-test-renderer';

const Welcome = (props, {store}) => {
 return <h1>Hello, {store.name}</h1>;
}
Welcome.contextTypes = {
  store: PropTypes.object
}
console.log(renderer)
test('Link changes the class when hovered', () => {
  const mockObj = {
    name: "Andy"
  }
  const component = renderer.create(
    <Provider store={mockObj} >
      <Welcome />
    </Provider>
    );
    let tree = component.toJSON();
     expect(tree).toMatchSnapshot();
});
