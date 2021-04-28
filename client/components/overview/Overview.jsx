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
// - modal
// - overlay checkmark on selected image's thumbnail
// - dynamically render size and quantity

function Overview(props) {
  const { productId, setProductName } = props;
  const { default_price: defaultPrice } = InfoExample;
  const { results } = StylesExample; // TEMP FIX FOR 1ST IMAGE RENDER
  const tempStyle = results[0]; // TEMP FIX FOR 1ST IMAGE RENDER

  const [stylesList, setStylesList] = useState([]);
  const [defaultStyle, setDefaultStyle] = useState(tempStyle);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [displayPrice, setDisplayPrice] = useState(null);

  // Fetch: Styles List
  useEffect(() => {
    setStylesList(StylesExample.results);
    setDisplayPrice(Number(defaultPrice));
  }, []);

  // Fetch: Default Style
  useEffect(() => {
    const selectDefaultStyle = stylesList.find((object) => object['default?'] === true);
    setDefaultStyle(selectDefaultStyle);
  }, [stylesList]);

  // Update: display price
  useEffect(() => {
    if (selectedStyle !== null) {
      const originalPrice = selectedStyle.original_price;
      const salePrice = selectedStyle.sale_price;
      const price = salePrice === null ? originalPrice : salePrice;
      setDisplayPrice(Number(price));
    }
    return null;
  }, [selectedStyle]);

  /* selectedStyle === null
    ? <p>LOADING</p>
    : <Gallery style={selectedStyle} />
  */

  // FETCH API DATA FOUND BELOW

  return (
    <div data-testid="Overview">
      <OverviewStyle>

        <TopSection>
          <LeftSection>
            {/* Image Gallery */}
            <Subcomponent>
              {selectedStyle === null
                ? <Gallery style={tempStyle} /> // TEMP FIX FOR 1ST IMAGE RENDER
                : <Gallery style={selectedStyle} />}
            </Subcomponent>
          </LeftSection>

          <RightSection>
            {/* Product Information */}
            <Subcomponent>
              <Information infoList={InfoExample} price={displayPrice} />
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
                ? <Cart style={tempStyle} /> // TEMP FIX
                : <Cart style={selectedStyle} />}
            </Subcomponent>
          </RightSection>
        </TopSection>

        <BottomSection>
          {/* Product Description */}
          <LeftSection>
            <Description descExample={InfoExample} />
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
  /* width: 60%; */
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

/* ==================== READY TO GO LIVE ====================
const [productsList, setProductsList] = useState([]);
const [overviewProductId, setOverviewProductId] = useState(0);

// FETCH PRODUCTS LIST
  useEffect(() => {
    axios.get('/products')
      .then(async (products) => {
        // console.log('product results:', results);
        await setProductsList(products.data);
        await setOverviewProductId(products.data[0].id); // sets first item as default product
        await console.log('productsList updated:', productsList);
      })
      .catch((error) => console.log(error));
  }, []); // empty dependency array will run effect only once (similar to componentDidMount)

  // FETCH STYLES LIST (INVOKED ONLY AFTER PRODUCT LIST UPDATES)
  useEffect(() => {
    axios.get(`/products/${productId}/styles`)
      .then(async (styles) => {
        await setStylesList(styles.data.results);
        await console.log('styles results:', styles);
      })
      .catch((error) => console.log(error));
  }, [productId]);
*/
