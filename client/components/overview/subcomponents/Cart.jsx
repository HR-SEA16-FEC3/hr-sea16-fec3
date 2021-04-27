import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as faBrands from '@styled-icons/fa-brands';
import * as boxiconsSolid from '@styled-icons/boxicons-solid'; // boxiconsSolid.Heart WHEN ACTIVATED
import { Link, Heart } from '@styled-icons/boxicons-regular';
import { Email } from '@styled-icons/material-outlined';

const Cart = ({ style }) => {
  const { skus } = style;

  console.log(skus);

  return (
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
        <Button data-testid="btnAddToCart" onClick={ (e) => {e.preventDefault(); }}>Add to Cart</Button>
        <Button data-testid="btnStar" onClick={ (e) => {e.preventDefault(); }}><Heart size="16px" /></Button> {/* TODO: RESIZE BUTTON */}
      </p>

      {/* Share on Social Media */}
      <Socials>
        {/* Facebook, Twitter, Pinterest = min required */}
        <Icon><faBrands.Facebook data-testid="icon-facebook" size="36" /></Icon>
        <Icon><faBrands.Twitter data-testid="icon-twitter" size="36" /></Icon>
        <Icon><faBrands.Pinterest data-testid="icon-pinterest" size="36" /></Icon>
        <Icon><faBrands.Instagram size="36" /></Icon>
        <Icon><faBrands.Whatsapp size="36" /></Icon>
        <Icon><Email size="36" /></Icon>
        <Icon><Link size="36" /></Icon>
      </Socials>
    </form>

  );
};

const Select = styled.select`
  border: 1px solid black;
  margin-right: 16px;
  background: white;
  padding: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Button = styled.button`
  border: 1px solid black;
  margin-top: 16px;
  margin-right: 16px;
  background: orange;
  padding: 16px;
  text-transform: uppercase;
  font-weight: bold;
  &:hover{ background: #ffbf00 }
`;

const Socials = styled.div`
  color: orange;
  display: flex;
  flex-flow: row wrap;
  padding: 8px 0;
  margin: 0;
`;

const Icon = styled.span` // ONCLICK SHOULD BE DARKER THAN REST STATE PER WIFE
  margin: 10px 16px 0 0;
  &:hover{ color: #ffbf00 } // HOVER SHOULD BE A LIGHTER COLOR THAN REST STATE
`;

export default Cart;
