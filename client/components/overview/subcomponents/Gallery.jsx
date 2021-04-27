import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight, ChevronUp, ChevronDown } from '@styled-icons/octicons';
import { StarThreeQuarter } from '@styled-icons/fluentui-system-filled';

const Gallery = ({ style }) => {
  const { name, photos } = style;

  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(null);

  // TODO:
  // display default image upon initial render
  // arrows part of main image div

  return (
    <MainContainer data-testid="Gallery"> {/* ADD ENLARGE IMAGE ICON */}
      {/* SELECTED STYLE'S MAIN IMAGE */}
      <MainImage src={photos[index].url} alt={name} />
      <LeftArrow><ArrowLeft size="20" /></LeftArrow>
      <RightArrow><ArrowRight size="20" /></RightArrow>

      {/* SELECTED STYLE'S THUMBNAILS */}
      <FlexElement>
        <ChevronUp size="20" />
        {photos.map((photo, key) => (
          <ThumbnailCircle key={key} image={photo.url} onClick={(event) => {
            event.preventDefault();
            setIndex(key);
          }}
          />
        ))}
        <ChevronDown size="20" />
      </FlexElement>

    </MainContainer>
  );
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

const MainContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MainImage = styled.img`
  display: block;
  border: 2px solid black;
  margin-left: auto;
  margin-right: auto;
  /* padding: 15px; */
  max-height: 500px;
  max-width: 500px;
  height: auto;
  width: auto;
  &:hover{ background: lightgrey }
  position: relative;
  justify-content: center;
  align-content: center;
`;

const Arrows = styled.span`
  display: flex;
  /* justify-content: space-between; */
  /* align-self: center; */
`;

const LeftArrow = styled.div`
  left: 36px;
  top: 50%;
  position: absolute;

`;

const RightArrow = styled.div`
  right: 36px;
  top: 50%;
  position: absolute;

`;

const FlexElement = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  /* align-self: flex-start; */
`;

/* =============================================================================== */

Gallery.propTypes = {
  styles: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      style_id: PropTypes.number,
    })),
  }),
};

export default Gallery;
