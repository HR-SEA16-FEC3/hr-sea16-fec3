import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// each product_id will have several sub style_id's
// will need to render styles separately
// can rename this to StylesList
// then map out and render each style separately (based on selected style)

// const Button = styled.button`
//     border: 1px;
//     padding: 8px 8px;
//     background: lightblue;
//     &:hover{
//       background: grey;
//     }
//   `;

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
  stylesList: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    results: PropTypes.shape(
      [
        {
          style_id: PropTypes.number.isRequired,
        }
      ]
    ),
  }),
};

export default Styles;
