import React from 'react';
import styled from 'styled-components';
import RatingStar from './RatingStar.jsx';

// }
// const metaData = {
//   product_id: '20100',
//   ratings: {
//     3: '2',
//     4: '1',
//     5: '9',
//   },
const ReviewMeta = (props) => (
  // function averageRatings(props.metaDummyData) => {
  //   const keys = Object.keys(metaDummyData.ratings)
  //   const values = Object.values(metaDummyData.ratings)
  <div>
    console.log(props.metaDummyData.ratings)
    <h1>RATINGS AND REVIEWS</h1>
    <MetaHeader className="review-Meta">
      <span>
        3.5&nbsp;
      </span>
    </MetaHeader>
    <RatingStar
      rating={2}
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

const MetaHeader = styled.div`
  flex-direction:row;
  font-size: 30px;
  `;

export default ReviewMeta;
//
