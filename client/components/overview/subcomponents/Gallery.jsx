import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.button`
  border: 1px solid black;
  /* margin-top: 15px;
  margin-right: 15px; */
  background: white;
  padding: 0px;
`;

const MainImage = styled.div`
  border: 1px solid black;
  margin-top: 0;
  margin-right: 30px;
  margin-bottom: 30px;
  background: white;
  padding: 15px;
  &:hover{ background: lightgrey }
`;

const FlexElement = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

const Gallery = (props) => {
  const {
    styles: {
      product_id: productId,
      results,
    },
  } = props;

  const firstImage = results[0].photos[0].url;
  const productName = results[0].name;
  const firstStyleThumbnails = results[0];

  return (

    <div data-testid="Gallery">

      <FlexElement>
        {/* <MainImage>Main Image</MainImage> */}
        <MainImage><img src={firstImage} height="500px" alt={productName}/></MainImage>
      </FlexElement>

      {/* MAP THUMBNAILS, RENDER INDIVIDUALLY */}
      <FlexElement>
        {firstStyleThumbnails.photos.map((photo, key) => (
          <Thumbnail key={key}><img src={photo.url} height="50px" /></Thumbnail>
        ))}
      </FlexElement>

    </div>

  );
};

Gallery.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      style_id: PropTypes.number,
    })),
  }),
};

export default Gallery;
