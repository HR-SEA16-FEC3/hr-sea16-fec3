import React from 'react'
import {render, screen} from '@testing-library/react'
import Overview from '../Overview';

const { queryByTestId } = render(<Overview />);

// test('Overview module should fully render', () => {
//   expect(queryByTestId(/Overview/)).toBeTruthy();
//   expect(screen.findByTestId(/Gallery/)).toBeTruthy();
//   expect(screen.findByTestId(/Information/)).toBeTruthy();
//   expect(screen.findByTestId(/StylesList/)).toBeTruthy();
//   expect(screen.findByTestId(/Cart/)).toBeTruthy();
// });

describe('OVERVIEW BASIC TESTS', () => {

  it('Overview module should render', () => {
    // const { queryByTestId } = render(<Overview />);
    expect(queryByTestId(/Overview/)).toBeTruthy();
  });

  it('Overview renders the Image Gallery module', () => {
    expect(screen.findByTestId(/Gallery/)).toBeTruthy();
  });

  it('Overview renders the Product Information module', () => {
    expect(screen.findByTestId(/Information/)).toBeTruthy();
  });

  it('Overview renders the Style Selector module', () => {
    expect(screen.findByTestId(/StylesList/)).toBeTruthy();
  });

  it('Overview renders the Add to Cart module', () => {
    expect(screen.findByTestId(/Cart/)).toBeTruthy();
  });


});

// Axios-related test: https://www.smashingmagazine.com/2020/07/react-apps-testing-library/

// test('Test', () => { /* assertions */ }); // test template
