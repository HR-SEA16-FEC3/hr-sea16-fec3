import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { render } from '@testing-library/react';

test('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App should render All 3 components', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTaestId(/Overview/)).toBeTruthy();
  expect(queryByTestId(/QA/)).toBeTruthy();
  expect(queryByTestId(/Reviews/)).toBeTruthy();
});
