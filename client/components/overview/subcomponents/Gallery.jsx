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
  const [current, setCurrent] = useState(0);

  // TODO:
  // display default image upon initial render
  // arrows part of main image div

  return (
    <OuterContainer>

      {/* MAIN IMAGE */}
      <MainContainer data-testid="Gallery"> {/* ADD ENLARGE IMAGE ICON */}
        <MainImage src={photos[index].url} alt={name} />
        <ExpandContainer><Expand size="24" /></ExpandContainer>
        <LeftArrow><ArrowLeft size="36" /></LeftArrow>
        <RightArrow><ArrowRight size="36" /></RightArrow>

        {/* THUMBNAILS */}
        <ThumbnailContainer>
          <ChevronUp size="20" />
          {photos.map((photo, key) => (
            <ThumbnailSquare
              key={key} image={photo.url}
              onClick={(event) => {
                event.preventDefault();
                setIndex(key);
              }}
            />
          ))}
          <ChevronDown size="20" />
        </ThumbnailContainer>
      </MainContainer>

    </OuterContainer>
  );
};

const ThumbnailSquare = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  /* border-radius: 50%; */
  height: 50px;
  width: 50px;
  margin: 10px 10px;
  object-fit: contain;
  justify-content: center;
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
  color: white;

  /* flex: 1 1 auto; */
  /* flex-flow: row wrap; */
  /* justify-content: center; */
  /* align-items: center; */
  /* align-content: center; */
`;

const MainImage = styled.img`
  display: block;
  border: 2px solid black;
  margin: auto auto;
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
`;

const Arrows = styled.div`
  display: block;
  position: relative;
`;

const LeftArrow = styled.div`
  display: block;
  position: absolute;
  left: 12px;
  top: 50%;
  border-radius: 50%;
  background-color:rgba(0, 0, 0, 0.25);
`;

const RightArrow = styled.div`
  display: block;
  position: absolute;
  right: 12px;
  top: 50%;
  border-radius: 50%;
  background-color:rgba(0, 0, 0, 0.25);
`;
// stop
const ThumbnailContainer = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color:rgba(0, 0, 0, 0.25);
  text-align: center;
  padding: 4px;
  margin: 12px 12px;
`;

const ExpandContainer = styled.div`
  display: block;
  right: 12px;
  top: 12px;
  position: absolute;
  padding: 4px;
  background-color:rgba(0, 0, 0, 0.25);
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
