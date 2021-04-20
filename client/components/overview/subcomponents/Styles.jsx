import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ThumbnailCircle = styled.span`
    display: flex;
    border-radius: 50%;
    height: 75px;
    width: 75px;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
    color: cornflowerblue;
    font-weight: bold;
    background-image: url(${props => props.image});
    /* background-color: lightsteelblue; */
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
      }],
    },
  } = props;

  return (
    <>
      <ThumbnailCircle image={thumbnailUrl} />
    </>
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
