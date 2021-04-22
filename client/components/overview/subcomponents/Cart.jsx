import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Twitter, Facebook, Instagram, Whatsapp, Pinterest } from '@styled-icons/fa-brands';
import { Link, Star } from '@styled-icons/boxicons-regular';
import { Email } from '@styled-icons/material-outlined';

const Cart = () => (

  <form data-testid="Cart">
    <p>
      {/* Size Selector Dropdown */}
      <Select data-testid="sizeDropdown">
        <option>Select Size</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </Select>

      {/* Quantity Selector */}
      <Select data-testid="quantityDropdown">
        <option>Quantity</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </Select>
    </p>

    <p>
      {/* Add to Cart button */}
      <Button data-testid="btnAddToCart">Add to Cart</Button>
      <Button data-testid="btnStar"><Star size="16px" /></Button> {/* TODO: RESIZE BUTTON */}
      {/* <span><Button data-testid="btnStar">☆</Button></span> */}
    </p>

    {/* Share on Social Media */}
    <Socials>
      {/* Facebook, Twitter, Pinterest = min required */}
      <Icon><Facebook data-testid="icon-facebook" size="36" /></Icon>
      <Icon><Twitter data-testid="icon-twitter" size="36" /></Icon>
      <Icon><Pinterest data-testid="icon-pinterest" size="36" /></Icon>
      <Icon><Instagram size="36" /></Icon>
      <Icon><Whatsapp size="36" /></Icon>
      <Icon><Email size="36" /></Icon>
      <Icon><Link size="36" /></Icon>
    </Socials>
  </form>

);

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
  margin: 10px 16px 0 0;
  &:hover{ color: #ffbf00 } // HOVER SHOULD BE A LIGHTER COLOR THAN REST STATE
`;

export default Cart;
