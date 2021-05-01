import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Twitter, Facebook, Instagram, Whatsapp, Pinterest } from '@styled-icons/fa-brands';
import { Link } from '@styled-icons/boxicons-regular';
import { Email } from '@styled-icons/material-outlined';

function Information({ productInfo, price }) {
  const {
    id,
    name,
    category,
    default_price,
  } = productInfo;

  const defaultPrice = Number(default_price);
  const onSale = price < defaultPrice;

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
        <Price>
          {onSale
            ? <span><Sale>${price} </Sale><Strike>${defaultPrice}</Strike></span>
            : <span>${price}</span>
          }
        </Price>

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

const Price = styled.div`
  margin-top: 16px;
`;

const Sale = styled.span`
  color: red;
  font-weight: bold;
`;

const Strike = styled.span`
  text-decoration: line-through;
`;

export default Information;
