import React from 'react';
import data from './DummyData/product_reviews_example';

const ReviewMeta = (props) => (
  <div>
    <div className="review-Meta">{props.metaDummyData.recommended.true}</div>
  </div>
);

export default ReviewMeta;
//
