import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.button`
  border: 1px solid black;
  margin-top: 15px;
  margin-right: 15px;
  background: white;
  padding: 15px;
  &:hover{ background: lightgrey }

`;

const MainImage = styled.div`
  border: 1px solid black;
  margin-top: 0;
  margin-right: 30px;
  background: white;
  padding: 30px;
  &:hover{ background: lightgrey }
`;

const FlexElement = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

const Gallery = () => (

  <div data-testid="Gallery">

    <FlexElement>
      <MainImage>Main Image</MainImage>
    </FlexElement>

    <br />

    {/* MAP THUMBNAILS, RENDER INDIVIDUALLY */}
    <FlexElement>
      <Thumbnail>THUMB 1</Thumbnail>
      <Thumbnail>THUMB 2</Thumbnail>
      <Thumbnail>THUMB 3</Thumbnail>
      <Thumbnail>THUMB 4</Thumbnail>
      <Thumbnail>THUMB 5</Thumbnail>
      <Thumbnail>THUMB 6</Thumbnail>
    </FlexElement>

  </div>

);

export default Gallery;
