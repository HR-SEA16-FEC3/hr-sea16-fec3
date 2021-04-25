import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from '@styled-icons/octicons';

const Gallery = ({ style }) => {
  const { name, photos } = style;

  const [index, setIndex] = useState(0);

  // TODO: display default image

  return (

    <div data-testid="Gallery"> {/* ADD ENLARGE IMAGE ICON */}

      <FlexElement>
        {/* SELECTED STYLE'S MAIN IMAGE */}
        <ArrowLeft size="20" />
        <MainImage src={photos[index].url} alt={name} />
        <ArrowRight size="20" />
      </FlexElement>

      {/* SELECTED STYLE'S THUMBNAILS */}
      <FlexElement>
        <ChevronLeft size="20" />
        {photos.map((photo, key) => (
          <ThumbnailCircle key={key} image={photo.url} onClick={(event) => {
            event.preventDefault();
            setIndex(key);
          }}
          />
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

const MainImage = styled.img`
  border: 1px solid black;
  margin: 10px 10px;
  background: white;
  padding: 15px;
  max-height: 500px;
  max-width: 500px;
  height: auto;
  width: auto;
  &:hover{ background: lightgrey }
`;

const FlexElement = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;
`;

export default Gallery;
