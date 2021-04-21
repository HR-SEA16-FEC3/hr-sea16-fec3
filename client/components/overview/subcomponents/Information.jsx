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
<<<<<<< HEAD
  background: ${(props) => props.background};
=======
  background: ${props => props.background};
>>>>>>> 884e200c9eb6883c6b9fa81f06a495863915f4ac
  border-radius: 3px;
`;

const Category = styled.div`
  text-transform: uppercase;
`;

const ProductName = styled.div`
  font-weight: bold;
  font-size: 40px;
`;

const Socials = styled.span`
  color: orange;
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
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
<<<<<<< HEAD
          $
          {Number(price)}
          {' '}
          {/* CONVERTED TO NUMBER, RENDERS AS WHOLE INTEGER */}
=======
          ${Number(price)} {/* CONVERTED TO NUMBER, RENDERS AS WHOLE INTEGER */}
>>>>>>> 884e200c9eb6883c6b9fa81f06a495863915f4ac
        </p>

        {/* Product Overview/Description */}
        {/* <Description slogan={slogan} description={description} /> */}

        {/* Share on Social Media */}

        <Socials>
          <Twitter size="40" />
          <Twitter size="10" color="white" />
          <FacebookMessenger size="40" />
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
