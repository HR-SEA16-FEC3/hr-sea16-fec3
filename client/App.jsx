/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './components/overview/Overview';
import QandA from './components/Q&A/Q&A';
import Reviews from './components/reviews/Reviews';
import AppStyles from './AppStyles';
import Track from './Track';

const {
  Header,
  Footer,
  Divider,
  Wrapper,
  Outside,
  LogoImg,
  Title,
  Contents,
} = AppStyles;

const App = (props) => {
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState('');
  const [productList, setProductList] = useState([]);
  const [colorScheme, setColorScheme] = useState(false);
  const [isValidId, setIsValidId] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // get a list of products and set productid based on the url;
  useEffect(() => {
    let pathName = props.location.pathname.slice(1, -1);
    if (!pathName) {
      pathName = '20100';
    }
    setProductId(parseInt(pathName, 10));
    axios.get('/products')
      .then((result) => (setProductList(result.data)));
  }, []);

  // validate productID
  // set loading to false when product Id and productList are loaded
  useEffect(() => {
    productList.forEach((item) => {
      if (item.id === productId) {
        setIsValidId(true);
        setProductName(productList[productList.findIndex((obj) => obj.id === productId)].name);
      }
    });
    if (productList.length > 0 && productId) {
      setIsLoading(false);
    }
  }, [productId, productList]);

  const handleColorSchemeChange = () => setColorScheme(!colorScheme);

  // automatically change name when id changes

  const ClickWrapper = (props) => {
    console.log(props);
    return props.children;
  };

  return (
    <Outside colorScheme={colorScheme}>

      <Wrapper>

        <Header colorScheme={colorScheme}>
          <a href="/"><LogoImg src="./logo.png" alt="logo" /></a>
          <Title>
            ELDER-LY FASHION
          </Title>
        </Header>

        {isLoading
          ? <Contents>Loading</Contents>
          : (isValidId
            ? (
              <Contents>
                <Overview productId={productId} />
                <Divider />
                <QandA
                  productId={productId}
                  productName={productName}
                  colorScheme={colorScheme}
                />
                <Divider />
                <Reviews productId={productId} />
              </Contents>
            )
            : <Contents>This page seems to be empty!</Contents>)}
        <Footer colorScheme={colorScheme}>
          <Track>
            <ClickWrapper>
              <select
                defaultValue=""
                onChange={(e) => {
                  setProductId(parseInt(e.target.value, 10));
                  if (props.history) {
                    props.history.push(`/${e.target.value}`);
                  }
                }}
              >
                <option value="" disabled>Select your product</option>
                {productList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <label htmlFor="colorToggle">
                <input id="colorToggle" type="checkbox" onClick={handleColorSchemeChange} />
              </label>
            </ClickWrapper>
          </Track>
        </Footer>
      </Wrapper>

    </Outside>

  );
};

export default App;
