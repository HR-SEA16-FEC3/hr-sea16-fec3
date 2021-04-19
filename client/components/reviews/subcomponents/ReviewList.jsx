import React from 'react';
import data from './DummyData/product_reviews_example';

const ReviewList = (props) => (
  <div>
    <div className="review-list">
      {props.dummyData.results.slice(0, 2).map((item, i) => (
        <div className="review-tile" key={i}>
          <div className="review-title">{item.summary}</div>
          <div className="review-body">{item.body}</div>
        </div>
      ))}
    </div>
  </div>
);

// {data.map((item, i) => (
// console.log(dummyData[0].results);

export default ReviewList;
