import React from 'react';
// import styled, { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Gallery from './subcomponents/Gallery';
import Information from './subcomponents/Information';
import StylesList from './subcomponents/StylesList';
import Cart from './subcomponents/Cart';
import InfoExample from './product_info_example.json';
import StylesExample from './product_styles_example.json';

const WrapperStyled = styled.section`
  font-family: sans-serif;
`;

function Overview() {
  // JS here

  return (
    <>
      <WrapperStyled>
        <div data-testid="Overview">
          <p>Product Overview Section:</p>

          {/* Image Gallery */}
          <Gallery />

          {/* Product Information */}
          <Information infoList={InfoExample} />

          {/* Style Selector */}
          <StylesList stylesList={StylesExample} />

          {/* Add to Cart */}
          <Cart />

          <br />
        </div>
      </WrapperStyled>
    </>
  );
}

export default Overview;
