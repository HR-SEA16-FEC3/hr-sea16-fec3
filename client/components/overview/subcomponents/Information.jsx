import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Description from './Description';

// Star Rating (# of reviews)
// Product Category
// Product Title
// Price
// Product Overview/Description
// Share on Social Media

// STYLED-COMPONENTS
const Section = styled.section`
  text-align: center;
  /* background: cornflowerblue; */
  background: ${props => props.background};
  padding: 0.25em;
  border-radius: 3px;
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
        <div><h1>Overview: Product Information</h1></div>

        {/* Star Rating (# of reviews) */}
        <span>3.5/5 stars </span>
        <span>Read all reviews </span>

        {/* Product Category */}
        <p>
          Category:
          {' '}
          {category}
        </p>
        <p>
          Product Name:
          {' '}
          {name}
        </p>
        <p>
          Price: $
          {price}
        </p>
        {/* Product Overview/Description */}
        <Description slogan={slogan} description={description} />

        <p>
          Product ID:
          {' '}
          {id}
        </p>
        {/* Share on Social Media */}
      </Section>
      <br />
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
