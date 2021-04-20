import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faStar, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { Twitter, FacebookMessenger } from '@styled-icons/fa-brands';

// Star Rating (# of reviews)
// Product Category
// Product Title
// Price
// Product Overview/Description
// Share on Social Media

// STYLED-COMPONENTS
const Section = styled.div`
  /* text-align: center; */
  /* background: cornflowerblue; */
  background: ${props => props.background};
  /* padding: 0.25em; */
  border-radius: 3px;
`;

const Category = styled.div`
  text-transform: uppercase;
`;

const ProductName = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const Socials = styled.div`
  color: cornflowerblue;
  display: flex;
  flex-flow: row wrap;
  margin-right: 10;
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
          {'  '}
        </span>
        <span>Read all reviews</span>
        <br />
        <br />

        {/* Product Category */}
        <Category>{category}</Category>
        <ProductName>{name}</ProductName>
        <p>${price}</p>

        {/* Product Overview/Description */}
        {/* <Description slogan={slogan} description={description} /> */}

        {/* Share on Social Media */}
        Share:
        <Socials>
          <Twitter size="20" />
          <FacebookMessenger size="20" />
        </Socials>
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
  })
};

export default Information;
