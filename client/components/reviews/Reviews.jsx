import React, { useState } from 'react';
import ReviewList from './subcomponents/ReviewList.jsx';
import dummyData from './subcomponents/DummyData/product_reviews_example';

console.log(dummyData.results);
console.log(dummyData.results.summary);
function Reviews() {
  return (

    <div data-testid="Reviews">
      Reviews Section coming soon!
      <ReviewList dummyData={dummyData} />

    </div>

  );
}

export default Reviews;
