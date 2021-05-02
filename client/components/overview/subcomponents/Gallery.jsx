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
    <GalleryContainer data-testid="Gallery">
      {/* MAIN IMAGE */}
      <MainImageContainer>
        <MainImage src={photos[index].url} alt={name} />
        <ExpandContainer onClick={() => { setShowModal(true); }}><Expand size="24" /></ExpandContainer>
        <LeftArrow onClick={handleLeft}><ChevronLeft size="48" /></LeftArrow>
        <RightArrow onClick={handleRight}><ChevronRight size="48" /></RightArrow>
      </MainImageContainer>

      {/* THUMBNAILS */}
      <ThumbContainer>
        <Chevron><ChevronUp size="20" onClick={() => handleUp()} /></Chevron>
        {photos.map((photo, key) => (
          <ThumbSquare key={key} onClick={() => { setIndex(key); }}>
            <ThumbImage src={photo.url} alt="a thumbnail of the product" />
          </ThumbSquare>
        ))}
        <Chevron><ChevronDown onClick={() => handleDown()} size="20" /></Chevron>
      </ThumbContainer>
      {showModal && (
        <Overlay>
          <Dialog>
            <CloseButton><Close size="36" onClick={() => setShowModal(false)} /></CloseButton>
            <ModalImage src={photos[index].url} onClick={() => setShowModal(false)} />
          </Dialog>
        </Overlay>
      )}
    </GalleryContainer>
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
  &:hover{ cursor: pointer; opacity: 0.75; };
  &:active{ cursor: pointer; opacity: 0.50; };
`;

const ModalImage = styled.img`
  max-height: 90vh;
  width: auto;
  margin: auto;
`;

/* =================== MODAL =================== */

const ThumbSquare = styled.div`
  border: 1px solid black;
  display: flex;
  height: 50px;
  width: 50px;
  margin: 10px 10px;
  object-fit: cover;
  justify-content: center;
  position: relative;
  overflow: hidden;
  &:hover{ cursor: pointer; opacity: 0.75; };
  &:active{ cursor: pointer; opacity: 0.50; };
`;

const ThumbImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const GalleryContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const MainImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainImage = styled.img`
  border: 1px solid black;
  position: relative;
  max-height: 768px;
  max-width: 100%;
  overflow: hidden;
`;

const ExpandContainer = styled.div`
  display: block;
  right: 12px;
  top: 12px;
  position: absolute;
  padding: 4px;
  color: whitesmoke;
  filter: drop-shadow(0 2px 2px #1a1a1a);
  &:hover{ cursor: pointer; opacity: 0.75; };
  &:active{ cursor: pointer; opacity: 0.50; };
`;

const LeftArrow = styled.div`
  display: block;
  position: absolute;
  left: 100px;
  color: whitesmoke;
  filter: drop-shadow(0 2px 2px #1a1a1a);
  &:hover{ cursor: pointer; opacity: 0.75; };
  &:active{ cursor: pointer; opacity: 0.50; };
`;

const RightArrow = styled.div`
  display: block;
  position: absolute;
  right: 100px;
  color: whitesmoke;
  filter: drop-shadow(0 2px 2px #1a1a1a);
  &:hover{ cursor: pointer; opacity: 0.75; };
  &:active{ cursor: pointer; opacity: 0.50; };
`;

const Chevron = styled.span`
  &:hover{ cursor: pointer; opacity: 0.75; };
  &:active{ cursor: pointer; opacity: 0.50; };
`;

const ThumbContainer = styled.div`
  display: block;
  position: absolute;
  left: 0;
  text-align: center;
  padding: 4px;
  margin: auto 12px;
  filter: drop-shadow(0 2px 2px #1a1a1a);
  color: whitesmoke;
`;

Gallery.propTypes = {
  style: PropTypes.object,
  styleIndex: PropTypes.number.isRequired,
  setStyleIndex: PropTypes.func.isRequired,
  stylesList: PropTypes.array.isRequired,
};

export default Gallery;
