import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Twitter, Facebook, Instagram, Whatsapp, SnapchatGhost } from '@styled-icons/fa-brands';
import { Link } from '@styled-icons/boxicons-regular';
import { Email } from '@styled-icons/material-outlined';

const Select = styled.select`
  border: 1px solid black;
  margin-right: 15px;
  background: white;
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Button = styled.button`
  border: 1px solid black;
  margin-top: 15px;
  margin-right: 15px;
  background: orange;
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
  &:hover{ background: #ffbf00 }
`;

const Socials = styled.div`
  color: orange;
  display: flex;
  flex-flow: row wrap;
  padding: 10px 0;
  margin: 0;
`;

const Icon = styled.span` // ONCLICK SHOULD BE DARKER THAN REST STATE PER WIFE
  size: 36;
  margin: 10px 10px 0 16px;
  &:hover{ color: #ffbf00 } // HOVER SHOULD BE A LIGHTER COLOR THAN REST STATE
`;

const Cart = () => (

  <div data-testid="Cart">
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

    {/* Share on Social Media */} {/* MOVE TO BELOW CART SUBCOMPONENT */}
    <Socials>
      <Icon><Twitter size="36" /></Icon>
      <Icon><Facebook size="36" /></Icon>
      <Icon><Instagram size="36" /></Icon>
      <Icon><Whatsapp size="36" /></Icon>
      <Icon><Email size="36" /></Icon>
      <Icon><Link size="36" /></Icon>
    </Socials>
  </div>

);

export default Cart;
