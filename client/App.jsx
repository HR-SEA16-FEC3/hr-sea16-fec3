import React, { useState } from 'react';
import styled from 'styled-components';

import Overview from './components/overview/Overview';
import QandA from './components/Q&A/Q&A';
import Reviews from './components/reviews/Reviews';

const App = () => {
  const [countTest, setCountTest] = useState(0);

  return (
    <Wrapper>
      <Overview />
      <Divider />
      <QandA />
      <Divider />
      <Reviews />
    </Wrapper>
  );
};

const Divider = styled.hr`
display: block;
height: 1px;
border: 0;
border-top: 2px solid #ccc;
margin: 0;
padding: 0;
`;

const Wrapper = styled.div`
margin:0;
`;

export default App;
