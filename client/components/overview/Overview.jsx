import React from 'react';
import Gallery from './Gallery';
import Information from './Information';
import Style from './Style';
import Cart from './Cart';


const Overview = () => (

  <div data-testid="Overview">
    <p>Product Overview Section:</p>

    {/* Image Gallery */}
    <Gallery />

    {/* Product Information */}
    <Information />

    {/* Style Selector */}
    <Style />

    {/* Add to Cart */}
    <Cart />

    <br />
  </div>

);

export default Overview;
