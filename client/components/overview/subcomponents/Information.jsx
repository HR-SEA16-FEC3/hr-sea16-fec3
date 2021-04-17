import React from 'react';

const Information = (props) => (

  <div data-testid="Information">
    <div>Overview: Product Information</div>
    {/* Star Rating (# of reviews) */}
    {/* Product Category */}
    {/* Product Title */}
    {/* Price */}
    {/* Product Overview */}
    {/* Share on Social Media */}
    {props.infoList.id}
    <br />
  </div>

);

export default Information;
