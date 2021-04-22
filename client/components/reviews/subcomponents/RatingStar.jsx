import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function RatingStar() {
  return (
    <Rating>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </Rating>
  );
}

const Rating = styled.div`
color: grey;
    &:hover {
      color: orange;
    }
  `;

export default RatingStar;
