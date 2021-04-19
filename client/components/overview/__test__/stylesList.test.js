import React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../../../App';

const { queryByTestId } = render(<App />);

test('Style module should render the Add to Cart button', () => {
  expect(screen.findByTestId('btnAddToCart')).toBeTruthy();
});

test('Style module should render the Star button', () => {
  expect(screen.findByTestId('btnStar')).toBeTruthy();
});

// test('Test', () => { /* assertions */ }); // test template
