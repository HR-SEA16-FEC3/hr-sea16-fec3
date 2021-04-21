import React from 'react';
import ReactDOM from 'react-dom';
import QandA from '../Q&A';
import { render } from '@testing-library/react';

const { queryByTestId } = render(<QandA />);

test('Q&A component should not crash', () => {
  expect(queryByTestId).toBeTruthy();
});
