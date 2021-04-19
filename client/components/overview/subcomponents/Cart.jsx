import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  border: 1px solid black;
  margin-top: 15px;
  margin-right: 15px;
  background: white;
  padding: 15px;
  text-transform: uppercase;
`;

const Button = styled.button`
    border: 1px solid black;
    padding: 15px;
    background: lightblue;
    margin-top: 15px;
    margin-right: 15px;
    text-transform: uppercase;
    &:hover{
      background: grey;
    }
  `;

const Cart = () => (

  <div data-testid="Cart">
    <div>Overview: Add to Cart</div>

    {/* Size Selector Dropdown */}
    <Select data-testid="sizeDropdown">
      <option>Select Size</option>
    </Select>

    {/* Quantity Selector */}
    <Select data-testid="quantityDropdown">
      <option>Quantity</option>
    </Select>
    <br/>
    {/* Add to Cart button */}
    <span><Button data-testid="btnAddToCart">Add to Cart</Button></span>
    <span><Button data-testid="btnStar">☆</Button></span>
    <br />
  </div>

);

export default Cart;
