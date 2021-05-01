import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight, ChevronUp, ChevronDown } from '@styled-icons/octicons';
import { StarThreeQuarter, ChevronLeft, ChevronRight } from '@styled-icons/fluentui-system-filled';
import { Expand } from '@styled-icons/fa-solid';
import { Close } from '@styled-icons/ionicons-solid';

const Gallery = ({ style, styleIndex, setStyleIndex, stylesList }) => {
  const { name, photos } = style;

  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(null);
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleUp() {
    const subtractIndex = index - 1;
    if (photos[subtractIndex] === undefined) {
      setIndex(photos.length - 1);
    } else {
      setIndex(subtractIndex);
    }
  }

  function handleDown() {
    const addIndex = index + 1;
    if (photos[addIndex] === undefined) {
      setIndex(0);
    } else {
      setIndex(addIndex);
    }
  }

  function handleLeft() {
    const subtractIndex = styleIndex - 1;
    if (stylesList[subtractIndex] === undefined) {
      setStyleIndex(stylesList.length - 1);
    } else {
      setStyleIndex(subtractIndex);
    }
  }

  function handleRight() {
    const addIndex = styleIndex + 1;
    if (stylesList[addIndex] === undefined) {
      setStyleIndex(0);
    } else {
      setStyleIndex(addIndex);
    }
  }

  return (
    <OuterContainer>

      {/* MAIN IMAGE */}
      <MainContainer data-testid="Gallery">
        <MainImage src={photos[index].url} alt={name} />
        <ExpandContainer onClick={() => {setShowModal(true)}}><Expand size="24" /></ExpandContainer>
        <LeftArrow onClick={handleLeft}><ChevronLeft size="48" /></LeftArrow>
        <RightArrow onClick={handleRight}><ChevronRight size="48" /></RightArrow>

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
  color: whitesmoke;
  filter: drop-shadow(0 2px 2px #1a1a1a);
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
  display: block;
  position: relative;
  width: 100%;
  max-width: 768px;
  color: white;
  top: 50%;
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
  top: 50%;
`;

const LeftArrow = styled.div`
  display: block;
  position: absolute;
  left: 80px;
  top: 50%;
  color: whitesmoke;
  filter: drop-shadow(0 2px 2px #1a1a1a);
`;

const RightArrow = styled.div`
  display: block;
  position: absolute;
  right: 60px;
  top: 50%;
  color: whitesmoke;
  filter: drop-shadow(0 2px 2px #1a1a1a);
`;

const ThumbnailContainer = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  padding: 4px;
  margin: 12px 12px;
  filter: drop-shadow(0 2px 2px #1a1a1a);
  color: whitesmoke;
`;

const ExpandContainer = styled.div`
  display: block;
  right: 12px;
  top: 12px;
  position: absolute;
  padding: 4px;
  color: whitesmoke;
  filter: drop-shadow(0 2px 2px #1a1a1a);
`;

/* =============================================================================== */

Gallery.propTypes = {
  style: PropTypes.object,
  styleIndex: PropTypes.number.isRequired,
  setStyleIndex: PropTypes.func.isRequired,
  stylesList: PropTypes.array.isRequired,
};

export default Gallery;
