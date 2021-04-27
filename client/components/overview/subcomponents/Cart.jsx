import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as faBrands from '@styled-icons/fa-brands';
import * as boxiconsSolid from '@styled-icons/boxicons-solid'; // boxiconsSolid.Heart WHEN ACTIVATED
import { Link, Heart } from '@styled-icons/boxicons-regular';
import { Email } from '@styled-icons/material-outlined';

const Cart = ({ style }) => {
  const { skus } = style;

  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(0);

  return (
    <form data-testid="Cart">

      <Dropdowns>
        {/* Size Selector Dropdown */}
        <Select
          data-testid="sizeDropdown"
          onChange={(e) => {
            e.preventDefault();
            console.log('e', e);
            setSize(e.target.value);
          }}
        >
          <option>Select Size</option>
          {Object.entries(skus).map(([key, value]) => (
            <option key={key}>{value.size}</option>
          ))}
        </Select>

        {/* Quantity Selector */}
        <Select data-testid="quantityDropdown">
          <option>Quantity</option>
          {/*
            CONDITIONAL RENDERING:
              IF SIZE === NULL; DISABLE QTY DROPDOWN AND SHOW '-'
              ONCE SIZE IS SELECTED, DEFAULT TO QTY '1'
          */}
          {Object.entries(skus).map(([key, value]) => (
            <option key={key}>{value.quantity}</option>
          ))}
        </Select>
      </Dropdowns>

      {/* Add to Cart button */}
      <Buttons>
        <Button data-testid="btnAddToCart" onClick={(e) => { e.preventDefault(); }}>Add to Cart</Button> {/* TODO: RESIZE BUTTON */}
        <Button data-testid="btnStar" onClick={(e) => { e.preventDefault(); }}><Heart size="16px" /></Button>
      </Buttons>

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

const Dropdowns = styled.div``;

const Buttons = styled.div``;

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

const Icon = styled.span` // ONCLICK SHOULD BE DARKER THAN REST STATE
  margin: 10px 16px 0 0;
  &:hover{ color: #ffbf00 } // HOVER SHOULD BE A LIGHTER COLOR THAN REST STATE
`;

export default Cart;
