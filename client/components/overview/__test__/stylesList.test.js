import React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../../../App';

const { queryByTestId } = render(<App />);

/* TESTS TO INCLUDE:
 * - shows only one selected style
 * - only one select is selected
*/

test('Style module should render the list of styles', () => {
  expect(screen.findByTestId('StylesList')).toBeTruthy();
});
