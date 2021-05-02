import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Features from './Features';

function Description({ productInfo, colorScheme }) {
  let receivedProductInfo = true;
  if (!productInfo || !Object.keys(productInfo).length) receivedProductInfo = false;
  if (!receivedProductInfo) return <div>Loading</div>;

  const {
    description,
    slogan,
    features: featuresList,
  } = productInfo;

  return (
    <DescriptionComponent colorScheme={colorScheme}>
      {/* DESCRIPTION */}
      <Left>
        <SloganStyled>{slogan}</SloganStyled>
        <br />
        {description}
      </Left>

      {/* FEATURES */}
      <Right colorScheme={colorScheme}>
        {featuresList.map((feature, i) => (
          <Features feature={feature} key={i} />
        ))}
      </Right>
    </DescriptionComponent>
  );
}

Description.propTypes = {
  // descExample: PropTypes.shape({
  //   slogan: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired,
  //   features: PropTypes.array,
  // })
};

const DescriptionComponent = styled.section`
  display: flex;
  color: ${(props) => (props.colorScheme ? 'whitesmoke' : 'black')};
`;

const SloganStyled = styled.section`
  text-transform: uppercase;
  font-weight: bold;
`;

const Left = styled.section`
  flex-basis: 60%;
  padding: 30px;
`;

const Right = styled.section`
  flex-basis: 40%;
  padding: 30px;
  border-left: 2px solid ${(props) => (props.colorScheme ? 'whitesmoke' : 'black')};
`;

export default Description;
