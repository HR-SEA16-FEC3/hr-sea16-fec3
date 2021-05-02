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
      <ThumbCircle data-testid="style-thumbnail" onClick={() => clickStyle(event)}>
        <ThumbImage src={thumbnailUrl} alt="a thumbnail of a style" />
      </ThumbCircle>
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

const ThumbCircle = styled.div`
  border: 1px solid black;
  height: 84px;
  width: 84px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
  margin: 8px;
  justify-content: flex-start;
  &:hover{ cursor: pointer; opacity: 0.75; };
  &:active{ cursor: pointer; opacity: 0.50; };
  filter: drop-shadow(0 2px 2px #1a1a1a);
`;

const ThumbImage = styled.img`
  object-fit: cover;
  /* border-radius: 50%; */
  height: 100%;
  width: 100%;
  /* display: block; */
`;

export default Styles;
