import React from 'react';
import styled from 'styled-components';
import data from './DummyData/product_reviews_example';
import RatingStar from './RatingStar.jsx';

const ReviewMeta = (props) => (
  <div>
    <h1>RATINGS AND REVIEWS</h1>
    <MetaHeader className="review-Meta">
      <span>
        3.5&nbsp;

      </span>
    </MetaHeader>
    <span><RatingStar /></span>
    <br />
    100% of reviews recommended this product
    <br />
    <br />
    5 Stars
    <br />
    4 Stars
    <br />
    3 Stars
    <br />
    2 Stars
    <br />
    1 Star
    <br />
    <br />
    Size
    <br />
    <br />
    Comfort
    <br />
  </div>
);

const MetaHeader = styled.div`
  flex-direction:row;
  font-size: 30px;
  `;

export default ReviewMeta;
//
