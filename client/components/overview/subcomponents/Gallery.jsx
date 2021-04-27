import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight, ChevronUp, ChevronDown } from '@styled-icons/octicons';
import { StarThreeQuarter } from '@styled-icons/fluentui-system-filled';
import { Expand } from '@styled-icons/fa-solid';

const Gallery = ({ style }) => {
  const { name, photos } = style;

  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(null);

  // TODO:
  // display default image upon initial render
  // arrows part of main image div

  return (
    <OuterContainer>

      {/* THUMBNAILS */}
      <ThumbnailContainer>
        <ChevronUp size="20" />
        {photos.map((photo, key) => (
          <ThumbnailCircle
            key={key} image={photo.url}
            onClick={(event) => {
              event.preventDefault();
              setIndex(key);
            }}
          />
        ))}
        <ChevronDown size="20" />
      </ThumbnailContainer>

      {/* MAIN IMAGE */}
      <MainContainer data-testid="Gallery"> {/* ADD ENLARGE IMAGE ICON */}
        <MainImage src={photos[index].url} alt={name} />
        <ExpandContainer><Expand size="20" /></ExpandContainer>
        <LeftArrow><ArrowLeft size="36" /></LeftArrow>
        <RightArrow><ArrowRight size="36" /></RightArrow>
      </MainContainer>

    </OuterContainer>
  );
};

const ThumbnailCircle = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  /* border-radius: 50%; */
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
  &:hover{
    cursor: pointer;
    opacity: 0.75;
  };
`;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  /* width: 100%; */
  flex: auto;
`;

const MainContainer = styled.div`
  /* display: block; */
  position: relative;
  width: 100%;
  max-width: 768px;
  /* flex: 1 1 auto; */
  /* flex-flow: row wrap; */
  /* justify-content: center; */
  /* align-items: center; */
  /* align-content: center; */
`;

const MainImage = styled.img`
  display: block;
  border: 2px solid black;
  /* margin-left: auto; */
  /* margin-right: auto; */
  margin: auto auto;
  /* padding: 15px; */
  max-height: 500px;
  max-width: 500px;
  height: auto;
  width: auto;
`;

const Arrows = styled.div`
  display: block;
  position: relative;
  /* justify-content: space-between; */
  /* align-self: center; */
`;

const LeftArrow = styled.div`
  display: block;
  position: absolute;
  left: 0;
  /* top: 50%; */
  color: white;
  border-radius: 50%;
  background-color:rgba(0, 0, 0, 0.25);
`;

const RightArrow = styled.div`
  display: block;
  position: absolute;
  right: 0;
  /* top: 50%; */
  color: white;
  border-radius: 50%;
  background-color:rgba(0, 0, 0, 0.25);
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* y-axis */
  align-items: center; /* x-axis */
`;

const ExpandContainer = styled.div`
  display: block;
  right: 0;
  top: 0;
  position: absolute;
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
