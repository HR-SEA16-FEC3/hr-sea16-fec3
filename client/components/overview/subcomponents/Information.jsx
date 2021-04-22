import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faStar, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { Twitter, Facebook, Instagram, Whatsapp, SnapchatGhost } from '@styled-icons/fa-brands';
import { Link } from '@styled-icons/boxicons-regular';
import { Email } from '@styled-icons/material-outlined';

// Star Rating (# of reviews)
// Product Category
// Product Title
// Price
// Product Overview/Description
// Share on Social Media

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

function Information(props) {
  const {
    infoList: { // nested destructuring
      id,
      name,
      slogan,
      description,
      category,
      default_price: price, // use destructuring w/ alias to avoid snake_case
    },
  } = props;

  return (
    <div data-testid="Information">
      <Section>
        {/* Star Rating (# of reviews) */}
        <span>
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} color="orange" />
          <FontAwesomeIcon icon={faStar} color="lightgrey" />
          <FontAwesomeIcon icon={faStar} color="lightgrey" />
          {'    '}
        </span>
        <span>Read all reviews</span>
        <br />
        <br />

        {/* Product Category */}
        <Category>{category}</Category>
        <ProductName>{name}</ProductName>
        <p>
          ${Number(price)} {/* CONVERTED TO NUMBER, RENDERS AS WHOLE INTEGER */}
        </p>

      </Section>
    </div>
  );
}

Information.propTypes = {
  infoList: PropTypes.shape({
    id: PropTypes.number,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
  }),
};

export default Information;
