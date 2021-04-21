import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from '@styled-icons/octicons';

const ThumbnailCircle = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin: 10px 10px;
  object-fit: contain;
  justify-content: center;
  color: cornflowerblue;
  font-weight: bold;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const MainImage = styled.div`
  border: 1px solid black;
  margin: 10px 10px;
  background: white;
  padding: 15px;
  &:hover{ background: lightgrey }
`;

const FlexElement = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;
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

    <div data-testid="Gallery"> {/* ADD ENLARGE IMAGE ICON */}

      <FlexElement>
        {/* SELECTED STYLE'S MAIN IMAGE */}
        <ArrowLeft size="20" />
        <MainImage><img src={firstImage} height="500px" alt={productName} /></MainImage>
        <ArrowRight size="20" />
      </FlexElement>

      {/* SELECTED STYLE'S THUMBNAILS */}
      <FlexElement>
        <ChevronLeft size="20" />
        {firstStyleThumbnails.photos.map((photo, key) => (
          <ThumbnailCircle key={key} image={photo.url} />
        ))}
        <ChevronRight size="20" />
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
