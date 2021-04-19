import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Styles from './Styles';

// each product_id will have several sub style_id's
// will need to render styles separately
// can rename this to StylesList
// then map out and render each style separately (based on selected style)



const StylesList = (props) => {
  const {
    stylesList: {
      product_id: productId,
      results: [{
        style_id: styleId,
      }],
    },
  } = props;

  return (

    <div data-testid="StylesList">
      <div>Overview: Style Selector</div>
      <p>Product ID: {productId}</p>
      <p>Style ID: {styleId}</p>
      {props.stylesList.results.map((style) => (
        <Styles style={style} key={style.style_id} />
      ))}

      <br />
    </div>

  );
};

StylesList.propTypes = {
  stylesList: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      style_id: PropTypes.number,
    })),
  }),
};

export default StylesList;
