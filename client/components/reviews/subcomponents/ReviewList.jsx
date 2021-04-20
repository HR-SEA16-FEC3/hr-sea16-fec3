import React from 'react';
import styled from 'styled-components';

const RightFloat = styled.div`
  float: right;
  `;

const ReviewTitle = styled.h1`

  `;

const ReviewList = (props) => (
  <div>
    <div className="review-list">
      {props.dummyData.results.slice(0, 2).map((item, i) => (
        <div className="review-tile" key={i}>

          <div className="review-reviewer">
            {item.rating}
            <RightFloat>
              <span>
                {item.reviewer_name}
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
            Helpful?&ensp
            {item.helpfulness}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewList;
