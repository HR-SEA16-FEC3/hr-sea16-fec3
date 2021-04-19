import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// each product_id will have several sub style_id's
// will need to render styles separately
// can rename this to StylesList
// then map out and render each style separately (based on selected style)

// const Selector = styled.div`
//   /* display: none; */
//   border: 1px solid black;
// `;

const Styles = (props) => {
  const {
    style: {
      style_id: styleId,
      name,
      original_price: originalPrice,
      sale_price: salePrice,
      'default?': isDefault,
    },
  } = props;

  return (
    <div data-testid="Styles">
      {styleId}, {name}, {originalPrice}
    </div>
  );
};

Styles.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.boolean,
  }),
};

export default Styles;
