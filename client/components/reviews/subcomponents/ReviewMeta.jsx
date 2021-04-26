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
  return Number((count / accumulator).toFixed(1));
};

const getAverageRecommendation = ({ recommended }) => {
  const totalRecommendations = (Object.values(recommended)).reduce((a, b) => (Number(a) + Number(b)));
  return (((recommended.true / totalRecommendations) * 100).toFixed(0));
};

const ReviewMeta = (props) => {
  const averageRating = getAverageRating(props.metaDummyData);
  const averageRecommendation = getAverageRecommendation(props.metaDummyData);

  return (
    <div>
      <h1>RATINGS AND REVIEWS</h1>
      <MetaHeader className="review-Meta">
        <span>
          {averageRating}
&nbsp;
        </span>
      </MetaHeader>
      <RatingStar
        rating={averageRating}
      />
      <br />
      {averageRecommendation}
      % of reviews recommended this product
      <br />
      <br />

      5 Stars
      <RatingsBar />
      <br />
      4 Stars
      <RatingsBar />
      <br />
      3 Stars
      <RatingsBar />
      <br />
      2 Stars
      <RatingsBar />
      <br />
      1 Star
      <RatingsBar />
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
