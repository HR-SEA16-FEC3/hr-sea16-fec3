import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Gallery from './subcomponents/Gallery';
import Information from './subcomponents/Information';
import StylesList from './subcomponents/StylesList';
import Cart from './subcomponents/Cart';
import Description from './subcomponents/Description';
import InfoExample from './product_info_example.json';
import StylesExample from './product_styles_example.json';
import axios from 'axios';

// TODO:
// - overlay checkmark on selected image's thumbnail

function Overview({ productId }) {
  const [productInfo, setProductInfo] = useState({});
  const [stylesList, setStylesList] = useState(StylesExample.results);
  const [defaultStyle, setDefaultStyle] = useState(StylesExample.results[0]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [styleIndex, setStyleIndex] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(null);
  const [skus, setSkus] = useState({});

  // Fetch: Product Info
  function fetchProductInfo() {
    axios.get(`/products/${productId}`)
      .then((product) => {
        setProductInfo(product.data);
        setDisplayPrice(Number(product.data.default_price));
      })
      .catch((error) => console.log('Product Info useEffect:', error));
  }

  // Fetch: Styles List
  function fetchStylesInfo() {
    axios.get(`/products/${productId}/styles`)
      .then((styles) => {
        setStylesList(styles.data.results);
        setSelectedStyle(styles.data.results[styleIndex]); // Initialize w/ index = 0
      })
      .catch((error) => console.log('Styles useEffect:', error));
  }

  // Initialize: Product Info, Styles List
  useEffect(() => {
    if (productId !== 0) {
      fetchProductInfo();
      fetchStylesInfo();
    }
  }, [productId]);

  // Update: Default Style
  useEffect(() => {
    // setDefaultStyle(stylesList[0]);
    setDefaultStyle(stylesList[styleIndex]);
    if (defaultStyle !== null) setSkus(stylesList[0].skus);
  }, [stylesList]);

  // Update: Display Price (upon selecting new style)
  useEffect(() => {
    if (selectedStyle !== null) {
      const originalPrice = selectedStyle.original_price;
      const salePrice = selectedStyle.sale_price;
      const price = salePrice === null ? originalPrice : salePrice;
      setDisplayPrice(Number(price));
    }
    return null;
  }, [selectedStyle]);

  // Update: Selected Style (upon changing Style Index)
  useEffect(() => { setSelectedStyle(stylesList[styleIndex]); }, [styleIndex]);

  return (
    <div data-testid="Overview">
      <OverviewStyle>

        <TopSection>
          <LeftSection>
            {/* Image Gallery */}
            <Subcomponent>
              {selectedStyle && (
                <Gallery
                  style={selectedStyle}
                  styleIndex={styleIndex}
                  setStyleIndex={setStyleIndex}
                  stylesList={stylesList}
                />
              )}
            </Subcomponent>
          </LeftSection>

          <RightSection>
            {/* Product Information */}
            <Subcomponent>
              <Information productInfo={productInfo} price={displayPrice} />
            </Subcomponent>

            {/* Style Selector */}
            <Subcomponent>
              <StylesList
                stylesList={stylesList}
                /* IF NO STYLE SELECTED, DISPLAY DEFAULT STYLE */
                displayStyle={selectedStyle === null ? defaultStyle : selectedStyle}
                setSelectedStyle={setSelectedStyle}
              />
            </Subcomponent>

            {/* Add to Cart */}
            <Subcomponent>
              {selectedStyle === null
                ? <Cart style={defaultStyle} /> // TEMP FIX
                : <Cart style={selectedStyle} />}
            </Subcomponent>
          </RightSection>
        </TopSection>

        <BottomSection>
          {/* Product Description */}
          <LeftSection>
            <Description productInfo={productInfo} />
          </LeftSection>
        </BottomSection>

      </OverviewStyle>
    </div>
  );
}

const OverviewStyle = styled.section`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  background: whitesmoke;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 8px 4px 4px 4px;
`;

const BottomSection = styled.div`
  flex-direction: row;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 4px 4px 8px 4px;
`;

const LeftSection = styled.div`
  flex-direction: column;
  flex: 1 1 60%;
  margin: 10px;
`;

const RightSection = styled.div`
  flex-direction: column;
  flex: 1 1 40%;
  margin: 10px 40px;
`;

const Subcomponent = styled.div`
  background: ${(props) => props.background};
  order: ${(props) => props.order};
  padding: 10px 0;
`;

export default Overview;
