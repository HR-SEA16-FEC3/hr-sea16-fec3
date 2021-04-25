import React from 'react';
import styled from 'styled-components';
import RatingStar from './RatingStar.jsx';
import RatingsBar from './RatingBar.jsx';
// }
// const metaData = {
//   product_id: '20100',
//   ratings: {
//     3: '2',
//     4: '1',
//     5: '9',
//   },

const getAverageRating = ({ ratings }) => {
  const keys = Object.keys(ratings);
  const values = Object.values(ratings);

  let count = 0;
  let accumulator = 0;

  for (let i = 0; i < keys.length; i++) {
    count += keys[i] * values[i];
    accumulator += (+values[i]);
  }
  return (count / accumulator).toFixed(1);
};

const ReviewMeta = (props) => {
  const keys = Object.keys(props.metaDummyData.ratings);
  const values = Object.values(props.metaDummyData.ratings);
  const rating = getAverageRating(props.metaDummyData);

  return (
    <div>
      <h1>RATINGS AND REVIEWS</h1>
      <MetaHeader className="review-Meta">
        <span>
          {rating}
&nbsp;
        </span>
      </MetaHeader>
      <RatingStar
        rating={rating}
      />
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
};
const MetaHeader = styled.div`
  flex-direction:row;
  font-size: 30px;
  `;

export default ReviewMeta;
// keys.map((star, i) => (
//   <RatingsBar
//   key={i}
//   starNum={star}
//   starRating={ratings}
//   totalRatings={props.totalRatings}
//   />
