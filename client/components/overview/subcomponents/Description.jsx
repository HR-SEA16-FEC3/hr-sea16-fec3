import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SloganStyled = styled.section`
  text-transform: uppercase;
  font-weight: bold;
`;

function Description(props) {
  const {
    descExample: {
      description,
      slogan,
    },
  } = props;

  return (
    <>
      <SloganStyled>{slogan}</SloganStyled>
      <br />
      {description}
      <br />
    </>
  );
}

Description.propTypes = {
  descExample: PropTypes.shape({
    slogan: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
};

export default Description;
