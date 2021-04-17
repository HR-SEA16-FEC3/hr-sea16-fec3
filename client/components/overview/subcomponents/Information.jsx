import React from 'react';
import PropTypes from 'prop-types';

// Star Rating (# of reviews)
// Product Category
// Product Title
// Price
// Product Overview
// Share on Social Media

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
      <div>Overview: Product Information</div>
      {/* Star Rating (# of reviews) */}
      {/* Product Category */}
      <p>{category}</p>
      <p>{name}</p>
      <p>
        ${price}
      </p>
      {/* Product Overview */}
      <p>ID {id}</p>
      {/* Share on Social Media */}
      <br />
    </div>

  );
}

Information.propTypes = {
  infoList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slogan: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    default_price: PropTypes.string.isRequired,
  })
};

export default Information;
