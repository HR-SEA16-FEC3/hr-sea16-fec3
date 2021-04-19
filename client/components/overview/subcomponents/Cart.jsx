import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid black;
    padding: 8px 8px;
    background: lightblue;
    margin-right: 6px;
    &:hover{
      background: grey;
    }
  `;

const Select = styled.select`
  /* display: none; */
  border: 1px solid black;
  margin-right: 6px;
  background: white;
  padding: 8px;
`;

const Cart = () => (

  <div data-testid="Cart">
    <div>Overview: Add to Cart</div>

    {/* Size Selector Dropdown */}
    <Select>
      <option>Select Size</option>
    </Select>

    {/* Quantity Selector */}
    <Select>
      <option>Quantity</option>
    </Select>

    {/* Add to Cart button */}
    <span><Button data-testid="btnAddToCart">Add to Cart</Button></span>
    <span><Button data-testid="btnStar">Star</Button></span>
    <br />
  </div>

);

export default Cart;
