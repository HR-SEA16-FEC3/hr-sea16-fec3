import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RatingStar = ({ rating }) => {
  const [ratingInteger] = useState(rating);
  const emptyColor = '#ddd';
  const size = 24;
  const activeColor = '#eead0e';
  const utfStar = <span>&#9733;</span>;

  const star = Array.from({ length: 5 }, () => utfStar);

  return (
    <div>
      {star.map((item, i) => (
        <span
          className="star"
          key={i}
          style={{
            color: ((i < ratingInteger) ? activeColor : emptyColor),
            width: '12px',
            height: size,
            // fontSize: size,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

RatingStar.propTypes = { rating: PropTypes.number.isRequired };

const Rating = styled.div`
 filter: grayscale(100%);
  opacity: .3;
  color: grey;
    &:hover {
      color: orange;
  `;

export default RatingStar;
