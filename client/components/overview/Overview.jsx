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

function Overview(props) {
  // styles in an array
  // setStyle
  // function(setSelectedStyle), change index in styles array
  const { productId } = props; // selected productId

  const [productsList, setProductsList] = useState([]);
  const [overviewProductId, setOverviewProductId] = useState(0);
  const [stylesList, setStylesList] = useState(0);
  const [styleId, setStyleId] = useState(0);

  // TODO: 4/23
  //   App passes productId to Overview
  //   useEffect to perform two axios requests
  //     1. :productId
  //     2. :productId/:styles
  //   render the default style
  // modal

  // FETCH PRODUCTS LIST
  useEffect(() => {
    async function fetchProducts() {
      const results = await axios.get('/products');
      console.log('product results:', results);
      setProductsList(results.data);
      setOverviewProductId(results.data[1].id); // sets first item as default product
    }
    fetchProducts();
    // console.log('PRODUCT CHECK:', productsList, overviewProductId); // RUNS BEFORE FETCH
  }, []); // empty dependency array will run effect only once (similar to componentDidMount)

  // FETCH STYLES LIST (AFTER PRODUCT LIST UPDATES)
  useEffect(() => {
    async function fetchStyles() {
      const list = await axios.get(`/products/${productId}/styles`);
      console.log('styles results:', list);
      setStylesList(list.data.results);
    }
    fetchStyles();
    // console.log('STYLES CHECK:', stylesList, styleId); // RUNS BEFORE FETCH
  }, [productId]);


  return (
    <div data-testid="Overview">
      <OverviewStyle>

        <TopSection>
          <LeftSection>
            {/* Image Gallery */}
            <Subcomponent>
              <Gallery styles={StylesExample} />
            </Subcomponent>
          </LeftSection>

          <RightSection>
            {/* Product Information */}
            <Subcomponent>
              <Information infoList={InfoExample} />
            </Subcomponent>

            {/* Style Selector */}
            <Subcomponent>
              <StylesList stylesList={StylesExample} />
            </Subcomponent>

            {/* Add to Cart */}
            <Subcomponent>
              <Cart />
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
  width: 60%;
  flex-grow: 1; /* REEVALUATE */
  margin: 10px;
`;

const RightSection = styled.div`
  flex-direction: column;
  width: 40%;
  margin: 10px;
`;

const Subcomponent = styled.div`
  background: ${(props) => props.background};
  order: ${(props) => props.order};
  padding: 10px 0;
`;

export default Overview;
