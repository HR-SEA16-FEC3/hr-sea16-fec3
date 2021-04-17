import React from 'react';
import Gallery from './subcomponents/Gallery';
import Information from './subcomponents/Information';
import Style from './subcomponents/Style';
import Cart from './subcomponents/Cart';
import InfoExample from './product_info_example.json';
import StylesExample from './product_styles_example.json';

function Overview() {

  // js here
  return (
    <div data-testid="Overview">
      <p>Product Overview Section:</p>

      {/* Image Gallery */}
      <Gallery />

      {/* Product Information */}
      <Information infoList={InfoExample} stylesList={StylesExample} />

      {/* Style Selector */}
      <Style />

      {/* Add to Cart */}
      <Cart />

      <br />
    </div>

  );
}

export default Overview;
