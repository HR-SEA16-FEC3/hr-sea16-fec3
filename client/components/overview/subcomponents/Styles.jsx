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
  display: flex;
  height: 84px;
  width: 84px;
  object-fit: cover;
  justify-content: center;
  /* position: relative; */
  overflow: hidden;
  border-radius: 50%;
  align-items: center;
  margin: 12px 24px 0 0;
  flex: 0 0 19%;
  &:hover{ cursor: pointer; opacity: 0.75; };
  filter: drop-shadow(0 2px 2px #1a1a1a);
`;

const ThumbImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export default Styles;
