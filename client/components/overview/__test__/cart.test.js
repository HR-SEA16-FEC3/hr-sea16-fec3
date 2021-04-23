import React from 'react'
import { render } from '@testing-library/react'
import Cart from '../subcomponents/Cart';

/* TESTS TO INCLUDE
 * - all sizes are available to select
 * - only one size/qty is selected at a time
 * - add to cart button adds selected style to cart
 * - when style is added to cart, updates quantity
 * - considers sale price
*/
describe('Cart Module Tests', () => {

  it('Cart module renders the "Select Size" drop-down selector', () => { {/* CONSOLIDATE TESTS */}
    const { queryByTestId } = render(<Cart />);
    expect(queryByTestId('sizeDropdown')).toBeTruthy();
  });

  it('Cart module renders the "Quantity" drop-down selector', () => {
    const { queryByTestId } = render(<Cart />);
    expect(queryByTestId('quantityDropdown')).toBeTruthy();
  });

  it('Cart module renders the Add to Cart button', () => {
    const { queryByTestId } = render(<Cart />);
    expect(queryByTestId('btnAddToCart')).toBeTruthy();
  });

  it('Cart module renders the Star button', () => {
    const { queryByTestId } = render(<Cart />);
    expect(queryByTestId('btnStar')).toBeTruthy();
  });

});