import React from 'react';

const RatingsBar = ({ rating, maxRatingWidth }) => {
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
    backgroundColor: '#eead0e',
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

export default RatingsBar;
