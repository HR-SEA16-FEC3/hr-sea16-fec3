import React from 'react';
import data from './DummyData/product_reviews_example';

const ReviewList = (props) => (
  <div>
    <div className="review-list">
      {props.dummyData.results.slice(0, 2).map((item, i) => (
        <div className="review-tile" key={i}>
          <div className="review-rating">{item.rating}</div>
          <div className="reviewer-name">
            {item.reviewer_name}
            {item.date.slice(0, 10)}
          </div>
          <div className="review-title">{item.summary}</div>
          <div className="review-body">{item.body}</div>
          <div className="review-helpful">{item.helpfulness}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewList;
