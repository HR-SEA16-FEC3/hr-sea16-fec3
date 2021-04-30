import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight, ChevronUp, ChevronDown } from '@styled-icons/octicons';
import { StarThreeQuarter } from '@styled-icons/fluentui-system-filled';
import { Expand } from '@styled-icons/fa-solid';
import { Close } from '@styled-icons/ionicons-solid';

const Gallery = ({ style }) => {
  const { name, photos } = style;

  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(null);
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleUp() {
    const addIndex = index - 1;
    if (photos[addIndex].url) setIndex(addIndex);
    if (!photos[addIndex].url) setIndex(photos.length - 1);
  }

  function handleDown() {
    const addIndex = index + 1;
    if (photos[addIndex].url) setIndex(addIndex);
    if (!photos[addIndex].url) setIndex(0);
  }

  // TODO:
  // arrows part of main image div

  return (
    <OuterContainer>

      {/* MAIN IMAGE */}
      <MainContainer data-testid="Gallery">
        <MainImage src={photos[index].url} alt={name} />
        <ExpandContainer onClick={() => {setShowModal(true)}}><Expand size="24" /></ExpandContainer>
        <LeftArrow><ArrowLeft size="36" /></LeftArrow>
        <RightArrow><ArrowRight size="36" /></RightArrow>

        {/* THUMBNAILS */}
        <ThumbnailContainer>
          <ChevronUp size="20" onClick={() => handleUp()} />
          {photos.map((photo, key) => (
            <ThumbnailSquare
              key={key} image={photo.url}
              onClick={(event) => {
                event.preventDefault();
                setIndex(key);
              }}
            />
          ))}
          <ChevronDown onClick={() => handleDown()} size="20" />
        </ThumbnailContainer>
      </MainContainer>

      {showModal && (
        <Overlay>
          <Dialog>
            <CloseButton><Close size="36" onClick={() => setShowModal(false)} /></CloseButton>
            <ModalImage src={photos[index].url} onClick={() => setShowModal(false)} />
          </Dialog>
        </Overlay>
      )}

    </OuterContainer>
  );
};

/* =================== MODAL =================== */

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const Dialog = styled.div`
  background: whitesmoke;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: whitesmoke;
  width: max-content;
  margin: auto;
  height: max-content;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  border-radius: 50%;
  background-color:rgba(128, 128, 128, 0.85);
`;

const ModalImage = styled.img`
  width: auto;
  max-height: 90vh;
  margin: auto;
`;

/* =================== MODAL =================== */

const ThumbnailSquare = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  height: 50px;
  width: 50px;
  margin: 10px 10px;
  object-fit: contain;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-size: 50px 50px;
  background-position: cover;
  &:hover{
    cursor: pointer;
    opacity: 0.75;
  };
`;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 768px;
  color: white;
`;

const MainImage = styled.img`
  display: block;
  border: 1px solid black;
  margin: auto auto;
  max-height: 800px;
  max-width: 100%;
  height: auto;
  width: auto;
  object-fit: contain;
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
