import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SloganStyled = styled.section`
    text-transform: uppercase;
    font-weight: bold;
  `;

function Description({ slogan, description }) {
  return (
    <>
      <SloganStyled>{slogan}</SloganStyled>
      {description}
    </>
  );
}

Description.propTypes = {
  slogan: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Description;
