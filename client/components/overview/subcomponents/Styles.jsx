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

const Circle = styled.div`
  display: flex;
  text-align: center;
`;

const Styles = (props) => {
  const {
    style: {
      style_id: styleId,
      name,
      original_price: originalPrice,
      sale_price: salePrice,
      'default?': isDefault,
      photos: [{
        thumbnail_url: thumbnailUrl,
      }]
    },
  } = props;

  const ThumbnailCircle = styled.span`
    display: flex;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
    background-color: lightsteelblue;
    /* color: black; */
    /* background-image: url(${thumbnailUrl}); */
  `;

  return (
    <Circle>
      <ThumbnailCircle>{styleId}</ThumbnailCircle>
    </Circle>
  );
};

Styles.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.boolean,
    photos: PropTypes.arrayOf(PropTypes.shape({
      thumbnail_url: PropTypes.string,
    })),
  }),
};

export default Styles;
