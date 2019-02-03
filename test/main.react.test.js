import React from 'react';
import main from './src/Components/Container/main';
import renderer from 'react-test-renderer';

test('main window should be rendered', () => {
  const component = renderer.create(
    <main></main>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});