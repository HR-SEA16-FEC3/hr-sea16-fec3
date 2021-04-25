import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LogoOctocat } from '@styled-icons/ionicons-solid';

import Overview from './components/overview/Overview';
import QandA from './components/Q&A/Q&A';
import Reviews from './components/reviews/Reviews';

const App = () => {
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    // TODO: Set product id based on the URL
    setProductId(20100);
  });

  return (
    <Outside>
      <Wrapper>
        <Header>
          <h1><Logo><LogoOctocat size="36"/></Logo> Project Catwalk</h1>
        </Header>
        <Overview productId={productId} setProductName={setProductName} />
        <Divider />
        <QandA productId={productId} productName={productName} />
        <Divider />
        <Reviews productId={productId} />
      </Wrapper>
    </Outside>
  );
};

const Header = styled.div`
  background: orange;
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
  max-width: 1080px;
  position: absolute;
  left: 50%;
  margin-left: -540px;
`;

const Outside = styled.div`
  background: whitesmoke;
`;

const Logo = styled.span`
  margin-left: 16px;
  margin-right: 8px;
`;

export default App;
