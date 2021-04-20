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

const MainImage = styled.image`
  border: 1px solid black;
  margin-top: 30px;
  margin-right: 30px;
  background: white;
  padding: 30px;
  &:hover{ background: lightgrey }
`;

const Gallery = () => (

  <div data-testid="Gallery">
    <div>Overview: Image Gallery</div>
    <br />
    <p>
      <MainImage>Main Image</MainImage>
    </p>
    <br />
    {/* MAP THUMBNAILS, RENDER INDIVIDUALLY */}
    <div>
      <Thumbnail>THUMB 1</Thumbnail>
      <Thumbnail>THUMB 2</Thumbnail>
      <Thumbnail>THUMB 3</Thumbnail>
      <Thumbnail>THUMB 4</Thumbnail>
      <Thumbnail>THUMB 5</Thumbnail>
      <Thumbnail>THUMB 6</Thumbnail>
    </div>

    <br />
  </div>

);

export default Gallery;
