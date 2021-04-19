import React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../../../App';

const { queryByTestId } = render(<App />);

test('Overview shows the welcome message placeholder', () => {
  expect(queryByTestId(/Overview/)).toBeTruthy();
  expect(screen.getByText('Product Overview Section:')).toBeTruthy();
});

test('Overview should render the Image Gallery module', () => {
  expect(screen.findByTestId(/Gallery/)).toBeTruthy();
});

test('Overview should render the Product Information module', () => {
  expect(screen.findByTestId(/Information/)).toBeTruthy();
});

test('Overview should render the Style Selector module', () => {
  expect(screen.findByTestId(/StylesList/)).toBeTruthy();
});

test('Overview should render the Add to Cart module', () => {
  expect(screen.findByTestId(/Cart/)).toBeTruthy();
});

// test('Test', () => { /* assertions */ }); // test template
