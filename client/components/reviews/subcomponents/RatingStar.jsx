import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// const {rating} =
const RatingStar = ({ rating }) => {
  const [stars] = useState(rating);
  console.log(stars);

  return (
    <Rating>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </Rating>
  );
};

const Rating = styled.div`
color: grey;
    &:hover {
      color: orange;
    }
  `;

export default RatingStar;
