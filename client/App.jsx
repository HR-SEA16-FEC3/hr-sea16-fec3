import React, { useState, useEffect } from 'react';
import { LogoOctocat } from '@styled-icons/ionicons-solid';
import axios from 'axios';
import Overview from './components/overview/Overview';
import QandA from './components/Q&A/Q&A';
import Reviews from './components/reviews/Reviews';
import AppStyles from './AppStyles';

const App = () => {
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState('');
  const [productList, setProductList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [colorScheme, setColorScheme] = useState(false);
  // initializing
  useEffect(() => {
    // TODO: Set product id based on the URL
    axios.get('/products')
      .then((result) => (setProductList(result.data)));
  }, []);

  useEffect(() => {
    if (productList.length > 0) {
      setProductName(productList[currentIndex].name);
      setProductId(productList[currentIndex].id);
    }
  }, [productList, currentIndex]);

  const handleColorSchemeChange = () => setColorScheme(!colorScheme);

  // automatically change name when id changes

  return (
    <AppStyles.Outside colorScheme={colorScheme}>
      <AppStyles.Wrapper>
        <AppStyles.Header colorScheme={colorScheme}>
          <h1>
            <a href="/">
              <AppStyles.Logo>
                <LogoOctocat size="36" />
              </AppStyles.Logo>
            </a>
            Project Catwalk
          </h1>
        </AppStyles.Header>
        <Overview productId={productId} />
        <AppStyles.Divider />
        <QandA productId={productId} productName={productName} colorScheme={colorScheme} />
        <AppStyles.Divider />
        <Reviews productId={productId} />
        <AppStyles.Footer colorScheme={colorScheme}>
          <select
            value={currentIndex}
            onChange={(e) => { setCurrentIndex(parseInt(e.target.value, 10)); }}
          >
            {productList.map((item) => (
              <option key={item.id} value={productList.indexOf(item)}>
                {item.name}
              </option>
            ))}
          </select>

          <label htmlFor="colorToggle">
            <input id="colorToggle" type="checkbox" onClick={handleColorSchemeChange} />
          </label>
        </AppStyles.Footer>
      </AppStyles.Wrapper>
    </AppStyles.Outside>
  );
};

export default App;
