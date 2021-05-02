import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RatingsBar = (
  {
    rating,
    maxRatingWidth,
    colorScheme,
  },
) => {
  const fillerWidth = (maxRatingWidth) * 100;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 25,
    margin: 4,

  };

  const fillerStyles = {
    height: '100%',
    width: `${fillerWidth}%`,
    backgroundColor: colorScheme ? 'purple' : '#eead0e',
    borderRadius: 'inherit',
    textAlign: 'center',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${rating}`}</span>
      </div>
    </div>
  );
};

RatingsBar.propTypes = {
  rating: PropTypes.string.isRequired,
  maxRatingWidth: PropTypes.number.isRequired,
};

const fillerStyles = styled.div`
    height: '100%',
    width: ${(fillerWidth) => `${fillerWidth}%`},
    backgroundColor: ${(props) => (props.colorScheme ? '#9933FF' : '#eead0e')};
    borderRadius: 'inherit',
    textAlign: 'center',
  `;

export default RatingsBar;
