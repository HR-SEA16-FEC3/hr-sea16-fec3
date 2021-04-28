import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styles = ({ style, setSelectedStyle }) => {
  const {
    photos: [{
      thumbnail_url: thumbnailUrl,
    }],
  } = style;

  function clickStyle(event) {
    event.preventDefault();
    console.log('Clicked on style:', style.name);
    setSelectedStyle(style);
  }

  return (
    <>
      {/* DISPLAY THUMBNAILS IN ROWS OF 4 */}
      <ThumbnailCircle
        data-testid="style-thumbnail"
        image={thumbnailUrl}
        onClick={() => clickStyle(event)}
      />
    </>
  );
};

Styles.propTypes = {
  style: PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.shape({
      thumbnail_url: PropTypes.string,
    })),
  }),
};

const ThumbnailCircle = styled.div`
  border: 1px solid black;
  display: block;
  border-radius: 50%;
  height: 74px;
  /* max-width: 74px; */
  width: auto;
  object-fit: contain;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin: 8px 12px 0 0;
  flex: 0 0 21%;
  &:hover{
    cursor: pointer;
    opacity: 0.75;
  };
`;

export default Styles;

// style_id: styleId,
// name,
// original_price: originalPrice,
// sale_price: salePrice,
// 'default?': isDefault,

// style_id: PropTypes.number,
// name: PropTypes.string,
// original_price: PropTypes.string,
// sale_price: PropTypes.string,
// 'default?': PropTypes.boolean,
