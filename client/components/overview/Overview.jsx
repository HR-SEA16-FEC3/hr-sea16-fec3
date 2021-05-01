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
            <GalleryComponents>
              {selectedStyle && (
                <Gallery
                  style={selectedStyle}
                  styleIndex={styleIndex}
                  setStyleIndex={setStyleIndex}
                  stylesList={stylesList}
                />
              )}
            </GalleryComponents>
          </LeftSection>

          <RightSection>
            {/* Product Information */}
            <Subcomponent>
              {productInfo && displayPrice && (
                <Information productInfo={productInfo} price={displayPrice} />
              )}
            </Subcomponent>

            {/* Style Selector */}
            <Subcomponent>
              {stylesList && selectedStyle && (
                <StylesList
                  stylesList={stylesList}
                  /* IF NO STYLE SELECTED, DISPLAY DEFAULT STYLE */
                  displayStyle={selectedStyle}
                  setSelectedStyle={setSelectedStyle}
                />
              )}
            </Subcomponent>

            {/* Add to Cart */}
            <Subcomponent>
              {selectedStyle && <Cart style={selectedStyle} />}
            </Subcomponent>
          </RightSection>
        </TopSection>

        <BottomSection>
          {/* Product Description */}
          {productInfo && <Description productInfo={productInfo} />}
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
  flex-direction: row;
  flex: 0 0 60%;
  margin: 12px;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  height: 800px;
`;

const RightSection = styled.div`
  flex-direction: column;
  flex: 1 1 40%;
  margin: 12px;
`;

const Subcomponent = styled.div`
  background: ${(props) => props.background};
  order: ${(props) => props.order};
  padding: 10px 0;
`;

const GalleryComponents = styled.div`
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
`;

export default Overview;
