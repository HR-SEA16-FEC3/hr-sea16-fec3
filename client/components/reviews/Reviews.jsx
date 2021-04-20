import React, { useState } from 'react';
import ReviewList from './subcomponents/ReviewList.jsx';
import ReviewMeta from './subcomponents/ReviewMeta.jsx';
import dummyData from './subcomponents/DummyData/product_reviews_example';
import metaDummyData from './subcomponents/DummyData/product_metaData_example';

console.log(dummyData.results);
console.log(metaDummyData.ratings);
function Reviews() {
  return (

    <div data-testid="Reviews">
      Reviews Section!
      <ReviewMeta metaDummyData={metaDummyData} />
      <ReviewList dummyData={dummyData} />

    </div>

  );
}

export default Reviews;
