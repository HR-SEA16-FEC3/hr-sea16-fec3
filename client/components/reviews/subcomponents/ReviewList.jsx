import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RatingStar from './RatingStar.jsx';

const ReviewList = ({ dummyData }) => (
  // rename wrapper, use props
  <div className="review-list">
    {dummyData.map((item, i) => (
      <ReviewListStyling className="review-tile" key={i}>
        <div className="review-reviewer">
          <RatingStar
            rating={item.rating}
            count={5}
            size={40}
          />
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

ReviewList.propTypes = {
  dummyData: PropTypes.array.isRequired,
};

const RightFloat = styled.div`
  float: right;
  text-transform: capitalize;
  `;

const ReviewListStyling = styled.div`
  border-bottom: 2px solid grey;
  padding-top: 20px;
  `;

export default ReviewList;
