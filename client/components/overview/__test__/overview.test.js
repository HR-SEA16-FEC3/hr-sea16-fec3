import React from 'react'
import {render, screen} from '@testing-library/react'
import Overview from '../Overview';

const { queryByTestId } = render(<Overview />);

test('Overview module is rendered', () => {
  expect(queryByTestId(/Overview/)).toBeTruthy();
  expect(screen.findByTestId(/Gallery/)).toBeTruthy();
  expect(screen.findByTestId(/Information/)).toBeTruthy();
  expect(screen.findByTestId(/StylesList/)).toBeTruthy();
  expect(screen.findByTestId(/Cart/)).toBeTruthy();
});

xtest('Overview renders the Image Gallery module', () => {
  expect(screen.findByTestId(/Gallery/)).toBeTruthy();
});

xtest('Overview renders the Product Information module', () => {
  expect(screen.findByTestId(/Information/)).toBeTruthy();
});

xtest('Overview renders the Style Selector module', () => {
  expect(screen.findByTestId(/StylesList/)).toBeTruthy();
});

xtest('Overview renders the Add to Cart module', () => {
  expect(screen.findByTestId(/Cart/)).toBeTruthy();
});

// test('Test', () => { /* assertions */ }); // test template
