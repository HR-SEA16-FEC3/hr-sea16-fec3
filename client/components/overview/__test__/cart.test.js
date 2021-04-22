import React from 'react'
import {render, screen} from '@testing-library/react'
import Cart from '../subcomponents/Cart';

const { queryByTestId } = render(<Cart />);

/* TESTS TO INCLUDE
 * - all sizes are available to select
 * - only one size/qty is selected at a time
 * - add to cart button adds selected style to cart
 * - when style is added to cart, updates quantity
 * - considers sale price
*/

test('Cart module renders the "Select Size" drop-down selector', () => {
  expect(screen.findByTestId('sizeDropdown')).toBeTruthy();
});

test('Cart module renders the "Quantity" drop-down selector', () => {
  expect(screen.findByTestId('quantityDropdown')).toBeTruthy();
});

test('Cart module renders the Add to Cart button', () => {
  expect(screen.findByTestId('btnAddToCart')).toBeTruthy();
});

test('Cart module renders the Star button', () => {
  expect(screen.findByTestId('btnStar')).toBeTruthy();
});
