import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Overview from './components/overview/Overview';
import QandA from './components/Q&A/Q&A';
import Reviews from './components/reviews/Reviews';

const App = () => {
  const [productsList, setProductsList] = useState([]);
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const results = await axios.get('/products');
      setProductsList(results.data);
      setProductId(results.data[0].id); // sets first item as default product
    }
    return fetchProducts();
  }, []); // empty dependency array will run effect only once (similar to componentDidMount)

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
