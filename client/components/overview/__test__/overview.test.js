import React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../../../App';

test('Overview shows the welcome message placeholder', () => {
  render(<App />);
  // expect(screen.findByTestId(/Overview/)).toBeTruthy();
  expect(screen.getByText('Product Overview Section coming soon!')).toBeTruthy();
});
