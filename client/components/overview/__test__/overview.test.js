import React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../../../App';

const { queryByTestId } = render(<App />);

test('Overview shows the welcome message placeholder', () => {
  expect(queryByTestId(/Overview/)).toBeTruthy();
  expect(screen.getByText('Product Overview Section:')).toBeTruthy();
});

test('Overview renders the Image Gallery module', () => {
  expect(screen.findByTestId(/Gallery/)).toBeTruthy();
});

test('Overview renders the Product Information module', () => {
  expect(screen.findByTestId(/Information/)).toBeTruthy();
});

test('Overview renders the Style Selector module', () => {
  expect(screen.findByTestId(/StylesList/)).toBeTruthy();
});

test('Overview renders the Add to Cart module', () => {
  expect(screen.findByTestId(/Cart/)).toBeTruthy();
});

// test('Test', () => { /* assertions */ }); // test template
