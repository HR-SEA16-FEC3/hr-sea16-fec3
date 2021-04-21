import React from 'react';
import styled from 'styled-components';
import RatingStar from './RatingStar.jsx';

const RightFloat = styled.div`
  float: right;
  text-transform: capitalize;
  `;

const ReviewListStyling = styled.div`
  border-bottom: 2px solid grey;
  padding-top: 20px;
  `;

const ReviewList = (props) => (
  <div className="review-list">
    {props.dummyData.slice(0, 2).map((item, i) => (
      <ReviewListStyling className="review-tile" key={i}>
        <div className="review-reviewer">
          <RatingStar />
          Review -&ensp;
          {item.rating}
          <RightFloat>
            <span>
              {item.reviewer_name}
              ,&nbsp;
            </span>
            <span>
              {
                  new Date(item.date).toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    },
                  )
                }
            </span>
          </RightFloat>
        </div>
        <div className="review-title">
          <h1>
            {item.summary}
          </h1>
        </div>
        <div className="review-body">
          <p>
            {item.body}
          </p>
        </div>
        <div className="review-helpful">
          Helpful?&ensp;Yes (
          {item.helpfulness}
          )
        </div>
        <br />
      </ReviewListStyling>
    ))}
  </div>
);

export default ReviewList;
