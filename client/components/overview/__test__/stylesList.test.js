import React from 'react'
import {render, screen} from '@testing-library/react'
import StylesList from '../subcomponents/StylesList';
import StylesExample from '../product_styles_example.json';

const { queryByTestId } = render(<StylesList stylesList={StylesExample.results} />);

/* TESTS TO INCLUDE:
 * - shows only one selected style
 * - only one select is selected
*/

test('Style module should render the list of styles', () => {
  expect(screen.findByTestId('StylesList')).toBeTruthy();
});

xtest('Should display a default style', () => {
  expect().toBeTruthy();
});

xtest('Should update selected style based on user\'s input', () => {
  expect().toBeTruthy();
});

describe('Tests using sample data from data dump', () => {

  it('Should render all styles for selected product', async () => {
    render(<StylesList stylesList={StylesExample.results} />);
    const items = await screen.findAllByTestId('style-thumbnail');
    expect(items).toHaveLength(6);
    // expect(items).toBeTruthy(); // can remove
    // expect(items).not.toHaveLength(0); // can remove
  });

});

