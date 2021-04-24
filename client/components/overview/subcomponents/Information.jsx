import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { Twitter, Facebook, Instagram, Whatsapp, Pinterest } from '@styled-icons/fa-brands';
import { Link } from '@styled-icons/boxicons-regular';
import { Email } from '@styled-icons/material-outlined';

// Star Rating (# of reviews)
// Product Category
// Product Title
// Price
// Product Overview/Description
// Share on Social Media

function Information({ infoList }) {
  const {
    // infoList: { // NESTED DESTRUCTURING
    id,
    name,
    category,
    default_price, // use destructuring w/ alias to avoid snake_case
  } = infoList;

  const defaultPrice = Number(default_price);

  return (
    <div data-testid="Information">
      <Section>
        {/* Star Rating (# of reviews) */}
        <span>
          <FontAwesomeIcon icon={faStar} data-testid="iconStar" color="orange" />
          <FontAwesomeIcon icon={faStar} data-testid="iconStar" color="orange" />
          <FontAwesomeIcon icon={faStar} data-testid="iconStar" color="orange" />
          <FontAwesomeIcon icon={faStar} data-testid="iconStar" color="lightgrey" />
          <FontAwesomeIcon icon={faStar} data-testid="iconStar" color="lightgrey" />
          {'    '}
        </span>
        <a href="#reviews"><span>Read all reviews</span></a>
        <br />
        <br />

        {/* Product Category */}
        <Category>{category}</Category>
        <ProductName>{name}</ProductName>
        <p>
          ${Number(defaultPrice)} {/* CONVERTED TO NUMBER, RENDERS AS WHOLE INTEGER */}
        </p>

      </Section>
    </div>
  );
}

Information.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
};

// STYLED-COMPONENTS
const Section = styled.div`
  background: ${(props) => props.background};
  border-radius: 3px;
`;

const Category = styled.div`
  text-transform: uppercase;
  margin: 10px 0;
`;

const ProductName = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin: 10px 0;
`;

const Socials = styled.div`
  color: orange;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px 10px;
  margin: 10px 0;
  /* justify-content: center; */
`;

export default Information;
