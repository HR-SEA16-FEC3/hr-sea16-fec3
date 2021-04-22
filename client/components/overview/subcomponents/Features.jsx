import React from 'react';
import styled from 'styled-components';
import { CheckCircle } from '@styled-icons/octicons';

function Features(props) {
  const {
    feature: {
      feature,
      value,
    }
  } = props;

  return (
    <Feature>
      <CheckCircle size="20" /> {feature}: {value}
    </Feature>
  );
}

const Feature = styled.div`
  margin: 10px 0;
`;

export default Features;
