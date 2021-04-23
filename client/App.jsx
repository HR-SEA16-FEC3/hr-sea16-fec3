import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Overview from './components/overview/Overview';
import QandA from './components/Q&A/Q&A';
import Reviews from './components/reviews/Reviews';

const App = () => {
  const [productId, setProductId] = useState(0);
  useEffect(() => {
    // TODO: Set product id based on the URL
    setProductId(20100);
  });

  return (
    <Wrapper>
      <Header>
        <h1>Project Catwalk</h1>
      </Header>
      <Overview productId={productId} />
      <Divider />
      <QandA productId={productId} />
      <Divider />
      <Reviews productId={productId} />
    </Wrapper>
  );
};

const Header = styled.div`
  background:orange;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  padding: 5px;
`;

const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #ccc;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  font-family: sans-serif;
  scroll-behavior: smooth;
`;

export default App;
