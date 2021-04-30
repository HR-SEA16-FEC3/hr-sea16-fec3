import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Features from './Features';

function Description({ productInfo }) {
  let receivedProductInfo = true;
  if (!productInfo || !Object.keys(productInfo).length) receivedProductInfo = false;
  if (!receivedProductInfo) return <div>Loading</div>;

  const {
    description,
    slogan,
    features: featuresList,
  } = productInfo;

  return (
    <>
      <BottomSection>
        {/* DESCRIPTION */}
        <Left>
          <SloganStyled>{slogan}</SloganStyled>
          <br />
          {description}
        </Left>

        {/* FEATURES */}
        <Right>
          {featuresList.map((feature, i) => (
            <Features feature={feature} key={i} />
          ))}
        </Right>
      </BottomSection>
    </>
  );
}

Description.propTypes = {
  // descExample: PropTypes.shape({
  //   slogan: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired,
  //   features: PropTypes.array,
  // })
};

const SloganStyled = styled.section`
  text-transform: uppercase;
  font-weight: bold;
`;

const BottomSection = styled.section`
  display: flex;
`;

const Left = styled.section`
  flex-basis: 60%;
  padding: 30px;
`;

const Right = styled.section`
  flex-basis: 40%;
  padding: 30px;
  border-left: 2px solid black;
`;

export default Description;
