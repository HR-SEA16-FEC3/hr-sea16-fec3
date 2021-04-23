import React, { useState } from 'react';
import styled from 'styled-components';

const RatingStar = ({ rating }) => {
  const [stars] = useState(rating);
  const star = Array.from({ length: 5 }, () => '🟊');

  return (
    <div>
      {star.map((s, index) => {
        let style = '#ddd';
        if (index < stars) {
          style = '#eead0e';
        }
        return (
          <span
            className="star"
            key={index}
            style={{
              color: style, width: 24, height: 24, fontSize: 24,
            }}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
};

const Rating = styled.div`
 filter: grayscale(100%); // maybe we want stars to become grey if inactive
  opacity: .3; // maybe we want stars to become opaque
  color: grey;
    &:hover {
      color: orange;
  `;

export default RatingStar;
