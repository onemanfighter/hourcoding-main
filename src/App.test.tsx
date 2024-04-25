import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  expect(screen.getByText('App')).toBeDefined();
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
